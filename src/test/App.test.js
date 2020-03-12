import React from "react"
import ReactDOM from "react-dom"
import { shallow, configure } from "enzyme"
import App from "../App"
import { render, cleanup } from "@testing-library/react"
import Adapter from "enzyme-adapter-react-16"
import Main from "../components/Main/Main"
import introImg from "../assets/imgs/undraw_version_control_9bpv.svg"
import firebase from "../firebase-config/firebaseConfig"
configure({ adapter: new Adapter() })

it("Should render <Main /> component", () => {
    const comp = shallow(<Main />);
    expect(comp.find('img#main_intro_img').prop("src")).toBe(introImg)
})

it("should read datas from firebase dataBase", () => {
    const db = firebase.firestore();
    db.collection("repos").get().then((data) => {
        let newState = []
        data.forEach(async (doc) => {
            console.log("Data received: ", doc.data())
            newState.push(doc.data())
        })
        expect(newState.length).not.toBe(0)
    })
})