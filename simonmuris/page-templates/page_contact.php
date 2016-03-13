<?php /* Template Name: Contact */ ?>

<?get_header(); ?>

	<p><?php the_field('contact_form_intro'); ?></p>

	<div class="box box--bordered box--margin-bottom">
		<?php the_field('contact_form'); ?>
	</div>

	<div class="box box--bordered">
		<div class="row">
			<div class="col-sm-12 col-lg-6">
				<?php

					$location = get_field('contact_map');

					if( !empty($location) ):
					?>
						<div id="contact__map"></div>
						<script src='http://maps.googleapis.com/maps/api/js?sensor=false' type='text/javascript'></script>

						<script type="text/javascript">
							var map;
							function initMap() 
							{
								var lat = <?php echo $location['lat']; ?>;
								var lng = <?php echo $location['lng']; ?>;
								var icon = "<?php echo the_field('contact_map_icon'); ?>";
							  	map = new google.maps.Map(document.getElementById('contact__map'), {
							    	center: {lat: lat, lng: lng},
							    	zoom: 17
							  	});

							  	var marker = new google.maps.Marker({
							  		position: {lat: lat, lng: lng},
							  		map: map,
							  		icon: icon
								});

								var center;
								function calculateCenter() 
								{
										center = map.getCenter();
								}

								google.maps.event.addDomListener(map, 'idle', function() 
								{
										calculateCenter();
								});

								google.maps.event.addDomListener(window, 'resize', function() 
								{
										map.setCenter(center);
								});
							}
						  
						   initMap();
						</script>
					<?php endif; ?> 
			</div>

			<div class="col-sm-12 col-lg-6">
				<div class="contact__address">
					<?php the_field('contact_address'); ?>

					<?php 
						wp_nav_menu( array( 
							'theme_location' => 'contact-links',
							'menu_class'     => 'contact__links',
						) ); 
					?>
				</div>
			</div>
		</div>
	</div>

<?php get_footer(); ?>