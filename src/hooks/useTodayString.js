export default function useTodayString() {
    let todayStr = new Date().toISOString().replace(/T.*$/, '')
    return todayStr;
}

export function useDayToString(day) {
    let dayStr = new Date(day).toISOString().replace(/T.*$/, '')
    return dayStr;
}