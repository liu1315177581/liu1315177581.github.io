/**
 * @module counter
 * @author 小虎牙
 */

import { message } from 'antd'
import { fetch,API } from '/src/api'
import { actionTypes } from '/src/constants'
import { moment } from '/src/util'

export function addAction(){
    return (dispatch,getState)=>{
        dispatch({
            type:actionTypes.COUNTER_ADD
        })
    }
}

export function subtractAcion(){
    return (dispatch,getState)=>{
        dispatch({
            type:actionTypes.COUNTER_SUBTRACT
        })
    }
}

export function updateTimeAction(){
    return (dispatch,getState)=>{
        setTimeout(()=>{
            dispatch({
                type:actionTypes.COUNTER_UPDATETIME,
                payload:moment(Date.now()).format('YYYY-MM-DD hh:mm:ss a')
            });
            dispatch(updateTimeAction())
        },1000)
    }
}

// Get
export function fetchInterfaceTestActionGet(param) {
    return (dispatch, getState) => {
        fetch.get(API.T1, param)
             .then(res => {
                //  console.log(res);
             })
             .catch(exc => {
                 message.error(exc.status + ' > ' + exc.statusText);
             });
    }
}

// Post
export function fetchInterfaceTestActionPost(param) {
    return (dispatch, getState) => {
        fetch.post(API.T2, param)
             .then(res => {
                 console.log(res);
             })
             .catch(exc => {
                 message.error(exc.status + ' > ' + exc.statusText);
             });
    }
}