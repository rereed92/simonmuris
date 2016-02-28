<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Simon_Muris
 * @since Simon Muris 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<?php endif; ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<div class="site-inner">
		<a class="skip-link screen-reader-text" href="#content">Skip to content</a>

		<header class="header">
			<div class="contain">
				<div class="site-title__container">
					<div class="site-title">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>">
							<h1 class="title">
								<span class="capital-letter">S</span>imon 
								<span class="capital-letter">M</span>uris <br/>
								<small class="opening-year">1972</small>
							</h1>

							<?php $description = get_bloginfo( 'description', 'display' );
							if ( $description || is_customize_preview() ) : ?>
								<p class="site-description"><?php echo $description; ?></p>
							<?php endif; ?>

						</a>
					</div>
					<div class="small-navigation">
						<div class="menu">
							<span class="menu__bar"></span>
						</div>
					</div>

					<nav id="site-navigation" class="nav" role="navigation" aria-label="<?php esc_attr_e( 'Primary Menu', 'twentysixteen' ); ?>">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'primary',
								'menu_class'     => 'navigation',
							 ) );
						?>
					</nav>
				</div>

			</div>

			<div class="gold-border gold-border--bottom"></div>

		</header><!-- .site-header -->

		<div id="content" class="site-content">
