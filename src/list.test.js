import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './store';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    }); 
    
    it ('snapshot of list', () => {
        const snap = renderer.create(<List />).toJSON();
        expect(snap).toMatchSnapshot();
    });
});