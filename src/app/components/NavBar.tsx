import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="p-4 bg-emerald-400">
			<Link href="/" className="pr-4 hover:text-violet-600">
				Acceuil
			</Link>
			<Link href="/about" className="pr-4 hover:text-violet-600">
				About us
			</Link>
		</nav>
	);
}
