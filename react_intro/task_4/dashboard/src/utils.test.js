import { getFullYear,getLatestNotification,getFooterCopy } from "./utils"


describe("utils test", ()=>{
    test('getFullYear test check returns the correct year (be careful to not create a time bomb)', () => {
        const years = new Date.getFullYear()
        expect(getFullYear()).toBe(years)
    })

    test('getFooterCopy test check returns the correct string when the argument is true or false', () => {
        expect(getFooterCopy(true)).toBe("Holberton School")
        expect(getFooterCopy(false)).toBe("Holberton School main dashboard")
    })

    test('getLatestNotification test check string', () => {
        expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
    })
})