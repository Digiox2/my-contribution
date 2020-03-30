import firebase from '../firebase-config/firebaseConfig'
const db = firebase.firestore()

export default function sendToFireStore(doc, datas) {
    db.collection('repos').doc(datas.repoName).set(datas).then(() => console.log("datas successfully written !"))
}