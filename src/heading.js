import { registerBlockType } from "@wordpress/blocks";
import edit from "./heading/edit.js";
import save from "./heading/save.js";

registerBlockType("sc/headings", {
	title: "Headings",
	icon: "heading",
	attributes: {
		id: {
			type: "string",
			default: "",
		},
		level: {
			type: "number",
			default: 2,
		},
		content: {
			type: "string",
			default: "",
		},
		alignment: {
			type: "string",
			default: "left",
		},
	},
	edit,
	save,
});
