import React from "react";
import Header from "../../components/Header";
import {getProviders, signIn} from "next-auth/react";

export default function signin({providers}) {
	return (
		<>
			<Header />
			<div className="mt-40">
				{Object.values(providers).map((provider) => (
					<div
						key={provider.name}
						className="flex flex-col items-center"
					>
						<img
							className="w-52 object-cover"
							src="https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Fln4IHgPYpvNoIWpJ2Y1_c9msxXA%3D%2F0x0%3A2012x1341%2F2000x1333%2Ffilters%3Afocal(1006x670%3A1007x671)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F15483559%2Fgoogle2.0.0.1441125613.jpg&w=480&q=75"
							alt="google-logo"
						/>
						<p className=" text-sm italic my-10 text-center">
							This Webpage is Created for Learning Purposes Only
						</p>
						<button
							className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500"
							onClick={() => signIn(provider.id, {callbackUrl: "/"})}
						>
							Sign in with {provider.name}
						</button>
					</div>
				))}
			</div>
		</>
	);
}

export async function getServerSideProps() {
	const providers = await getProviders();
	return {
		props: {providers},
	};
}
