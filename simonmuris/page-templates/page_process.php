<?php /* Template Name: Process */ ?>

<?get_header(); ?>

	<div class="row">
		<div class="col-lg-12 process">
			<div class="process__information">

				<?php 
					$i = 1;
					if( have_rows('process_content') ):
				?>

					<?php while( have_rows('process_content') ): the_row(); 
						$image = get_sub_field('process_image');
						$content = get_sub_field('process_text');
					?>
						<div class="process__container">
							<div class="process__image process__image--<?php echo $i; ?> <?php if($i==1): ?> process__image--active <?php endif; ?>">
								<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" />
							</div>

							<div class="process__text <?php if($i==1): ?> process__text--display <?php endif; ?>">
								 <?php echo $content; ?>
							</div>
						</div>

					<?php 
						$i++;
						endwhile; 
					?>

				<?php endif; ?>
				
			</div>

			<div class="process__background">
				<img src="<?php the_field('process_background_image'); ?>" alt="hendecagon">
			</div>
		</div>
	</div>

<?php get_footer(); ?>