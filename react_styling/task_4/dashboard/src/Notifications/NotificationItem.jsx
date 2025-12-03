import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
    render() {
        const { type, html, value, id, markAsRead } = this.props;
        const baseClasses = "text-base sm:text-lg border-b border-gray-400 pb-2 pt-1 px-2";

        if (type === 'default') {
            return (
                <li
                    className={`${baseClasses} text-blue-700`}
                    style={{ color: 'blue' }}
                    data-notification-type={type}
                    onClick={() => markAsRead && id !== undefined ? markAsRead(id) : undefined}
                >{value}</li>
            );
        } else if (type === 'urgent' && html !== undefined) {
            return (
                <li
                    className={`${baseClasses} text-red-600`}
                    style={{ color: 'red' }}
                    data-notification-type={type}
                    dangerouslySetInnerHTML={html}
                    onClick={() => markAsRead && id !== undefined ? markAsRead(id) : undefined}
                ></li>
            );
        } else {
            return (
                <li
                    className={`${baseClasses} text-red-600`}
                    style={{ color: 'red' }}
                    data-notification-type={type}
                    onClick={() => markAsRead && id !== undefined ? markAsRead(id) : undefined}
                >{value}</li>
            );
        }
    }
}

export default NotificationItem;
