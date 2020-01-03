const Minecraft = {};

Minecraft.canvas = [];
// Minecraft.canvasWidth = 1000;

Minecraft.start = function () {
    Minecraft.buttons();
    Minecraft.fillCanvas();
}

Minecraft.fillCanvas = function () {

    let field = document.getElementById('minecraft-field');
    let row = new Array(20);
    for(let i = 0; i < row.length; i++){
        row[i] = new Array(13);
    }
    for (let i = 0; i < row.length; i++) {
        let temp = document.createElement('div'); 
        temp.className = "block";
        for (let j = 0; j < row[i].length; j++) { 
             row[i][j] = document.createElement('div');
             row[i][j].classList.add('block');
             row[i][j].innerText = `row ${j} col ${i} `;
             
             temp.appendChild(row[i][j]);
        }
        field.appendChild(temp);
    }
   
    
     
    
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
        //Minecraft.start();
    })
});
Minecraft.start();