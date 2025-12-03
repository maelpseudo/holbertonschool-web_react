import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';
import { test, expect, jest } from '@jest/globals';

test('NotificationItem is rendered without crashing', () => {
    render(<NotificationItem />)
})

test('Calls markAsRead prop when clicked', () => {
    const markAsRead = jest.fn();
    const props = { id: 2, type: 'default', value: 'Hello', markAsRead };
    render(<NotificationItem {...props} />);
    const liElement = screen.getByRole('listitem');
    fireEvent.click(liElement);
    expect(markAsRead).toHaveBeenCalledTimes(1);
    expect(markAsRead).toHaveBeenCalledWith(2);
});
