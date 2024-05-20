import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
	<div>
		<main className="text-red-500">
		<p>Placeholder for main</p>
		</main>
		<footer>
			<p>Placeholder for footer</p>
		</footer>
	</div>
  );
}
