import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

test('renders the Holberton copyright when isIndex is true', () => {
    render(<Footer />);
    const expectedText = `Copyright ${getCurrentYear()} - ${getFooterCopy(true)}`;
    const paragraph = screen.getByText(expectedText);

    expect(paragraph.tagName).toBe('P');
    expect(paragraph).toHaveTextContent(expectedText);
});
