import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(ctx.json());
    })
);

describe('App page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of avatar characters', async () => {
    render(
      <App />
    );


  });
});
