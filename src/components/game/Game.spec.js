import { mount, shallow } from "enzyme";
import React from "react";
import Game from "./Game";

it('renders without crashing', () =>{
    shallow(<Game />);
});

it('render game status correctly',() =>{
    const wrapper = mount( < Game /> )
    const firstPlayer = wrapper.find('div.game-info').children().first().text();
    expect(firstPlayer).toEqual('Next Player: X')

    const button = wrapper.find('button.square').first()
    button.simulate('click')
    const secondPalyer = wrapper.find('div.game-info').children().first().text()
    expect(secondPalyer).toEqual('Next Player: O')

    const turn2 = wrapper.find('button.square').at(1)
    turn2.simulate('click')

    const turn3 = wrapper.find('button.square').at(4)
    turn3.simulate('click')

    const turn4 = wrapper.find('button.square').at(5)
    turn4.simulate('click')

    const turn5 = wrapper.find('button.square').at(8)
    turn5.simulate('click')

    const winner = wrapper.find('div.game-info').children().first().text()
    expect(winner).toEqual('Winner: X')
})