import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';


test('renders two labels, two inputs and one button', () => {
    const { container } = render(<Login />);
    const labels = container.querySelectorAll('label');
    const inputs = container.querySelectorAll('input');
    const button = screen.getByRole('button', { name: /ok/i });

    expect(labels).toHaveLength(2);
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('focuses the email input when its label is clicked', async () => {
    const user = userEvent.setup();

    render(<Login />);
    const emailLabel = screen.getByText('Email');
    const emailInput = screen.getByLabelText('Email', { selector: 'input' });
    await user.click(emailLabel);
    expect(emailInput).toHaveFocus();
});

test('focuses the password input when its label is clicked', async () => {
    const user = userEvent.setup();

    render(<Login />);
    const passwordLabel = screen.getByText('Password');
    const passwordInput = screen.getByLabelText('Password', { selector: 'input' });
    await user.click(passwordLabel);
    expect(passwordInput).toHaveFocus();
});
