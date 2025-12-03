import closeBtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import { Component } from 'react';

class Notifications extends Component {
    static defaultProps = { notifications: [], displayDrawer: true };

    constructor(props) {
        super(props);
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    shouldComponentUpdate(nextProps) {
        const currentLen = Array.isArray(this.props.notifications) ? this.props.notifications.length : 0;
        const nextLen = Array.isArray(nextProps.notifications) ? nextProps.notifications.length : 0;
        return nextLen !== currentLen;
    }

    render() {
        const { notifications, displayDrawer } = this.props;
        return (
            <>
                <div className="notification-title text-right">Your notifications</div>
                {
                    displayDrawer ? (
                        <div className='notifications border-2 border-dashed border-[var(--main-color)] p-4'>
                            {notifications.length > 0 ? (
                                <>
                                    <p>Here is the list of notifications</p>
                                    <button
                                        onClick={() => console.log('Close button has been clicked')}
                                        aria-label='Close'
                                    >
                                        <img className='close-icon' src={closeBtn} alt='close button' />
                                    </button>
                                    <ul>
                                        {notifications.map((notification, index) => (
                                            <NotificationItem
                                                key={index}
                                                type={notification.type}
                                                value={notification.value}
                                                html={notification.html}
                                                id={notification.id}
                                                markAsRead={this.markAsRead}
                                            />
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <p>No new notification for now</p>
                            )}
                        </div>
                    ) : null
                }
            </>
        );
    }
}

export default Notifications;

