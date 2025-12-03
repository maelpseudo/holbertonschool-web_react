import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { describe, test, expect, afterEach } from '@jest/globals';
import WithLogging from './WithLogging';

class MockApp extends React.Component {
  render () {
    return (
      <h1>
        Hello from Mock App Component
      </h1>
    )
  }
}

describe('WithLogging HOC', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders heading from wrapped component', () => {
    const Wrapped = WithLogging(MockApp);
    render(<Wrapped />);
    expect(screen.getByRole('heading', { level: 1, name: 'Hello from Mock App Component' })).toBeInTheDocument();
  });
});


