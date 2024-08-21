export function sortByProperty<T>(array: T[], property: keyof T): T[] {
    return array.slice().sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
}

export function setLocalStorage<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage<T>(key: string, defaultValue: T): T {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) as T : defaultValue;
}