import { format, formatDistanceToNow } from 'date-fns';

export function useFormattedDate(date: Date) {
    const displayDate = format(date, "MMMM d, yyyy 'at' HH:mm'h'");

    const relativeToNowDisplayDate = formatDistanceToNow(date, {
        addSuffix: true
    })

    const relativeToNowDisplayDateCapitalized = relativeToNowDisplayDate[0].toUpperCase() + relativeToNowDisplayDate.slice(1)

    return {displayDate, relativeToNowDisplayDate: relativeToNowDisplayDateCapitalized}
}