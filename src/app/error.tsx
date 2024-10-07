"use client";
import NavBar from "./components/NavBar";

// Error boundaries must be Client Components

export default function CustomError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	console.log(error);
	return (
		<div className="">
			<main className="">
				<NavBar />
				<h1 className="text-soso text-xl text-center p-4">
					Erreur un probleme est survenue
				</h1>
			</main>
		</div>
	);
}
