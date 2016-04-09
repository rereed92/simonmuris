<?php /* Template Name: Timeline */ ?>

<?get_header(); ?>

	<div class="row">
		<div class="col-lg-12">
			<div class="timeline">
				<ul class="timeline__list">

					<?php
						$i = 1; 
						if( have_rows('timeline') ): 
					?>

						<?php while( have_rows('timeline') ): the_row(); 
							$content = get_sub_field('timeline_content');
						?>
							<li class="timeline__block">
								<div class="timeline__marker <?php if($i%2==0): ?> timeline__marker--right <?php else : ?> timeline__marker--left <?php endif; ?>"></div>
								<div class="timeline__content <?php if($i%2==0): ?> timeline__content--right <?php else : ?> timeline__content--left <?php endif; ?>">
									 <?php echo $content; ?>
								</div>
							</li>

						<?php 
							$i++;
							endwhile; 
						?>

					<?php endif; ?>
					
				</ul>
			</div>
		</div>
	</div>

<?php get_footer(); ?>