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
                <div className="text-right pr-4 text-sm sm:text-base">Your notifications</div>
                {
                    displayDrawer ? (
                        <div className="relative lg:absolute lg:right-4 lg:top-4">
                            <div className="fixed inset-0 lg:static lg:w-80 bg-white border border-dashed border-rose-500 p-3 sm:p-4 lg:rounded-none z-20">
                                {notifications.length > 0 ? (
                                    <>
                                        <p className="text-base sm:text-lg font-medium mb-3">Here is the list of notifications</p>
                                        <button
                                            onClick={() => console.log('Close button has been clicked')}
                                            aria-label='Close'
                                            className="absolute right-3 top-3"
                                        >
                                            <img className='w-4 h-4' src={closeBtn} alt='close button' />
                                        </button>
                                        <ul className="list-none pl-0 space-y-2">
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
                                    <p className="text-base sm:text-lg">No new notification for now</p>
                                )}
                            </div>
                        </div>
                    ) : null
                }
            </>
        );
    }
}

export default Notifications;
