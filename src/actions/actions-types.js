import { 
    ADDITION,
    SOUSTRACTION,
    MULTIPLICATION,
    NUMBER,
    BEGINWITHMULTIPLICATION,
    MULTIPLEOPERATORS,
    NOERROR,
    RESULT,
    RESET
} from '../constants/actions';

export const add = () => {
    return {
        type: ADDITION
    }
};

export const remove = () => {
    return {
        type: SOUSTRACTION
    }
};

export const mult = () => {
    return {
        type: MULTIPLICATION
    }
};
export const number = payload => {
    console.log('fd');
    return {
        type: NUMBER, payload
    }
};
export const beginWithMultiplication = () => {
    return {
        type: BEGINWITHMULTIPLICATION,
    }
};

export const multipleOperators = () => {
    return {
        type: MULTIPLEOPERATORS
    }
};

export const noError = () => {
    return {
        type: NOERROR
    }
};

export const result = () => {
    return {
        type: RESULT
    }
};
export const reset = () => {
    return {
        type: RESET
    }
};