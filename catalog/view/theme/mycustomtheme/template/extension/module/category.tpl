<div class="list-group">
  <?php foreach ($categories as $category) { ?>
    <?php if ($category['category_id'] == $category_id) { ?>
      <a href="<?php echo $category['href']; ?>" class="list-group-item active"><?php echo $category['name']; ?></a>
      <?php if ($category['children']) { ?>
        <?php foreach ($category['children'] as $child) { ?>
          <?php if ($child['category_id'] == $child_id) { ?>
            <a href="<?php echo $child['href']; ?>" class="active">&nbsp;&nbsp;&nbsp;- <?php echo $child['name']; ?></a>
          <?php } else { ?>
            <a href="<?php echo $child['href']; ?>" class="">&nbsp;&nbsp;&nbsp;- <?php echo $child['name']; ?></a>
          <?php } ?>
          <?php if ($child['children']) { ?>
            <?php foreach ($child['children'] as $child_2) { ?>
              <?php if ($child_2['category_id'] == $child_id) { ?>
                <a href="<?php echo $child_2['href']; ?>" class=" active">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 
                <?php echo $child_2['name']; ?></a>
              <?php } else { ?>
                <a href="<?php echo $child_2['href']; ?>" class="">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 
                <?php echo $child_2['name']; ?></a>
              <?php } ?>
            <?php } ?> <!-- End of foreach for child_2 -->
          <?php } ?>
        <?php } ?> <!-- End of foreach for child 1 -->
      <?php } ?>
    <?php } else { ?>
      <a href="<?php echo $category['href']; ?>" class="list-group-item"><?php echo $category['name']; ?></a>
    <?php } ?>
  <?php } ?>
</div>
