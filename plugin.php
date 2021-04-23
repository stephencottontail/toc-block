<?php
/**
 * Plugin Name: TOC Block
 * Description: A set of blocks for creating a TOC
 * Version: 1.0.0
 * Author: Stephen Dickinson <stephencottontail@me.com>
 */

add_action( 'init', function() {
	$toc_assets = require( plugin_dir_path( __FILE__ ) . '/dist/toc.asset.php' );
	$heading_assets = require( plugin_dir_path( __FILE__ ) . '/dist/heading.asset.php' );
	
	wp_register_script( 'toc-block-toc-script', plugins_url( 'dist/toc.js', __FILE__ ), $toc_assets['dependencies'], $toc_assets['version'], true );
	wp_register_script( 'toc-block-heading-script', plugins_url( 'dist/heading.js', __FILE__ ), $heading_assets['dependencies'], $heading_assets['version'], true );
	wp_register_style( 'toc-block-styles', plugins_url( 'dist/style.css', __FILE__ ) );

	register_block_type( 'sc/toc', array(
		'editor_script'   => 'toc-block-toc-script',
		'render_callback' => 'render_toc_block',
		'style'           => 'toc-block-styles'
	) );

	register_block_type( 'sc/headings', array(
		'editor_script' => 'toc-block-heading-script',
		'style'         => 'toc-block-styles'
	) );
} );

add_filter( 'block_categories', function( $categories, $post ) {
	return array_merge( $categories, array(
		array(
		'title' => 'Steve\'s Blocks',
		'slug'  => 'sc'
		)
	) );
}, 10, 2 );

function render_toc_block( $attributes ) {
	$headings = $attributes['headings'];
	ob_start();
	?>
	<div class="wp-block-sc-toc">
		<h2>Table of Contents</h2>
		<ul>
			<?php
			foreach( $headings as $heading ) {
				printf( '<li><a href="%s">%s</a></li>',
					'#' . $heading['attributes']['id'],
					$heading['attributes']['content'],
				);
			}
			?>
		</ul>
	</div>
	<?php
	return ob_get_clean();
}