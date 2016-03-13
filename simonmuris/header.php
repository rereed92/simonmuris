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
	<div class="container">
		<header class="header">
			<div class="contain">
				<div class="title">
					<div class="title__content">
						<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="title__link">
							<h1 class="title__heading">
								<span class="title__capital-letter">S</span>imon 
								<span class="title__capital-letter">M</span>uris 
								<br>
								<small class="title__opening-year">1972</small>
							</h1>
						</a>
					</div>

					<div class="navigation">
						<div class="navigation__small">
							<div class="navigation__menu">
								<span class="navigation__bar"></span>
							</div>
						</div>

						<nav class="navigation__nav">
							<?php
								wp_nav_menu( array(
									'theme_location' => 'primary',
									'menu_class'     => 'navigation__list',
								 ) );
							?>
						</nav>
					</div>
				</div>
			</div>

			<div class="border border__gold border__gold--bottom"></div>
		</header>
	</div>

	<main class="content <?php page_class(); ?>">
		<div class="contain">
			<?php wpb_list_child_pages(); ?>
	<!-- <div id="content" class="site-content"> -->
