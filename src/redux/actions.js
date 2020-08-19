const ADD_ROCKET = 'ADD_ROCKET';
const REMOVE_ROCKET = 'REMOVE_ROCKET';
const LAUNCH_ROCKET = 'LAUNCH_ROCKET';

const add = (rocket) => {
    return {
        type: ADD_ROCKET,
        payload: rocket
    }
}

const remove = (rocket) => {
    return {
        type: REMOVE_ROCKET,
        payload: rocket
    }
}

const launch = (rocket) => {
    return {
        type: LAUNCH_ROCKET,
        payload: rocket
    }
}

export {
    ADD_ROCKET, REMOVE_ROCKET, LAUNCH_ROCKET,
    add, remove, launch
}