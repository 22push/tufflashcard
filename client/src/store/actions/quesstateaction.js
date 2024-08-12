export const SET_QUESSTATE = 'SET_QUESSTATE';
export const BACKEND_LINK = 'BACKEND_LINK';
export const QUESTION_UP = 'QUESTION_UP';

export const setQuesState = (questionstate) => {
    return {
        type: SET_QUESSTATE,
        questionstate
    };
};

export const setQuestionUp = (questup) => {
    return {
        type: QUESTION_UP,
        questup
    };
};
