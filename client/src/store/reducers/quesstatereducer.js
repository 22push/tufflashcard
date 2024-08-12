import * as quesstateaction from './../actions/quesstateaction';

const inistate = {
    questionstate: false,
    questionupdate: {}
};

const quesreducer = (state = inistate, action) => {
    switch (action.type) {
        case quesstateaction.SET_QUESSTATE:
            return {
                ...state,
                questionstate: action.questionstate,
            };
        case quesstateaction.QUESTION_UP: 
            return {
                ...state,
                questionupdate: action.questup,  
            };
        default:
            return state;
    }
};

export default quesreducer;
