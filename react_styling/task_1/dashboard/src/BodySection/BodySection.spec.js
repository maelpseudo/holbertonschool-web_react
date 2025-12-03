import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import BodySection from './BodySection';

test('renders a heading with the title prop', () => {
    render(
        <BodySection title="test">
            <p>child</p>
        </BodySection>
    );
    expect(screen.getByRole('heading', { level: 2, name: 'test' })).toBeInTheDocument();
});

test('renders any number of children', () => {
    render(
        <BodySection title="multi">
            <p>child1</p>
            <p>child2</p>
            <span>child3</span>
        </BodySection>
    );
    expect(screen.getByText('child1')).toBeInTheDocument();
    expect(screen.getByText('child2')).toBeInTheDocument();
    expect(screen.getByText('child3')).toBeInTheDocument();
});


