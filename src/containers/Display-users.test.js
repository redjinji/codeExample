import DisplayUsers from "./display-users";
import React from "react";
import {configure, shallow} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

configure({adapter: new Adapter()});

let wrapper = null;
beforeEach(() => {
	wrapper = shallow(<DisplayUsers/>);
});

it('fetch waiting', () => {
	expect(wrapper.text()).toBe('Fetching Users');
});

it('fetch success state', ()=>{
	const containerInstance = wrapper.find('.users__container');
	expect(containerInstance.text()).toBe('Fetching Users');
});