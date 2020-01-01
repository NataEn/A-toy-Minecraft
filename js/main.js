let Minecraft = {};

Minecraft.canvas = [];
Minecraft.canvasWidth = 1000;

Minecraft.start = function(){
    
}

Minecraft.buttons = function () {
    $('.game-size .btn').click(function () {
        Minecraft.canvasWidth = $(this).val();
        $(".selected").removeClass('selected');
        $(this).addClass('selected');
    })
}
$(document).ready(function () {
    $('.start-btn').click(function () {
        $('.welcome').fadeOut("slow");
    })
});