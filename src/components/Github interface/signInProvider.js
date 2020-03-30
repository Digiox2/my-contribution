
import firebase from "../../firebase-config/firebaseConfig"
import store from "../../redux/store"
import {saveToken, saveUserProfile} from '../../redux/actions'

const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('public_repo').addScope('read:user')

const signInProvider = () => {
   
    return (
        firebase.auth().signInWithPopup(provider).then(res => {
            store.dispatch(saveToken(res.credential.accessToken))
            store.dispatch(saveUserProfile(res.additionalUserInfo.profile))
            console.log(store.getState())
        }).catch(err => {
            console.log(err.message);
        })
    );
}

export default signInProvider;