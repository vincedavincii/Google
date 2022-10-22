import Image from "next/image";
import {useRouter} from "next/router";
import React, {useRef} from "react";
import {MicrophoneIcon, SearchIcon, XIcon} from "@heroicons/react/solid";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";
const SearchHeader = () => {
	const router = useRouter();
	const searchInputRef = useRef(null);
	const search = (event) => {
		event.preventDefault();
		const term = searchInputRef.current.value;
		if (!term) return;
		router.push(`/search?term=${term}&searchType=`);
	};
	return (
		<header className="sticky top-0 bg-white">
			<div className="flex w-full p-6 items-center">
				<Image
					src="https://www.theverge.com/_next/image?url=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2Fln4IHgPYpvNoIWpJ2Y1_c9msxXA%3D%2F0x0%3A2012x1341%2F2000x1333%2Ffilters%3Afocal(1006x670%3A1007x671)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F15483559%2Fgoogle2.0.0.1441125613.jpg&w=480&q=75"
					width="130"
					height="90"
					objectFit="contain"
					onClick={() => router.push("/")}
					className="cursor-pointer"
				/>
				<form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
					<input
						type="text"
						defaultValue={router.query.term}
						ref={searchInputRef}
						className="w-full focus:outline-none"
					/>
					<XIcon
						onClick={() => (searchInputRef.current.value = "")}
						className="h-6 text-gray-500 cursor-pointer sm:mr-3"
					/>
					<MicrophoneIcon className="h-6 hidden sm:inline-flex  text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
					<SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
					<button
						onClick={search}
						type="submit"
						hidden
					></button>
				</form>

				<User className="ml-auto whitespace-nowrap" />
			</div>
			<SearchHeaderOptions />
		</header>
	);
};

export default SearchHeader;
