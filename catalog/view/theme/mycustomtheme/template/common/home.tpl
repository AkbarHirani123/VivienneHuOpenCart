<?php echo $header; ?>
 
<?php echo $column_left; ?>
<?php echo $column_right; ?>
<div class="container full-height">
	<div class="row is-table-row full-height">
		<div class="col-md-8 col-sm-12">
			<div id="MC" class="carousel slide carousel-fade" data-ride="carousel" data-interval="4000" data-pause="none">
				
				<div class="carousel-inner">
					<div class="item active carousel-1">
				        <!-- <a href="http://localhost:8888/opencart/index.php?route=product/product&path=61_66&product_id=52"><img src="http://localhost:8888/opencart/image/catalog/Home%20Page/dress5_cleaned3.png" class="img-responsive img-center"/></a> -->
				        <!-- Just ignore this next line of code, it's just modified so the images will show up on my localhost -->
				        <img src="http://localhost:8081/viviennehuopencart/image/catalog/Home%20Page/dress5_cleaned3.png" class="img-responsive img-center"/>
					</div>
					<div class="item carousel-2">
						<!-- <img src="http://localhost:8888/opencart/image/catalog/Home%20Page/dress2_cleaned.png" class="img-responsive img-center"/> -->
						<img src="http://localhost:8081/viviennehuopencart/image/catalog/Home%20Page/dress2_cleaned.png" class="img-responsive img-center"/>
					</div>
				</div>
			</div>
		</div>
		<div class="col-md-4 col-sm-12 button-wrapper">
			<h3 style="text-align: center; line-height: 30px; text-decoration:underline;">Check out the Winter Fall 2016 Collection!</h3>
			<a type="button" class="btn btn-primary btn-lg outline button-center" href="http://localhost:8888/opencart/index.php?route=product/category&path=61_66">Shop Now!</a> 
		</div>
	</div>
</div>
    <div id="content">
        <?php echo $content_top; ?>
        <h1 style="display: none;"><?php echo $heading_title; ?></h1>
        <?php echo $content_bottom; ?>
    </div>
</div>
 
<?php echo $footer; ?>