export const SET_QUESSTATE =  'SET_QUESSTATE';
export const BACKEND_LINK = 'BACKEND_LINK';
export const quesstate = (questionstate)=>{
    return {
        type:SET_QUESSTATE,
        questionstate
    }
}
