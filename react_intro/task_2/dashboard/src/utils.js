import { DateTime } from "luxon";

export function getFullYear() {
    return DateTime.local().year
}
export function getFooterCopy(isIndex) {
    if(isIndex === true){
        return "Holberton School"
    }
    return "Holberton School main dashboard"
}
export function getLatestNotification () {   
    return ("<strong>Urgent requirement</strong> - complete by EOD")
}