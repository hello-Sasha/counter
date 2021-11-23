import { combineReducers } from "redux"; // to combine all reducers from diff folders


const reducers = ['todo']; // name reducers

export default combineReducers(
    reducers.reduce((initial, name) => {
        initial[name] = require(`./${name}`).default;
        return initial;
    }, {})
); 