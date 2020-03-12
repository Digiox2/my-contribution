
import firebase from "../../firebase-config/firebaseConfig"

const provider = new firebase.auth.GithubAuthProvider();
provider.addScope('public_repo')

const signInProvider = () => {
    return (
        firebase.auth().signInWithPopup(provider).then(res => {
            console.log(res.user)
        }).catch(err => {
            console.log(err.message);
        })
    );
}

export default signInProvider;