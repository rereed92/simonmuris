<?php /* Template Name: Gallery */ ?>

<?get_header(); ?>

	<div class="row">

		<?php 

			$images = get_field('gallery');

			if( $images ): ?>

			    <ul class="gallery">

			        <?php foreach( $images as $image ): ?>

			            <li class="gallery__item col-sm-6 col-md-4 col-lg-2">
			                <a href="<?php echo $image['url']; ?>" class="gallery__link">
			                     <img src="<?php echo $image['sizes']['thumbnail']; ?>" alt="<?php echo $image['alt']; ?>" class="gallery__image">
			                </a>
			                <!-- <p><?php echo $image['caption']; ?></p> -->
			            </li>

			        <?php endforeach; ?>

			    </ul>

			<?php endif; ?>

	</div>

<?php get_footer(); ?>