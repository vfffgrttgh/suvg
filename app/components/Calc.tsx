import { FormEvent, useEffect, useState } from "react";
import { AddToCache, GetFromCache } from "~/scripts/backend";

export default function Calculations() {
    let [state, setState] = useState<any>();
    let [result, setResult] = useState<string>("Start by equations");

    const handleInputChange = (e: any) => {
        const value: string = e.target.value;
        setState(value);

        try {
            const solved = eval(value);

            setResult(solved);
        } catch (err) {
            setResult("Inavlid Expression")
        }
    };

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        AddToCache("prev_calc", result);
        window.alert("Cached/Updated cache!")
    };

    useEffect(() => {
        const data = GetFromCache("prev_calc");

        setResult(data);
    }, []);

    return (
        <>
            <form className="flex flex-wrap justify-center" onSubmit={handleSubmit}>
                <input
                    value={state}
                    onChange={handleInputChange}
                    placeholder="Enter equation (e.g., 2+2)"
                    className="overflow-hidden p-3 rounded-2xl m-3"
                />

                <button type="submit" className="bg-blue-500 w-fit h-fit p-2 rounded-2xl text-white">SUBMIT</button>
            </form>

            <h1 className="text-blue-500 text-center text-6xl font-semibold">{result}</h1>
        </>
    );
}
