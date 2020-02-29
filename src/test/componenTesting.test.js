import React from "react"
import ReactDOM from "react-dom"
import { shallow, configure } from "enzyme"
import App from "../App"
import { render, cleanup } from "@testing-library/react"
import Adapter from "enzyme-adapter-react-16"
import Main from "../components/Main/Main"
configure({ adapter: new Adapter() })

it("Should render <Main /> component", () => {
    const comp = shallow(<Main />);
    expect(comp.find('img#main_intro_img').prop("src")).toBe("imgs/undraw_version_control_9bpv.svg")
})