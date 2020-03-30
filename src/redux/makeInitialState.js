export default function makeInitialState() {
    const { getItem } = window.localStorage;
    return {
        userToken: getItem('token'),
        userProfileObject: getItem('userProfile')
    }
}