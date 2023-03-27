import { ResponseModule } from "./responseModule";

export interface  ListResponseModel<T> extends ResponseModule{
 data:T[];   
}