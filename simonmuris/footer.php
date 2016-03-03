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

					<div class="col-sm-12 col-md-6">
						<div class="copyright table">
							<div class="table--cell vertical--middle">
								<img src='<?php echo esc_url( get_theme_mod( 'themeslug_logo' ) ); ?>' alt='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>' class="logo">
							</div>
							<div class="table--cell vertical--middle">
								<p class="copyright-text">&copy; <?php echo date('Y'); ?> Simon Muris <span class="copyright-title">Designer Goldsmith</span></p>
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-md-6">
						<?php 
							wp_nav_menu( array( 
								'theme_location' => 'social-links',
								'menu_class'     => 'footer-links',
							) ); 
						?>
					</div>

				</div>

			</div>

		</footer>

	</div><!-- .site-inner -->
</div><!-- .site -->

<?php wp_footer(); ?>
</body>
</html>
