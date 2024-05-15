export default function Navbar() {
    return (
        <nav className="bg-black text-white py-4">
            <div className="container flex justify-between items-center mx-auto">
                <h1>Blog App</h1>
                <ul className="flex gap-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/create">Create</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}