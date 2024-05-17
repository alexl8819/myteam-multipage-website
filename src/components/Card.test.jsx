import { within, render, screen, fireEvent } from '@testing-library/react';

import Card from './Card';
import drake from '../assets/avatar-drake.jpg';

// TODO: should use built-in queries instead of using container
describe('Card tests', () => {
  test('Should render a open card when "opened" prop is passed', () => {
    const { container } = render(<Card name="Drake Johnson" title="CEO" avatar={drake.src} quote="Test" opened />);
    expect(container.querySelector('input[type="checkbox"]')).toBeChecked();
  });

  test('Clicking open icon should open the card', () => {
    const { container } = render(<Card name="Drake Johnson" title="CEO" avatar={drake.src} quote="This is my quote" />);
    fireEvent.click(container.querySelector('input[type="checkbox"]'));
    expect(screen.getByText('This is my quote')).toBeVisible();
  });
});

