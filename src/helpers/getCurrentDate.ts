export function getCurrentDate():string {
    const today = new Date();
    const date = today.setDate(today.getDate()); 
    const currentDate = new Date(date).toISOString().split('T')[0];

    return currentDate
}
