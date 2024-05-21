import { render, screen } from '@testing-library/react';

import CardGrid from './CardGrid';
import kady from '../assets/avatar-kady.jpg';

const items = [
  { name: 'Kady A', title: 'CEO', avatar: kady.src, quote: 'Test1' }, 
  { name: 'Kady B', title: 'CFO', avatar: kady.src, quote: 'Test2' }, 
  { name: 'Kady C', title: 'CTO', avatar: kady.src, quote: 'Test3' }, 
  { name: 'Kady D', title: 'COO', avatar: kady.src, quote: 'Test4' }
];

describe('CardGrid tests', () => {
  test('Should render four cards only displaying name and title in closed state', () => {
    render(<CardGrid items={items} />);
    expect(screen.getByText('Kady A')).toBeVisible();
    expect(screen.getByText('CEO')).toBeVisible();
    expect(screen.getByText('Kady B')).toBeVisible();
    expect(screen.getByText('CFO')).toBeVisible();
    expect(screen.getByText('Kady C')).toBeVisible();
    expect(screen.getByText('CTO')).toBeVisible();
    expect(screen.getByText('Kady D')).toBeVisible();
    expect(screen.getByText('COO')).toBeVisible();
  });
});
