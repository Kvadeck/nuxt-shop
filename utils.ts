export function sortByProperty<T>(array: T[], property: keyof T): T[] {
    return array.slice().sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0; // if equal
    });
}