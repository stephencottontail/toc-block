import { registerBlockType } from "@wordpress/blocks";

registerBlockType("sc/headings", {
	title: "Headings",
	icon: "heading",
	attributes: {},
	edit: () => {
		return <p>Hello from editor!</p>;
	},
	save: () => {
		return <p>Hello from front-end!</p>;
	},
});
