import reducer from "./reducers"
import { createStore } from 'redux';
export default createStore(reducer, {
    userToken: window.localStorage.getItem('token'),
    userProfileObject: JSON.parse(window.localStorage.getItem('user'))
})