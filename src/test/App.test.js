import React from "react"
import ReactDOM from "react-dom"
import { shallow, configure } from "enzyme"
import App from "../App"
import { render, cleanup } from "@testing-library/react"
import Adapter from "enzyme-adapter-react-16"
import Main from "../components/Main/Main"
import introImg from "../assets/imgs/undraw_version_control_9bpv.svg"
import firebase from "../firebase-config/firebaseConfig"
import { resolve } from 'path';
configure({ adapter: new Adapter() })
const db = firebase.firestore();

afterAll(() => {
   db.disableNetwork()
})

it("Should render <Main /> component", () => {
   const comp = shallow(<Main />);
   expect(comp.find('img#main_intro_img').prop("src")).toBe(introImg)
})

it("should read datas from firebase dataBase", async (done) => {
   return db.collection("repos").doc('BRfXkUVqWgMlkX03Yh8x').get().then(doc => {
      expect(doc.data()).toBeDefined()
      done()
   })
})