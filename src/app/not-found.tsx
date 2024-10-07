"use client";
import NavBar from "./components/NavBar";

// Error boundaries must be Client Components

export default function NotFound() {
	return (
		<div className="">
			<main className="">
				<NavBar />
				<h1 className="text-soso text-xl text-center p-4">
					404 page non trouvée
				</h1>
			</main>
		</div>
	);
}
