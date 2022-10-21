import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import {MicrophoneIcon, SearchIcon} from "@heroicons/react/solid";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Google clone</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link
					rel="icon"
					href="/favicon.ico"
				/>
			</Head>
			<Header />

			{/* body */}
			<form className="flex flex-col items-center mt-40">
				<Image
					width="300"
					objectFit="cover"
					height="100"
					src="https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Fln4IHgPYpvNoIWpJ2Y1_c9msxXA%3D%2F0x0%3A2012x1341%2F2000x1333%2Ffilters%3Afocal(1006x670%3A1007x671)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F15483559%2Fgoogle2.0.0.1441125613.jpg&w=480&q=75"
				/>
				<div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full item-center sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 mr-3 text-gray-500" />
					<input
						type="text"
						className="flex-grow focus: outline-none"
					/>
					<MicrophoneIcon className="h-5" />
				</div>
				<div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
					<button className="btn"> Google Search</button>
					<button className="btn"> Maybe I'll be Lucky </button>
				</div>
			</form>

			{/* footer */}

			<Footer />
		</div>
	);
}
