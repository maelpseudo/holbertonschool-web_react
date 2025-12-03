import { render, screen } from '@testing-library/react';
import { test, expect } from '@jest/globals';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

test('contains a div with class bodySectionWithMargin', () => {
    render(
        <BodySectionWithMarginBottom title="test">
            <p>child</p>
        </BodySectionWithMarginBottom>
    );
    const div = document.querySelector('.bodySectionWithMargin');
    expect(div).not.toBeNull();
});

test('renders the BodySection component', () => {
    render(
        <BodySectionWithMarginBottom title="hello">
            <p>child</p>
        </BodySectionWithMarginBottom>
    );
    expect(screen.getByRole('heading', { level: 2, name: 'hello' })).toBeInTheDocument();
});


