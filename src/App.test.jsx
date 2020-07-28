import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom'
import App from './App';

//tirar o history das rotas e do app

test('App snapshot test', () => {
  const component = renderer.create(<BrowserRouter><App /></BrowserRouter>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
