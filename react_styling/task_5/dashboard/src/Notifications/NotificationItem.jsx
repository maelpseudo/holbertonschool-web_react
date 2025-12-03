import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
    render() {
        const { type, html, value, id, markAsRead } = this.props;

        if (type === 'default') {
            return (
                <li
                    style={{ color: "var(--default-notification-item)" }}
                    data-notification-type={type}
                    className="max-[912px]:border max-[912px]:border-gray-300 max-[912px]:p-2 max-[912px]:mb-2 text-sm sm:text-base"
                    onClick={() => markAsRead && id !== undefined ? markAsRead(id) : undefined}
                >{value}</li>
            );
        } else if (type === 'urgent' && html !== undefined) {
            return (
                <li
                    style={{ color: "var(--urgent-notification-item)" }}
                    data-notification-type={type}
                    className="max-[912px]:border max-[912px]:border-gray-300 max-[912px]:p-2 max-[912px]:mb-2 text-sm sm:text-base"
                    dangerouslySetInnerHTML={html}
                    onClick={() => markAsRead && id !== undefined ? markAsRead(id) : undefined}
                ></li>
            );
        } else {
            return (
                <li
                    style={{ color: "var(--urgent-notification-item)" }}
                    data-notification-type={type}
                    className="max-[912px]:border max-[912px]:border-gray-300 max-[912px]:p-2 max-[912px]:mb-2 text-sm sm:text-base"
                    onClick={() => markAsRead && id !== undefined ? markAsRead(id) : undefined}
                >{value}</li>
            );
        }
    }
}

export default NotificationItem;
