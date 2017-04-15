<?php /* Template Name: Homepage */ ?>

<?get_header(); ?>

	<!-- <div class="row"> -->
		<!-- <div class="col-lg-12"> -->
		<div class="slideshow">
			<div class="quote">
				<blockquote><?php the_field('quote'); ?></blockquote>

				<p class="quote__author"><?php the_field('quote_author'); ?></p>
			</div>

			<div class="slideshow__content">
				<ul class="slideshow__slides">

					<?php if( have_rows('slideshow') ): ?>

						<?php while( have_rows('slideshow') ): the_row(); 
							$image = get_sub_field('slideshow_image');
						?>

							<li class="slideshow__slide">
								<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" class="slideshow__image" />
							</li>

						<?php endwhile; ?>

					<?php endif; ?>

				</ul>
			</div>
		</div>
		<!-- </div> -->
	<!-- </div> -->

	<!-- <div class="row"> -->
		<div class="signature">
			<img src="<?php the_field('signature_image'); ?>" alt="signature" class="signature__image">
		</div>
	<!-- </div> -->

<?php get_footer(); ?>