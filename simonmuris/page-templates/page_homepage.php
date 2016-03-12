<?php /* Template Name: Homepage */ ?>

<?get_header(); ?>

	<div class="row">
		<div class="col-lg-12">
			<div class="slideshow">
				<div class="quote">
					<blockquote><?php the_field('quote'); ?></blockquote>

					<p class="quote__author"><?php the_field('quote_author'); ?></p>
				</div>

				<div class="slideshow__content">
					<ul class="slideshow__slides">
						<li class="slideshow__slide">
							<img src="/simonmuris-html/images/slide1.png" alt="slide" />
						</li>

						<li class="slideshow__slide">
							<img src="/simonmuris-html/images/slide2.png" alt="slide" />
						</li>

						<li class="slideshow__slide">
							<img src="/simonmuris-html/images/slide5.png" alt="slide" />
						</li>

						<li class="slideshow__slide">
							<img src="/simonmuris-html/images/slide6.png" alt="slide" />
						</li>
						
						<li class="slideshow__slide">
							<img src="/simonmuris-html/images/slide7.png" alt="slide" />
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-12 signature">
			<img src="<?php the_field('signature_image'); ?>" alt="signature" class="signature__image">
		</div>
	</div>

<?php get_footer(); ?>