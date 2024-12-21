// TYPES

type db = {
    data?: Array<{ id: number; value: string; }>;
    users?: Array<{ username: string; password: string; }>;
};

// DATABASE

export const db: db = {
    data: [],
    users: [],
};

// DATABASE CALLS

export async function GET(type: string): Promise<any> {
    if(type === "DATA") {
        return db.data;
    } else {
        return db.users;
    };
};

export async function POST(type: string, { id, value}: { id?: any; value?: any; }, { username, password }: { username?: any; password?: any; }): Promise<any> {
    if(type === "DATA") {
        db.data?.push({ id: id, value: value });
    } else {
        db.users?.push({ username: username, password: password});
    };
};

// API CALLS

export async function fetchAPI(uri: string): Promise<any> {
    try {
        const data = await (await fetch(uri)).json();

        return data;
    } catch(err) {
        throw new Error("Something went wrong")
    };
};

// CACHING

export function AddToCache(key: string, value: string): void {
    localStorage.setItem(key, value);
};

export function GetFromCache(key: string): any {
    return localStorage.getItem(key);
};

export function DeleteFromCache(key: string): void {
    localStorage.removeItem(key);
};