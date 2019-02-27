import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/App';

configure({ adapter: new Adapter() });

describe('App', () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});