export const getTimestamp = (time: number): string => {
    const timeDiff: number = new Date().getTime() - time;

    const floorTime = (divisor: number, unit: string): string => {
        return String(Math.floor(timeDiff / divisor)) + unit;
    }

    if (timeDiff < OneMinute) {
        return floorTime(OneSecond, "s");
    } else if (timeDiff < OneHour) {
        return floorTime(OneMinute, "m");
    } else if (timeDiff < OneDay) {
        return floorTime(OneHour, "h");
    } else if (timeDiff < OneWeek) {
        return floorTime(OneDay, "d");
    } else if (timeDiff < OneMonth) {
        return floorTime(OneWeek, "w");
    } else if (timeDiff < OneYear) {
        return floorTime(OneMonth, "mo");
    } else {
        return floorTime(OneYear, "y");
    }
}

export const getRandomTimestamp = (time: number): string => {
    return getTimestamp(new Date().getTime() - 200000);
}

const OneSecond: number = 1000;
const OneMinute: number = 60 * OneSecond;
const OneHour: number = 60 * OneMinute;
const OneDay: number = 24 * OneHour;
const OneWeek: number = 7 * OneDay;
const OneMonth: number = 30.4 * OneDay;
const OneYear: number = 365 * OneDay;