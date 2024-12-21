import { useState } from "react";

export let [state, setState] = useState<string>();
export let [result, setResult] = useState<string>("Start by equations");

export const handleInputChange = (e: any) => {
    const value: string = e.target.value;
    setState(value);

    try {
        const solved = eval(value);

        setResult(solved);
    } catch (err) {
        setResult("Inavlid Expression")
    }
};