import React from 'react';
import { render, cleanup } from '@testing-library/react'; //render function will "render" the component, cleanup function is used to remove components from the DOM to prevent memory leaking
import '@testing-library/jest-dom/extend-expect';
import About from '..';

afterEach(cleanup); //no leftover memory data that could give us false results

describe('About component', () => { //describe function to declare the component we're testing
    //first test - verify that the component is rendering
    it('renders', () => { //it function: first argument, a string declares what is being tested; second argument- a callback function runs the test
        render(<About />) //test can also be used interchangeably with it to create a test
    })
    //second test - snapshot is a serialized version of the DOM node structure, enabled by Jest
    it('matches snapshot DOM node structure', () => {
      const { asFragment } = render(<About />) //asFragment returns a snapshot of the About component  
      expect(asFragment()).toMatchSnapshot(); // expect function with a matcher to assert something about a value. In the following statement, we'll use the toMatchSnapshot matcher to assert that snapshots will match
    })
  })
