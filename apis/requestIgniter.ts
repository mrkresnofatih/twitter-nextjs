import {API_ROUTES} from "./routes";
import {reduxAction} from "../tedux/store";
import {appConfig} from "../constants/appConfig";
import axios from "axios";
import {batchDispatch} from "../tedux/batchDispatch";
import {apiLogger} from "./apiLogger";

const hostApi = appConfig.apiUrl + "/api";

export const postRequestIgniter = (
    route: string | API_ROUTES,
    data: any,
    config: any | undefined,
    errorDispatch: (errorCode: string) => reduxAction[],
    successDispatch: (result: any) => reduxAction[]
) => {
    setTimeout(() => {
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
    }, 2000)
}

export const getRequestIgniter = (
    route: API_ROUTES | string,
    config: any | undefined,
    errorDispatch: (errorCode: string) => reduxAction[],
    successDispatch: (result: any) => reduxAction[]
) => {
    setTimeout(() => {
        axios.get(hostApi + route, config).then((response) => {
            apiLogger(response);
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
    }, 2000)
}