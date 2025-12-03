import React, { useContext } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from './App';
import { newContext } from "../Context/context";

const ContextObserver = () => {
  const { user } = useContext(newContext);
  return <div data-testid="user-state">{JSON.stringify(user)}</div>;
};

test('handleDisplayDrawer and handleHideDrawer toggle the notification drawer', () => {
  render(<App />);
  expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /close/i }));
  expect(screen.queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument();
  fireEvent.click(screen.getByText(/Your notifications/i));
  expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
});

test('logIn updates the user state with the provided credentials', () => {
  render(
    <App>
      <ContextObserver />
    </App>
  );
  const readUser = () => JSON.parse(screen.getByTestId('user-state').textContent);
  expect(readUser()).toEqual({ email: '', password: '', isLoggedIn: false });

  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'user@example.com' } });
  fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'password123' } });
  fireEvent.click(screen.getByRole('button', { name: /ok/i }));

  expect(readUser()).toEqual({ email: 'user@example.com', password: 'password123', isLoggedIn: true });
  expect(screen.getByText(/Welcome user@example.com/i)).toBeInTheDocument();
});

test('logOut resets the user state', () => {
  render(
    <App>
      <ContextObserver />
    </App>
  );
  const readUser = () => JSON.parse(screen.getByTestId('user-state').textContent);

  fireEvent.change(screen.getByLabelText(/Email:/i), { target: { value: 'user@example.com' } });
  fireEvent.change(screen.getByLabelText(/Password:/i), { target: { value: 'password123' } });
  fireEvent.click(screen.getByRole('button', { name: /ok/i }));
  expect(readUser()).toEqual({ email: 'user@example.com', password: 'password123', isLoggedIn: true });

  fireEvent.click(screen.getByText(/logout/i));
  expect(readUser()).toEqual({ email: '', password: '', isLoggedIn: false });
  expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email:/i)).toHaveValue('');
  expect(screen.getByLabelText(/Password:/i)).toHaveValue('');
});

test('markNotificationAsRead removes notifications and logs the action', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
  render(<App />);

  const firstNotification = screen.getByText('New course available');
  fireEvent.click(firstNotification);

  expect(consoleSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  expect(screen.queryByText('New course available')).not.toBeInTheDocument();
  consoleSpy.mockRestore();
});
