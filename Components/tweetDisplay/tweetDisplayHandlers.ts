export const calculateTimeDifference = (time: string): string => {
    const now: Date = new Date();
    const then: Date = new Date(time);
    const difference: number = (now.getTime() - then.getTime()) / 1000;
    const yearDifference: number = difference / (60 * 60 * 24 * 365);
    const dayDifference: number = difference / (60 * 60 * 24);
    const hourDifference: number = difference / (60 * 60);
    const minuteDifference: number = difference / (60);
    if (yearDifference > 1) {
        return Math.floor(yearDifference) + 'y';
    } else if (dayDifference > 1) {
        return Math.floor(dayDifference) + 'd';
    } else if (hourDifference > 1) {
        return Math.floor(hourDifference) + 'h';
    } else if (minuteDifference > 1) {
        return Math.floor(minuteDifference) + 'm';
    } else if (difference < 60) {
        return Math.floor(difference) + 's'
    }
}