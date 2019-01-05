import { LOADED } from "./actionTypes";

export function loaded(pic){
    return{
        type: LOADED,
        pic
    }
}