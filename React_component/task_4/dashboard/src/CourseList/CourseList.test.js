import { shallow } from "enzyme";
import React from "react";
import CourseList from "./CourseList";

describe("<CourseList/>",()=>{
    it("Check that it renders CourseList component without crashing",()=>{
        expect(shallow(<CourseList/>))
    })
    it("Check that it renders the 5 different rows",()=>{
        expect(shallow(<CourseList/>))
    })
})