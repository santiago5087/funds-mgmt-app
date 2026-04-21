import { render, screen } from '@testing-library/angular';
import '@testing-library/jest-dom';
import { App } from './app';

describe('App', () => {
  it('should create the app', async () => {
    const { fixture } = await render(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
