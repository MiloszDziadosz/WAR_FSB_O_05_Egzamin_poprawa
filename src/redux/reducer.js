
import {combineReducers} from "redux";
import {ADD_ROCKET, REMOVE_ROCKET, LAUNCH_ROCKET} from "./actions";

const rockets = (state = [], action) => {
    switch (action.type) {
        case ADD_ROCKET:
            return [...state, action.payload]
        
        case REMOVE_ROCKET:
            return state.filter(element => element.rocket !== action.payload);
        
        case LAUNCH_ROCKET:
            return state.map(element => {
                return element.rocket === action.payload ? {...element, launched: true} : element
            });
    }
    return state;
};

export default combineReducers({
    rockets
});