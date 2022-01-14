import {reduxAction, store} from "./store";
import {batch} from "react-redux";

export const batchDispatch = (actions: reduxAction[]) => {
    batch(()=>{
        actions.forEach((action)=>{
            store.dispatch(action);
        })
    })
}