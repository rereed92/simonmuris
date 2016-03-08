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

		</div>
	</main>

	<footer class="footer">
		<div class="border border__gold border__gold--top"></div>

		<div class="contain">
			<div class="row row--vertical-align footer__contents">
				<div class="col-sm-12 col-md-6">
					<div class="copyright table">
						<div class="table__cell vertical__middle">
							<img src='<?php echo esc_url( get_theme_mod( 'themeslug_logo' ) ); ?>' alt='<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>' class="footer__logo">
						</div>
						<div class="table__cell vertical__middle">
							<p class="copyright__text">&copy; <?php echo date('Y'); ?> 
								Simon Muris 
								<span class="copyright__title">Designer Goldsmith</span>
							</p>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-md-6">
					<?php 
						wp_nav_menu( array( 
							'theme_location' => 'social-links',
							'menu_class'     => 'footer__links',
						) ); 
					?>
				</div>

			</div>

		</div>

	</footer>

</div>

<?php wp_footer(); ?>
</body>
</html>
