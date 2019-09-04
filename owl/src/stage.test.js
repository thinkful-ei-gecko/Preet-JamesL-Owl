import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './stage';
import renderer from 'react-test-renderer';

//Smoke Test
describe('<Participant />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage store = {
      [
        {
          id: 3,
          name: 'James',
          avatar: '',
          inSession: true,
          onStage: false
        },
        {
          id: 4,
          name: 'Preet',
          avatar: '',
          inSession: true,
          onStage: true
        }
      ]
    } />, div);
    ReactDOM.unmountComponentAtNode(div)
  });
  //Snapshot test
  it('renders UI as expected', () => {
    const tree = renderer.create(<Stage store = {
      [
        {
          id: 3,
          name: 'James',
          avatar: '',
          inSession: true,
          onStage: false
        },
        {
          id: 4,
          name: 'Preet',
          avatar: '',
          inSession: true,
          onStage: true
        }
      ]
    } />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});