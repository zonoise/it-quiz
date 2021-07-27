import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './navbar';

test('リンクのタイトルが表示されていること', () => {
  const { debug } = render(<Navbar />);
  //debug();
  expect(screen.getByText(/.*一覧.*/)).toBeInTheDocument();
});
