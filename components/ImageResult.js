import React from "react";
import PaginationButtons from "./PaginationButtons";

const ImageResult = ({results}) => {
	return (
		<div className="mt-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
				{results.items?.map((item) => (
					<div
						key={item.link}
						className="mb-8"
					>
						<div className="group">
							<a href={item.image.contextLink}>
								<img
									src={item.link}
									alt={item.title}
									className="group-hover:shadow-xl  w-full h-60 object-contain"
								/>
							</a>
							<a
								className="group-hover:underline"
								href={item.image.contextLink}
							>
								<h2 className="truncate text-xl">{item.title}</h2>
							</a>
							<a
								className="group-hover:underline"
								href={item.image.contextLink}
							>
								<p className="text-gray-600 mb">{item.displayLink}</p>
							</a>
						</div>
					</div>
				))}
			</div>
			<div className="ml-16">
				<PaginationButtons />
			</div>
		</div>
	);
};

export default ImageResult;
