    var modal = document.getElementById("select-photo-type");
        var span = document.getElementsByClassName("close-popup")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.className = "hide-content";
        changeLeftEspot();
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.className = "hide-content";
            changeLeftEspot();
        }
    }
    
    function hideNav() {
        $("#select-nav").css({
            "height":"0",
            "width":"100%",
            "top":"0",
            "transform":"scale(0)",
            "transition":"all .5s ease-in-out"
        });
    }
    function showNav(){
        var span = document.getElementsByClassName("show-nav")[0];
        $("#select-nav").css({
            "height":"auto",
            "width":"100%",
            "top":"0",
            "transform":"scale(1)",
            "transition":"all .5s ease-in-out"
        });
        if($("#photo-type").attr("class")!==''){
            toggleDiv('drag-main',$("#photo-type").attr("class").split("-").pop());
        }
    }
    function clearImage() {
        var $this = $("#drag-main-content .default-left");
        var classList = $this.attr('class').split(/\s+/);
        console.log("clearImage Class List: "+classList);
        var item = classList[classList.length-1];
        if(item!=='default-left'){
            $("#"+item).css({left: 0, top: 0, transition: "all .5s ease"});
            $($this).find(">:first-child").attr("class","ui-droppable");
            $($this).find(">:first-child").children().each(function(){$(this).css("display","block");});
            console.log("clearImage Item: "+item);
            $("#"+item).draggable('enable');
            $this.removeClass(item);
        }
        $this = $("#drag-main-content .default-right");
        classList = $this.attr('class').split(/\s+/);
        item = classList[classList.length-1];
        if(item!=='default-right'){
            $("#"+item).css({left: 0, top: 0, transition: "all .5s ease"});
            $($this).find(">:first-child").attr("class","ui-droppable");
            $($this).find(">:first-child").children().each(function(){$(this).css("display","block");});
            $("#"+item).draggable('enable');
            $this.removeClass(item);
        }
    }
    function changeLeftEspot(){
        var espots = document.getElementsByClassName("left_espot");
        var xyz=0;
        if($("#header").css("position")=="relative"){
            $("#header").css("position","static");
            $("#header>div").css("position","static");
            $("#hdrShopBtn").css("position","static");
            $('.left_espot').css('position','static');
        }else {
            $("#header").css("position","relative");
            $("#header>div").css("position","relative");
            $("#hdrShopBtn").css("position","relative");
            $('.left_espot').css('position','relative');
        }
    }
    function toggleDiv(str , type){
        // el is the main drag content
        // el2 is the a tag clicked on
        // ul is the parent of a > li > ul
        // drag_window is the content display
        // lens_pane is the lenses pane
        var el = document.getElementById(str);

        if(type==''){
            if(el.classList=='hide-content'){
                el.className = "show-content";
                changeLeftEspot();
            } else if(el.classList=='show-content'){
                el.className = "hide-content";
                changeLeftEspot();
            }
        }else if(type!=''){
            var el2 = document.getElementById(type);
            var ul = el2.parentNode.parentNode;
            var drag_window = el.childNodes[1];
            var lens_pane = el.childNodes[3];
            var temp;

            if(el.classList=='hide-content'){
                //content hidden
                el.className = "show-content";
                el2.className = "active";
                ul.className = "active-"+type;
                drag_window.className = "display-"+type;
                lens_pane.className = "display-"+type;
            } else if(el.classList=='show-content' && ul.className[ul.className.length -1]==type){
                //click on same active link
                el.className = "hide-content";
                el2.className = "";
                ul.className = "";
                drag_window.className = "";
                lens_pane.className = "";
            } else if(el.classList=='show-content' && ul.className.indexOf("active") !== -1){
                //click on different link while active
                el.className = "hide-content";
                temp = document.getElementById(ul.className[ul.className.length -1]);
                temp.className = "";
                ul.className = "active-"+type;
                el2.className = "active";
                drag_window.className = "display-"+type;
                lens_pane.className = "display-"+type;
                el.className = "show-content";
            }
        }
    }
    var elementList = $(".draggable-lens");
    for (var i = 1; i <= elementList.length; i++) {
        $("#draggable-lens-div-"+i).draggable({ 
            handle: "#lens-"+i+", #lens-"+i+"-text",
            start: function(ev, ui) {
                ui.helper.css('transition', '');
            } 
        });
    }
    var elementList2 = $(".droppable");
    for (var i = 1; i <= elementList2.length; i++) {
        $( "#droppable-div-"+i ).droppable({
            drop: function( event, ui ) {
                var $this = $(this);
                var $id = ui.draggable.attr("id");
                console.log("Droppable this Item: "+$(this).attr("id"));
                console.log("Droppable ui Item: "+ui.draggable.attr("id"));
                // Add which dragged item is in droppable to drop class
                // Used to remove existing dragged item.
                var classList = $(this).attr('class').split(/\s+/);
                var bol = false;
                $.each(classList, function(index, item) {
                    if(bol){ 
                        $("#"+item).css({left: 0, top: 0, transition: "all .5s ease"});
                        $("#"+item).draggable('enable');
                        $this.removeClass(item);
                        $this.parent().removeClass(item);
                        return false;
                    }
                    if (item === 'ui-state-highlight') {
                        bol=true;
                    }
                });
                $(this).addClass( "ui-state-highlight" );
                $(this).parent().addClass($id);
                $(this).addClass($id);
                $(this).children().each(function(key,value){$(value).css("display","none");});
                ui.draggable.position({
                    my: "center",
                    at: "center",
                    of: $this,
                    using: function(pos) {
                    $(this).animate(pos, 200, "linear");
                    }
                });
                console.log("Droppable ui draggable: "+$id);
                $("#"+$id).draggable('disable');
            }
        });
    }
