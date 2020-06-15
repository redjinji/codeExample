import {act} from "react-dom/test-utils";
import {render, unmountComponentAtNode} from "react-dom";
import DisplayUsers from "./display-users";
import React from "react";
import {configure} from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";

configure({adapter: new Adapter()});

let container = null;
beforeEach(() => {
	container = document.createElement("div");
	document.body.appendChild(container);
});

afterEach(() => {
	unmountComponentAtNode(container);
	container.remove();
	container = null;
});

it('fetch waiting', () => {
	act(() => {
		render(<DisplayUsers/>, container);
	});
	
	let fetchingContainer = container.querySelector('.fetching');
	expect(fetchingContainer.innerHTML).toBe('Fetching Users');
});

it('fetch success state', ()=>{
	console.log(container);
	const containerInstance = container.find('.users__container');
	console.log(containerInstance);
	
	// containerInstance.fetchSuccess({data:{data:[]}});
});
