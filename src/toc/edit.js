import { useEffect } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import { isEqual } from "lodash";
import { PropTypes } from "prop-types";

const useHeadings = () => {
	const allBlocks = useSelect((select) =>
		select("core/block-editor").getBlocks()
	);

	const headings = allBlocks.filter((block) => {
		return "sc/headings" === block.name;
	});

	return headings;
};

export default function Edit({ className, attributes, setAttributes }) {
	const { list } = attributes;
	const headings = useHeadings();

	useEffect(() => {
		if (!isEqual(list, headings)) {
			setAttributes({ list: headings });
		}
	}, [headings, list, setAttributes]);

	return (
		<div className={className}>
			<h2>Table of Contents</h2>
			{list && (
				<ul>
					{list.map((el, idx) => (
						<li key={idx}>
							<a href={`#${el.attributes.id}`}>
								{el.attributes.content}
							</a>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

Edit.displayName = "TocEdit";
Edit.propTypes = {
	attributes: PropTypes.object,
	setAttributes: PropTypes.func,
	className: PropTypes.string.isRequired,
};
