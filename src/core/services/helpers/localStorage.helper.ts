export const localStorage: Storage = window.localStorage;

export const deleteAll = (): void => {
    localStorage.clear();
}

export const createValue = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const createValues = (values: Array<{ key: string, value: string }>): void => {
    values.forEach(value => createValue(value.key, value.value));
}

export const readValue = (key: string): any | null => {
    const data = localStorage.getItem(key);
    if (data !== null) {
        try {
            return JSON.parse(data);
        } catch (error) {
            console.error(`Error parsing data for key '${key}': ${error}`);
            return null;
        }
    }
    return null;
}


export const isExist = (key: string): boolean => {
    return localStorage.getItem(key) !== null;
}

export const updateValue = (key: string, value: string): void => {
    if (isExist(key)) {
        createValue(key, value);
    } else {
        throw new Error(`Key '${key}' does not exist in localStorage.`);
    }
}

export const deleteValue = (key: string): void => {
    localStorage.removeItem(key);
}

export const getAllKeys = (): string[] => {
    const keys: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        keys.push(localStorage.key(i)!);
    }
    return keys;
}

export const getAllValues = (): string[] => {
    const values: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)!;
        const value = localStorage.getItem(key)!;
        values.push(value);
    }
    return values;
}

export const getAllEntries = (): Array<{ key: string, value: string }> => {
    const entries: Array<{ key: string, value: string }> = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)!;
        const value = String(localStorage.getItem(key))!;
        entries.push({ key, value });
    }
    return entries;
}

export const firstOrUpdate = <T>(key: string, value: T): void => {
    if (isExist(key)) {
        updateValue(key, JSON.stringify(value));
    } else {
        createValue(key, value);
    }
}
