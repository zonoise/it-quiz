import '@testing-library/jest-dom';

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './navbar';
import { ModalCorrect } from './modalCorrect';

describe('ModalCorrect', () => {
  test('', () => {
    let status = false;
    const closeFunc = () => {
      status = true;
    };
    const { debug } = render(
      <ModalCorrect
        closeFunc={() => {
          closeFunc();
        }}
      />,
    );
    //debug();

    expect(screen.getByText(/.*正解.*/)).toBeInTheDocument();
  });
});
