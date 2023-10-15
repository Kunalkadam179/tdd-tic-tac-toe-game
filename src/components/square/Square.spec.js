import { shallow } from "enzyme";
import React from "react";
import Square from "./Square";

it('render without crashing', () => {
    shallow(<Square />)
})