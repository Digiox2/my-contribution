export const SAVE_TOKEN = 'SAVE_TOKEN';
export const SAVE_USER_PROFILE = 'SAVE_USER_PROFILE';

export function saveToken(token) {
    window.localStorage.setItem('token', token)
    return {type: SAVE_TOKEN, value: token}
}
export function saveUserProfile(userObject) {
    window.localStorage.setItem('user', JSON.stringify(userObject))
    return {type: SAVE_USER_PROFILE, value: userObject}
}