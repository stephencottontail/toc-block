import { registerBlockType } from "@wordpress/blocks";

registerBlockType("sc/toc", {
	title: "TOC",
	icon: "editor-ol",
	attributes: {},
	edit: () => {
		return <p>Hello from editor!</p>;
	},
	save: () => {
		return <p>Hello from the front-end!</p>;
	},
});
