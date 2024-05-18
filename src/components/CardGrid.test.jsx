import { render, screen } from '@testing-library/react';
import { vi, beforeEach } from 'vitest';

import CardGrid from './CardGrid';
import kady from '../assets/avatar-kady.jpg';

const items = [
  { name: 'Kady A', title: 'CEO', avatar: kady.src, quote: 'Test1' }, 
  { name: 'Kady B', title: 'CEO', avatar: kady.src, quote: 'Test2' }, 
  { name: 'Kady C', title: 'CEO', avatar: kady.src, quote: 'Test3' }, 
  { name: 'Kady D', title: 'CEO', avatar: kady.src, quote: 'Test4' }
];

describe('CardGrid mobile screen tests', () => {
  beforeEach(() => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 375,
      configurable: true
    });
  });
  test('Should render four cards with the last one opened on mobile screens', () => {
    render(<CardGrid items={items} />);
    expect(screen.getByText('Kady D')).toBeVisible();
    expect(screen.getByText('Test4')).toBeVisible();
  });
});

describe('CardGrid tablet and greater screen tests', () => {
  beforeEach(() => {
    Object.defineProperty(document.documentElement, 'clientWidth', {
      value: 1280,
      configurable: true
    });
  });
  test('Should render three cards with the 2nd to last card opened on tablet or greater screens', () => {
    render(<CardGrid items={items} />);
    expect(screen.getByText('Kady C')).toBeVisible();
    expect(screen.getByText('Test3')).toBeVisible();
  });
});
