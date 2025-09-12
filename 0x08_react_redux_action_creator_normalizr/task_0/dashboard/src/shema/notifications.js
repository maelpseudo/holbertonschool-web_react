import notificationsData from "../../notifications.json";

export default function getAllNotificationsByUser(userId) {
    return notificationsData.filter(items => items.author.id == userId).map(item => item.context)
}