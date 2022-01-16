import {API_ROUTES} from "./routes";
import {reduxAction} from "../tedux/store";
import {appConfig} from "../constants/appConfig";
import axios from "axios";
import {batchDispatch} from "../tedux/batchDispatch";
import {apiLogger} from "./apiLogger";

const hostApi = appConfig.apiUrl + "/api";

export const postRequestIgniter = (
    route: API_ROUTES,
    data: any,
    config: any | undefined,
    errorDispatch: (errorCode: string) => reduxAction[],
    successDispatch: (result: any) => reduxAction[]
) => {
    axios.post(hostApi + route, data, config).then((response) => {
        const {result, errorCode} = response.data;
        apiLogger(response);
        if (errorCode !== null) {
            batchDispatch([
                ...(errorDispatch(errorCode))
            ])
        } else {
            batchDispatch([
                ...(successDispatch(result))
            ])
        }
    })
}

export const getRequestIgniter = (
    route: API_ROUTES,
    config: any | undefined,
    errorDispatch: (errorCode: string) => reduxAction[],
    successDispatch: (result: any) => reduxAction[]
) => {
    axios.get(hostApi + route, config).then((response) => {
        const {result, errorCode} = response.data;
        if (errorCode !== null) {
            batchDispatch([
                ...(errorDispatch(errorCode))
            ])
        } else {
            batchDispatch([
                ...(successDispatch(result))
            ])
        }
    })
}