import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
    render() {
        const { type, html, value, id, markAsRead } = this.props;

        if (type === 'default') {
            return (
                <li
                    style={{ color: "blue" }}
                    data-notification-type={type}
                    onClick={() => markAsRead && id !== undefined ? markAsRead(id) : undefined}
                >{value}</li>
            );
        } else if (type === 'urgent' && html !== undefined) {
            return (
                <li
                    style={{ color: "red" }}
                    data-notification-type={type}
                    dangerouslySetInnerHTML={html}
                    onClick={() => markAsRead && id !== undefined ? markAsRead(id) : undefined}
                ></li>
            );
        } else {
            return (
                <li
                    style={{ color: "red" }}
                    data-notification-type={type}
                    onClick={() => markAsRead && id !== undefined ? markAsRead(id) : undefined}
                >{value}</li>
            );
        }
    }
}

export default NotificationItem;
