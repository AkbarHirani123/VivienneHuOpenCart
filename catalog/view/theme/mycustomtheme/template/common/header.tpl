<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 8 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie8"><![endif]-->
<!--[if IE 9 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<!--<![endif]-->
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo $title; ?></title>
<base href="<?php echo $base; ?>" />
<?php if ($description) { ?>
<meta name="description" content="<?php echo $description; ?>" />
<?php } ?>
<?php if ($keywords) { ?>
<meta name="keywords" content= "<?php echo $keywords; ?>" />
<?php } ?>
<script src="catalog/view/javascript/jquery/jquery-2.1.1.min.js" type="text/javascript"></script>
<link href="catalog/view/javascript/bootstrap/css/bootstrap.min.css" rel="stylesheet" media="screen" />
<script src="catalog/view/javascript/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<link href="catalog/view/javascript/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
<link href="//fonts.googleapis.com/css?family=Open+Sans:400,400i,300,700" rel="stylesheet" type="text/css" />
<link href="catalog/view/theme/mycustomtheme/stylesheet/stylesheet.css" rel="stylesheet">
<link href="catalog/view/theme/mycustomtheme/stylesheet/style.css" rel="stylesheet">
<link href="catalog/view/theme/mycustomtheme/stylesheet/twoRow.css" rel="stylesheet">
<script src="catalog/view/javascript/header.js" type="text/javascript"></script>
<script src="catalog/view/javascript/index.js" type="text/javascript"></script>
<?php foreach ($styles as $style) { ?>
<link href="<?php echo $style['href']; ?>" type="text/css" rel="<?php echo $style['rel']; ?>" media="<?php echo $style['media']; ?>" />
<?php } ?>
<script src="catalog/view/javascript/common.js" type="text/javascript"></script>
<?php foreach ($links as $link) { ?>
<link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
<?php } ?>
<?php foreach ($scripts as $script) { ?>
<script src="<?php echo $script; ?>" type="text/javascript"></script>
<?php } ?>
<?php foreach ($analytics as $analytic) { ?>
<?php echo $analytic; ?>
<?php } ?>
</head>
<body class="<?php echo $class; ?>">
<?php if ($categories) { ?>
<header>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            
          </button>
        <!-- Brand -->
      <a class="navbar-brand" href="/"><img class="logo clearfix visible-xs" src="img/vh.png" alt="Vivienne Hu Logo"></a>
      
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav nav-justified list-inline">
          <?php foreach ($categories as $category) { 
            if ( ($category['children']) && ($category['name'] !== 'Couture') ) { ?>
              <li>
                <div class="dropdown">
                  <a href="<?php echo $category['href']; ?>" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true"><?php echo $category['name']; ?></a>
                  <?php foreach (array_chunk($category['children'], ceil(count($category['children']) / $category['column'])) as $children) { ?>
                    <ul class="dropdown-menu">
                      <?php foreach ($children as $child) { ?>
                        <li><a href="<?php echo $child['href']; ?>"><?php echo $child['name']; ?></a></li>
                      <?php } ?>
                      <li role="separator" class="divider"></li>
                      <li style="color:#fff;"><a href="<?php echo $category['href']; ?>" class="see-all"><?php echo $text_all; ?> <?php echo $category['name']; ?></a></li>
                    </ul>
                    <?php } ?>
                </div>
              </li>
            <?php } else if($category['name'] !== 'Couture') { ?>
              <li><a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a></li>
            <?php } ?>
          <?php } ?>
          <li>
            <div class="logoLI clearfix hidden-xs"
              <!-- Brand -->
              <a class="img-responsive" href="/"><img class="logo clearfix hidden-xs" src="img/vh.png" alt="Vivienne Hu Logo"></a>
              <a class="img-responsive name-logo" href="/"><img class="logo-name clearfix hidden-xs" src="img/viviennehu.png" alt="Vivienne Hu Logo"></a>
            </div>
          </li>
          <li><div><a href="#about">VHNY   <span class="label label-danger">New</span></a></div></li>
          <li><div><a href="#about">Press</a></div></li>
        </ul>
      </div> <!-- .nav-collapse -->
    </div>
  </nav>
</header>
<?php } ?>