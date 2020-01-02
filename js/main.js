const Minecraft = {};

Minecraft.canvas = [];
Minecraft.canvasWidth = 1000;

Minecraft.start = function(){
    Minecraft.buttons();
    Minecraft.fillCanvas();
}

Minecraft.fillCanvas = function(){
    $('.cart-container').css({"width":"200px","height":"100vh","background-color": "sandybrown"});
    $('.minecraft-field').css({"width":`${Minecraft.canvasWidth}px`,"height":"100vh","background-color":"skyblue","float":"left","overflow":"scroll"})
    
    $('.tools-container').css({"width":"200px","height":"100vh","background-color": "sandybrown"})
    let block = $('div');

}
Minecraft.buttons = function () {
    $('.game-size .btn').click(function () {
        console.log("clicked");
        Minecraft.canvasWidth = $(this).val();
        $(".selected").removeClass('selected');
        $(this).addClass('selected');
        console.log(Minecraft.canvasWidth);
    })
   
}
$(document).ready(function () {
    $('.start-btn').click(function () {
        $('.welcome').fadeOut("slow");
        Minecraft.start();
    })
});
Minecraft.start();