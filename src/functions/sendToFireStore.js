import firebase from '../firebase-config/firebaseConfig'
const db = firebase.firestore()

export default function sendToFireStore(doc, datas) {
    return new Promise((resolve, reject) => {
        db.collection('repos').doc(datas.repoName).set(datas).then(() => resolve("success")
        ).catch((err => reject(err)))
    })
}