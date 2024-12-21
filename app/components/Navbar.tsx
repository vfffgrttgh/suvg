import { redirect } from "~/scripts/redirection";

export default function Navbar() {
    return (
        <>
            <nav className="bg-gray-800 p-3 m-3 rounded-2xl flex flex-wrap justify-center">
                <div className="w-10 h-10 bg-blue-500 rounded-3xl m-3" />
                <h1 className="text-white text-4xl font-semibold m-3">SUVG</h1>
                <button className="bg-red-500 text-white rounded-2xl p-3 w-fit h-fit m-3" onClick={() => redirect("https://saxena-flix.netlify.app")}>SF</button>
                <button className="bg-green-500 text-white rounded-2xl p-3 w-fit h-fit m-3" onClick={() => redirect("https://aoblox.vercel.app")}>Aoblox</button>
                <button className="bg-blue-500 text-white rounded-2xl p-3 w-fit h-fit m-3" onClick={() => redirect("https://financer-aay123.vercel.app")}>Financer</button>
            </nav>
        </>
    )
}