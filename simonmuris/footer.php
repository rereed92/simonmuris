<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after
 *
 * @package WordPress
 * @subpackage Simon_Muris
 * @since Simon Muris 1.0
 */
?>

		</div><!-- .site-content -->

		<footer class="footer">

			<div class="gold-border gold-border--top"></div>

			<div class="contain">

				<div class="row row--vertical-align footer-contents">

					<div class="col-sm-6 col-xs-12">
						<div class="copyright table">
							<div class="table--cell vertical--middle">
								<img src="/simonmuris-html/images/favicon.png" alt="logo" class="logo" />
							</div>
							<div class="table--cell vertical--middle">
								<p class="copyright-text">&copy; 2015 Simon Muris <span class="copyright-title">Designer Goldsmith</span></p>
							</div>
						</div>
					</div>

					<div class="col-sm-6 col-xs-12">
						<ul class="footer-links">
							<li><a href="mailto:simon@simonmuris.com"><i class="fa fa-envelope"></i></a></li>
							<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-instagram"></i></a></li>
						</ul>
					</div>

				</div>

			</div>

		</footer>

		<footer id="colophon" class="site-footer" role="contentinfo">
			<?php if ( has_nav_menu( 'primary' ) ) : ?>
				<nav class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Footer Primary Menu', 'twentysixteen' ); ?>">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'primary',
							'menu_class'     => 'primary-menu',
						 ) );
					?>
				</nav><!-- .main-navigation -->
			<?php endif; ?>

			<?php if ( has_nav_menu( 'social' ) ) : ?>
				<nav class="social-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Footer Social Links Menu', 'twentysixteen' ); ?>">
					<?php
						wp_nav_menu( array(
							'theme_location' => 'social',
							'menu_class'     => 'social-links-menu',
							'depth'          => 1,
							'link_before'    => '<span class="screen-reader-text">',
							'link_after'     => '</span>',
						) );
					?>
				</nav><!-- .social-navigation -->
			<?php endif; ?>

		</footer><!-- .site-footer -->
	</div><!-- .site-inner -->
</div><!-- .site -->

<?php wp_footer(); ?>
</body>
</html>
