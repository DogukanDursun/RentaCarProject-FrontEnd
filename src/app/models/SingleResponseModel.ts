import {ResponseModule} from "./responseModule";
export interface SingleResponseModel<T> extends ResponseModule{
    data:T
}