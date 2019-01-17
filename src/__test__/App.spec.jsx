import React from "react";
import {mount} from "enzyme";
import renderer from 'react-test-renderer';
import App from '../App.js';
describe("App Component", () => {
    let mountwrap;

    beforeEach(() => {
        mountwrap = mount(<App />);
    });

    it('App  component renders correctly', () => {
        expect(mountwrap.children().length).not.toBeLessThan(1);
    });

    it('App  component renders correctly using snapshots', () => {
        const rendered = renderer.create(
            <App />
        );
        expect(rendered.toJSON()).toMatchSnapshot();
    });
});