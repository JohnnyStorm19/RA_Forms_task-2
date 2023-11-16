export function formatDateToIsoStringType(date: string): string {
    return date.split('.').reverse().join('-');
}