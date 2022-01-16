// @flow
import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import {DialogCard} from "./DialogCard";
import {Dictionary} from "../../types/dictionary";
import {PurpleTextFieldLight} from "../input/PurpleTextField";
import styles from '../../styles/card/tweetdraftcard.module.css';
import {PurpleButton} from "../button/PurpleButton";
import {GiphyFetch} from "@giphy/js-fetch-api";
import {Grid} from "@giphy/react-components";
import {useDebounce} from "use-debounce";
import {Icon} from "../icon/Icon";
import {IconFileNames} from "../../utils/iconUtils";
import {useDispatch} from "react-redux";
import {QueueLoading} from "../../tedux/sys/actions";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

type Props = {
    onClose: () => void
};
export const TweetDraftCard = (props: Props) => {
    const [draft, setDraft] = useState<tweetDraft>(initialDraft);
    const [tagDraft, setTagDraft] = useState<string>("");
    const [giphyKwDraft, setGiphyKwDraft] = useState<string>("");
    const [giphyKw] = useDebounce(giphyKwDraft, 1000);
    const [giphyGrid, setGiphyGrid] = useState<ReactNode>(<></>);

    const onChangeHandlers: Dictionary<(e: React.ChangeEvent<HTMLInputElement>) => void> = {
        onMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setDraft({
                ...draft,
                message: e.target.value
            })
        },
        onTagDraftChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTagDraft(e.target.value)
        },
        onGiphyKwChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            setGiphyKwDraft(e.target.value)
        }
    }

    const addImageUrl = (url: string) => setDraft({...draft, imageUrl: url})

    const removeImageUrl = () => setDraft({...draft, imageUrl: ""})
    const addTagDraft = () => {
        setDraft({
            ...draft,
            tags: [...draft.tags, tagDraft]
        })
        setTagDraft("")
    }

    const renderAllAddedTags = () => {
        let result = "";
        draft.tags.forEach((tag, index) => {
            if (index === 0) {
                result = result + "#" + tag
            } else {
                result = result + " #" + tag
            }
        })
        return result;
    }

    useEffect(() => {
        setGiphyGrid(<></>)
        setTimeout(() => {
            setGiphyGrid(
                <GiphyGrid
                    setImageUrl={addImageUrl}
                    searchKeyword={giphyKw}
                />)
        }, 250)
    }, [giphyKw])

    const dispatch = useDispatch();
    const queueSampleLoading = () => dispatch(QueueLoading())

    return (
        <DialogCard
            title={"Draft"}
            closable={true}
            onClose={props.onClose}
            footerRight={
                <PurpleButton onClick={queueSampleLoading} label={"POST"}/>
            }
        >
            <PurpleTextFieldLight
                label={"message"}
                onChange={onChangeHandlers.onMessageChange}
                value={draft.message}
                multiline={true}
                rows={4}
            />
            <div className={styles.tweetDraftInputSpace}/>
            <div className={styles.tweetTagDraftContainer}>
                <PurpleTextFieldLight
                    label={"tags"}
                    onChange={onChangeHandlers.onTagDraftChange}
                    value={tagDraft}
                />
                <span style={{width: 16}}/>
                <PurpleButton onClick={addTagDraft} label={"ADD"}/>
            </div>
            <p className={styles.tweetTagsCombinedText}>{renderAllAddedTags()}</p>
            <div className={styles.tweetDraftInputSpace}/>
            <PurpleTextFieldLight
                label={"Search Gifs"}
                onChange={onChangeHandlers.onGiphyKwChange}
                value={giphyKwDraft}
            />
            <div className={styles.tweetDraftSpace}/>
            {giphyGrid}
            <div className={styles.tweetDraftSpace}/>
            <SelectedImageCard src={draft.imageUrl} onDelete={removeImageUrl}/>
        </DialogCard>
    );
};

interface tweetDraft {
    message: string,
    imageUrl: string,
    tags: string[]
}

const initialDraft: tweetDraft = {
    imageUrl: "",
    message: "",
    tags: []
}

const GiphyGrid = (props: {
    searchKeyword: string,
    setImageUrl: (s: string) => void
}) => {
    const fetchGifs = (searchKeyword: string) => (offset: number) => giphyFetch.search(searchKeyword, {
        offset, limit: 10
    });

    if (props.searchKeyword.length > 0) {
        return (
            <div style={{height: 200, overflow: "auto"}}>
                <Grid
                    onGifClick={(gif, e) => {
                        e.preventDefault();
                        props.setImageUrl(gif.images.downsized_medium.url)
                    }}
                    width={350}
                    fetchGifs={fetchGifs(props.searchKeyword)}
                    columns={2}
                />
            </div>
        )
    }

    return (
        <></>
    )
}

const SelectedImageCard = (props: {
    src: string,
    onDelete: () => void
}) => {
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (props.src.length === 0) {
            if (!error) {
                setError(true)
            }
        } else {
            setError(false);
        }
    }, [props.src])

    if (error) {
        return (
            <></>
        )
    }

    return (
        <div className={styles.tweetDraftSelectedImg}>
            <div className={styles.tweetDraftSelectedImgContainer}>
                <img
                    src={props.src}
                    onError={() => setError(true)}
                />
                <p>Successfully Selected!</p>
            </div>
            <Icon
                onClick={props.onDelete}
                className={styles.tweetDraftSelectedImgClose}
                iconFileName={IconFileNames.CLOSE_OUTLINE_WHITE}
            />
        </div>
    )
}