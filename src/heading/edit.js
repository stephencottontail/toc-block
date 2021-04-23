import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl } from "@wordpress/components";
import { Fragment } from "@wordpress/element";
import { PropTypes } from "prop-types";

export default function Edit({ attributes, setAttributes }) {
	const { level, content, alignment } = attributes;

	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title="Alignment">
					<SelectControl
						label="Text Alignment"
						value={alignment}
						onChange={(nextAlignment) => {
							setAttributes({ alignment: nextAlignment });
						}}
						options={[
							{ value: "left", label: "Left" },
							{ value: "center", label: "Center" },
							{ value: "right", label: "Right" },
						]}
					/>
				</PanelBody>
				<PanelBody title="Level">
					<SelectControl
						label="Heading Level"
						value={level}
						onChange={(nextLevel) => {
							setAttributes({ level: nextLevel });
						}}
						options={[
							{ value: 1, label: "H1" },
							{ value: 2, label: "H2" },
							{ value: 3, label: "H3" },
							{ value: 4, label: "H4" },
							{ value: 5, label: "H5" },
							{ value: 6, label: "H6" },
						]}
					/>
				</PanelBody>
			</InspectorControls>
			<p>{level.toString() || "no level"}</p>
			<p>{alignment.toString() || "no alignment"}</p>
			<p>{content || "Hello from editor!"}</p>
		</Fragment>
	);
}

Edit.displayName = "HeadingEdit";
Edit.propTypes = {
	attributes: PropTypes.object,
	setAttributes: PropTypes.func,
};