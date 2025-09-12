import notificationsData from "../../notifications.json";
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users")
const message = new schema.Entity("message",{"idAttribute":"guid"})
const notification = new schema.Entity(
    "notification",{
        author:user,
        context:message
    }
)
const normalizedData = normalize(notificationsData,notification)

export { normalizedData, getAllNotificationsByUser };

function getAllNotificationsByUser(userId) {
    return normalizedData.filter(items => items.author.id == userId).map(item => item.context)
}
