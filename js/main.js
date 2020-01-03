const Minecraft = {};

Minecraft.canvas = [];
Minecraft.canvasWidth;

Minecraft.start = function () {
    Minecraft.buttons();
    Minecraft.fillCanvas();
}

Minecraft.fillCanvas = function () {
    
    let field = document.getElementById('minecraft-field');
    let row = new Array(Minecraft.canvasWidth/50);  //NUMBER OF COLUMNS
    for (let i = 0; i < row.length; i++) {
        row[i] = new Array(Minecraft.canvasWidth/50);  //NUMBER OF ROWS
    }
    for (let i = 0; i < row.length; i++) {
        let temp = document.createElement('div');
        temp.className = "block";
        for (let j = 0; j < row[i].length; j++) {
            row[i][j] = document.createElement('div');
            row[i][j].classList.add('block');
            // row[i][j].innerText = `row ${j} col ${i} `;

            temp.appendChild(row[i][j]);
        }
        field.appendChild(temp);
    }
    console.log(Minecraft.canvasWidth);
    //CLOUDS
    row[2][0].style.backgroundColor = "white";
    for(let i =1 ; i < 4; i++){
        for(let j = 1;j < 2 ;j++){
            //row[i][j].innerText = "";
            row[i][j].style.backgroundColor = "white";
        }
    }
    //LEAVES
    for(let i =6 ; i < 9; i++){
        for(let j = 3;j < 5 ;j++){
            //row[i][j].innerText = "";
            row[i][j].style.backgroundImage = "url('./img/leaf.png')";
            row[i][j].style.backgroundSize = "50px"
        }
    }
    //TRUNK
    for(let i =7 ; i < 8; i++){
        for(let j = 5;j < 7 ;j++){
            //row[i][j].innerText = "";
            row[i][j].style.backgroundImage = "url('./img/trunk.jpg')";
            row[i][j].style.backgroundSize = "50px"
        }
    }
    //GRASS
    for(let i =0 ; i < row.length; i++){
        for(let j = 7;j < 8 ;j++){
            //row[i][j].innerText = "";
            row[i][j].style.backgroundImage = "url('./img/grass.png')";
            row[i][j].style.backgroundSize = "50px"
        }
    }
    //SOIL
    for(let i =0 ; i < row.length; i++){
        for(let j = 8;j < 11 ;j++){
            //row[i][j].innerText = "";
            row[i][j].style.backgroundImage = "url('./img/soil.jpg')";
            row[i][j].style.backgroundSize = "50px"
        }
    }
    //LAVA
    for(let i =0 ; i < row.length; i++){
        for(let j = row.length-1;j < row[i].length ;j++){
            //row[i][j].innerText = "";
            row[i][j].style.backgroundImage = "url('./img/lava.png')";
            row[i][j].style.backgroundSize = "50px"
        }
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
        Minecraft.start();
    })
});
Minecraft.setTool = () => {
    for (let tool of Minecraft.tools) {
        console.log(tool);
        tool.style.backgroundImage = `url("./img/${tool.id}.png")`;
        tool.style.backgroundSize = "contain";
        tool.addEventListener("click", e => {
            console.log("you clicked the " + tool.id);
            tool.style.cursor = `url("./img/${tool.id}Cursor.png"),move`;
            console.log(tool.style.cursor);
            Minecraft.minecraftField.style.cursor = `url("./img/${tool.id}Cursor.png"),move`;
        });
    }
};
Minecraft.start();
