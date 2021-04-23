import { registerBlockType } from "@wordpress/blocks";
import edit from "./toc/edit.js";

registerBlockType("sc/toc", {
	title: "TOC",
	icon: "editor-ol",
	attributes: {
		headings: {
			type: "array",
			default: [],
		},
	},
	edit,
	save: () => {
		return null;
	},
});
