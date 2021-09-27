import React from 'react';
import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { listAvatars } from '../../fixtures/listAvatars.json';

const server = setupServer(
  rest.get(
    'https://last-airbender-api.herokuapp.com/api/v1/characters',
    (req, res, ctx) => {
      return res(ctx.json(listAvatars));
    }
  )
);

describe('App page', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of avatar characters', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });
});
