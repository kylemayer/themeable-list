import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ModeProvider from '../context/ModeProvider';
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
    const { container } = render(
      <ModeProvider>
        <App />
      </ModeProvider>
    );

    screen.getByRole('button', { name: 'theme' });

    const ul = await screen.findByRole('list', { name: 'avatars' });
    expect(ul).not.toBeEmptyDOMElement;
    expect(container).toMatchSnapshot;
  });

  it('toggles the theme mode from light to dark', async () => {
    render(
      <ModeProvider>
        <App />
      </ModeProvider>
    );

    const toggle = screen.getByLabelText('theme');

    fireEvent.change(toggle, { target: { value: 'white' } });
    fireEvent.change(toggle, { target: { value: '#3B3B3B' } });

    expect(toggle.value).toBe('#3B3B3B');
  });
});

