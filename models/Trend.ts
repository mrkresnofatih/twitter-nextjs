export type Trend = {
    id: number,
    tagName: string,
    tweetCount: number
}

export const getSampleTrend = (trendId: number): Trend => {
    return {
        id: 9,
        tagName: "banIsrael",
        tweetCount: 101222
    }
}