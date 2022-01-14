import {appConfig} from "../constants/appConfig";
import axios from "axios";
import {batchDispatch} from "../tedux/batchDispatch";
import {SetPlayerId, SetToken} from "../tedux/auth/actions";
import {DropLoading, QueueLoading} from "../tedux/sys/actions";

const hostApi = appConfig.apiUrl + "/api";

const apiLogger = (...anything: any[]) => console.log("authApiLogger: ", ...anything);

export const loginApi = (userName: string, password: string) => {
    batchDispatch([QueueLoading()]);
    axios.post(hostApi + "/auth/login", {
        userName, password
    }).then(({data}: { data: { result: any, errorCode: string } }) => {
        const {result, errorCode} = data;
        if (errorCode === "") {
            apiLogger("Error", errorCode);
        } else {
            batchDispatch([
                SetToken(result["token"]),
                SetPlayerId(result["playerId"])
            ]);
        }
        batchDispatch([
            DropLoading()
        ]);
    })
}