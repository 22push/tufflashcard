import * as quesstateaction from './../actions/quesstateaction'

const inistate = {
    quesstateaction: false
};

const quesreducer = (state = inistate ,action) =>{
    switch(action.type){
        case quesstateaction.SET_QUESSTATE:
            return {
                ...state,
                questionstate:action.quesstateaction,
            }
            default:
                return state;
    }
};
export default quesreducer;