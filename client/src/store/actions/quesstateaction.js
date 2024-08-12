export const SET_QUESSTATE =  'SET_QUESSTATE';

export const quesstate = (questionstate)=>{
    return {
        type:SET_QUESSTATE,
        questionstate
    }
}
