import React from 'react';
import { render, screen } from "@testing-library/react-native";
import '@testing-library/jest-dom';

import Dashboard from '../src/Dashboard';

test('first test...', () => {
    const { asFragment, getByText } = render(<Dashboard />)

    expect(getByText('Dashboard').children).toEqual(["Dashboard"]);
})