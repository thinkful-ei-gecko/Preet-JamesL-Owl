import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './participants';
import renderer from 'react-test-renderer';

//Smoke Test
describe('<Participant />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant store = {
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

  it('renders UI as expected', () => {
    const tree = renderer.create(<Participant store = {
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

