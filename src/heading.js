import { registerBlockType } from "@wordpress/blocks";
import edit from "./heading/edit.js";

registerBlockType("sc/headings", {
	title: "Headings",
	icon: "heading",
	attributes: {
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
	save: () => {
		return <p>Hello from front-end!</p>;
	},
});
