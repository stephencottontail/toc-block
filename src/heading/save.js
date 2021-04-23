import { RichText } from "@wordpress/block-editor";
import { PropTypes } from "prop-types";

export default function Save({ attributes }) {
	const { id, level, content, alignment } = attributes;
	const Tag = "h" + level;

	return (
		<Tag id={id} className={`is-text-align-${alignment}`}>
			<RichText.Content value={content} />
		</Tag>
	);
}

Save.displayName = "HeadingSave";
Save.propTypes = {
	attributes: PropTypes.object.isRequired,
};
