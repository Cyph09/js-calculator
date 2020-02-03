// Actions
// 1. CLEAR
// 2. RESERT
// 3.BACKSPACE
// 4.DIVIDE
// 5.MULTIPLY
// 6.ADD
// 7.SUBTRACT
// 8.EQUALS
// 9.CHANGE_SIGN
// 10.ADD_DECIMAL
// 11.CLICK_DIGIT

// Action creators
export const clear = () => ({ type: CLEAR });

export const resert = () => ({ type: RESERT });

export const clickDigit = () => ({ type: CLICK_DIGIT});

export const addDecimal = () => ({ type: ADD_DECIMAL });

export const changeSign = () => ({ type: CHANGE_SIGN });

export const backspace = () => ({ type: BACKSPACE });

export const divide = () => ({ type: DIVIDE });

export const multiply = () => ({ type: MULTIPLY });

export const add = () => ({ type: ADD });

export const subtract = () => ({ type: SUBTRACT });

export const equls = () => ({ type: EQUALS });
