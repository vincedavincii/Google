import React from "react";
import Parser from "html-react-parser";

const SearchResults = ({results}) => {
	return (
		<div className="w-full mx-auto px-3 sm:pl-[5%] md-pl-[14%] lg:pl-52">
			<p className="text-gray-500 text-sm mb-5 mt-3">
				About {results.searchInformation.formattedTotalResults} results (
				{results.searchInformation.searchTime}) seconds
			</p>
			{results.items.map((item) => (
				<div
					key={item.link}
					className="max-w-xl mb-8"
				>
					<div className="group ">
						<a
							className="text-sm truncate"
							href={item.link}
						>
							{item.formattedUrl}
						</a>
						<a
							className="group-hover:underline decoration-blue-600"
							href={item.link}
						>
							<h2 className="truncate text-xl font-medium text-blue-600">
								{item.title}
							</h2>
						</a>
					</div>

					<p className="text-gray-700">{Parser(item.htmlSnippet)}</p>
				</div>
			))}
		</div>
	);
};

export default SearchResults;
