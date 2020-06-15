import React from 'react';
import ReactDOM, {render, unmountComponentAtNode} from 'react-dom';
import Adapter from 'enzyme-adapter-react-16';
import {act} from "react-dom/test-utils";
import App from './App';
import { configure} from 'enzyme';

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

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App/>, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("render App component", () => {
	act(() => {
		render(<App/>, container);
	});
	expect(container.children[0].classList[0]).toBe("users__container");
});
