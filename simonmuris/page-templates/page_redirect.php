<?php /* Template Name: Redirect */

	$childPages = get_pages("child_of=".$post->ID."&sort_column=menu_order");

	if ($childPages) 
	{
		$firstchild = $childPages[0];
		wp_redirect(get_permalink($firstchild->ID));
	} 

?>