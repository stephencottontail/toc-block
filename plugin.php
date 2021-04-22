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

	 register_block_type( 'sc/toc', array(
		 'editor_script' => 'toc-block-toc-script'
	 ) );

	 register_block_type( 'sc/heading', array(
		 'editor_script' => 'toc-block-heading-script'
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
 