/**
 * @module counter
 * @author 小虎牙
 */
import { moment } from '/src/util'
import { actionTypes } from '/src/constants'
export default function counterReducer(state,action){
    switch (action.type){
        case actionTypes.COUNTER_ADD:
            return {
                ...state,
                count:state.count+1
            }
        case actionTypes.COUNTER_SUBTRACT:
            return {
                ...state,
                count:state.count-1
            }
        case actionTypes.COUNTER_UPDATETIME:
            return {
                ...state,
                currentTime:action.payload
            }
        default:
            return state || {
                count:98,
                countMax:100,
                countMin:0,
                currentTime:moment(Date.now()).format('YYYY-MM-DD hh:mm:ss a')
            }
    }
}