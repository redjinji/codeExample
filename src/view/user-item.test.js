import users from "../mocks/mocks";
import {configure, shallow} from "enzyme/build";
import UserItem from "./user-item";
import React from "react";
import Adapter from "enzyme-adapter-react-16/build";

configure({adapter: new Adapter()});

it('render user', () => {
	const user = users.results[0];
	const cb = () => {};
	const fullUserName = `${user.name.title} ${user.name.first} ${user.name.last}`;
	const wrapper = shallow(<UserItem user={user} clicked={cb}/>)
	
	expect(wrapper.text()).toBe(fullUserName);
});

it('click user', ()=>{
	const user = users.results[0];
	const cb = jest.fn();
	const userItem = shallow(<UserItem user={user} clicked={cb}/>)
	
	userItem.simulate('click');
	
	expect(cb).toBeCalled();
});