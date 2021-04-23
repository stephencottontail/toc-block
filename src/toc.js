import { registerBlockType } from "@wordpress/blocks";
import edit from "./toc/edit.js";

registerBlockType("sc/toc", {
	title: "TOC",
	icon: "editor-ol",
	attributes: {},
	edit,
	save: () => {
		return null;
	},
});
