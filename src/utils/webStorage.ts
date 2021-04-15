import { WebStorageOptions } from '../core/models';

const PREFIX = 'nv';

export function getItemByKey(key: string, options?: WebStorageOptions): any {
    if (key) {
        const { prefix = '', isSessionStorage = false } = { ...options };
        const keyName = getKey(prefix || key);
        try {
            const value: any = getValue(keyName, isSessionStorage);
            return prefix ? value?.[key] : value;
        } catch (e) {}
    }
}

export function setItemByKey(key: string, value: any, options?: WebStorageOptions): void {
    if (key) {
        const { prefix = '', isSessionStorage = false } = { ...options };
        const keyName = getKey(prefix || key);
        let item: any = value || '';
        if (prefix) {
            item = getValue(keyName, isSessionStorage) || {};
            item[key] = value;
        }
        getStorage(isSessionStorage).setItem(keyName, JSON.stringify(item));
    }
}

export function removeItemByKey(key: string, options?: WebStorageOptions): void {
    if (key) {
        const { prefix = '', isSessionStorage = false } = { ...options };
        const keyName = getKey(prefix || key);
        if (prefix) {
            const item: any = getValue(keyName, isSessionStorage) || {};
            delete item[key];
            getStorage(isSessionStorage).setItem(keyName, JSON.stringify(item));
        } else {
            getStorage(isSessionStorage).removeItem(keyName);
        }
    }
}

function getKey(prefix: string): string {
    return `${PREFIX}:${prefix}`;
}

function getValue(key: string, isSessionStorage: boolean): any {
    let value: any = getStorage(isSessionStorage).getItem(key);
    value = value && JSON.parse(value || '""');
    return value || null;
}

function getStorage(isSessionStorage?: boolean): any {
    return isSessionStorage ? sessionStorage : localStorage;
}
