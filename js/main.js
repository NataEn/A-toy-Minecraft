const Minecraft = {};

Minecraft.canvasWidth;
Minecraft.currentTool = "";
let row;

Minecraft.start = function () {
    Minecraft.buttons();
    Minecraft.fillCanvas();
    Minecraft.updateStorage();
    Minecraft.setBlockBackground();
    Minecraft.setTool();
}

Minecraft.tools = document.querySelectorAll(".tool");
Minecraft.minecraftField = document.querySelector("#minecraft-field");
Minecraft.block = document.querySelectorAll(".block-tool");
Minecraft.storageBlock = document.querySelectorAll(".block-tool[data-type]");

Minecraft.fillCanvas = function () {
    row = new Array(Minecraft.canvasWidth / 50)    //NUMBER OF COLUMNS
    for (let i = 0; i < row.length; i++) {
        row[i] = new Array(13);                    //NUMBER OF ROWS
    }
    for (let i = 0; i < row.length; i++) {         // i is col
        let temp = document.createElement('div');
        temp.className = "block";
        for (let j = 0; j < row[i].length; j++) {     // j is row
            row[i][j] = document.createElement('div'); //CREATING THE GRID
            row[i][j].classList.add('block');
            temp.appendChild(row[i][j]);

            //CLICK LISTENER FOR ADDING ELEMENTS INTO THE MINECRAFT-FIELD
            row[i][j].addEventListener('click', function () {
                let urlCur = $('#minecraft-field').css('cursor');
                let currentCursor = urlCur.split('/')[4].split('"')[0];
                
                let cloudLeft = $('[data-type="clouds"] .amount').text();
                let leafLeft = $('[data-type="leaves"] .amount').text();
                let trunkLeft = $('[data-type="wood"] .amount').text();
                let grassLeft = $('[data-type="grass"] .amount').text();
                let soilLeft = $('[data-type="pabbles"] .amount').text();
                let lavaLeft = $('[data-type="lava"] .amount').text();
                let stoneLeft = $('[data-type="stone"] .amount').text();
                
                if (currentCursor == "stoneCursor.png" && stoneLeft > 0) {
                    row[i][j].style.backgroundImage = "url('./img/stone.jpg')";
                    row[i][j].style.backgroundSize = "50px";
                    row[i][j].setAttribute('data-block', 'stone');
                    row[i][j].addEventListener('click', blockRemover);
                    $('[data-type="stone"] .amount').html(parseInt($('[data-type="stone"] .amount').html(), 10) - 1);
                }
                else if (currentCursor == "cloudCursor.png" && cloudLeft > 0) {
                    row[i][j].style.backgroundColor = "white";
                    row[i][j].setAttribute('data-block', 'cloud');
                    row[i][j].addEventListener('click', blockRemover);
                    $('[data-type="clouds"] .amount').html(parseInt($('[data-type="clouds"] .amount').html(), 10) - 1);
                }
                else if (currentCursor == "leafCursor.png" && leafLeft > 0) {
                    row[i][j].style.backgroundImage = "url('./img/leaf.png')";
                    row[i][j].style.backgroundSize = "50px";
                    row[i][j].setAttribute('data-block', 'leaf');
                    row[i][j].addEventListener('click', blockRemover);
                    $('[data-type="leaves"] .amount').html(parseInt($('[data-type="leaves"] .amount').html(), 10) - 1);
                }
                else if (currentCursor == "grassCursor.png" && grassLeft > 0) {
                    row[i][j].style.backgroundImage = "url('./img/grass.png')";
                    row[i][j].style.backgroundSize = "50px";
                    row[i][j].setAttribute('data-block', 'grass');
                    row[i][j].addEventListener('click', blockRemover);
                    $('[data-type="grass"] .amount').html(parseInt($('[data-type="grass"] .amount').html(), 10) - 1);
                }
                else if (currentCursor == "lavaCursor.png" && lavaLeft > 0) {
                    row[i][j].style.backgroundImage = "url('./img/lava.png')";
                    row[i][j].style.backgroundSize = "50px";
                    row[i][j].setAttribute('data-block', 'lava');
                    row[i][j].addEventListener('click', blockRemover);
                    $('[data-type="lava"] .amount').html(parseInt($('[data-type="lava"] .amount').html(), 10) - 1);
                }
                else if (currentCursor == "soilCursor.png" && soilLeft > 0) {
                    row[i][j].style.backgroundImage = "url('./img/soil.jpg')";
                    row[i][j].style.backgroundSize = "50px";
                    row[i][j].setAttribute('data-block', 'soil');
                    row[i][j].addEventListener('click', blockRemover);
                    $('[data-type="pabbles"] .amount').html(parseInt($('[data-type="pabbles"] .amount').html(), 10) - 1);
                }
                else if(currentCursor == "trunkCursor.png" && trunkLeft > 0){
                    row[i][j].style.backgroundImage = "url('./img/trunk.jpg')";
                    row[i][j].style.backgroundSize = "50px";
                    row[i][j].setAttribute('data-block', 'trunk');
                    row[i][j].addEventListener('click', blockRemover);
                    $('[data-type="wood"] .amount').html(parseInt($('[data-type="wood"] .amount').html(), 10) - 1);
                }
            })
        }
        Minecraft.minecraftField.appendChild(temp);
    }
    let randCloud = Math.floor(Math.random() * 2);
    //CLOUDS
    for (let i = 0; i < row.length; i++) {
        for (let j = 0; j < 2; j++) {
            if (randCloud == 1 || randCloud == 3) {
                row[i][j].style.backgroundColor = "white";
                row[i][j].setAttribute('data-block', 'cloud');
                row[i][j].addEventListener('click', blockRemover);
            }
            randCloud = Math.floor(Math.random() * 2);
        }
    }
    //GRASS & ROCKS & TRUNK
    let randNum = Math.floor(Math.random() * 4);
    let oneTreeOnly = 0;
    for (let i = 0; i < row.length; i++) {
        for (let j = row[i].length - 5; j < row[i].length - 4; j++) {
            if (randNum == 0) {
                row[i][j].style.backgroundImage = "url('./img/grass.png')";
                row[i][j].style.backgroundSize = "50px";
                row[i][j].setAttribute('data-block', 'grass');
                row[i][j].addEventListener('click', blockRemover);
            }
            else if (randNum == 1) {
                row[i][j].style.backgroundImage = "url('./img/grass.png')";
                row[i][j].style.backgroundSize = "50px";
                row[i][j].setAttribute('data-block', 'grass');
                row[i][j].addEventListener('click', blockRemover);
            }
            else if (randNum == 2) {
                row[i][j].style.backgroundImage = "url('./img/stone.jpg')";
                row[i][j].style.backgroundSize = "50px";
                row[i][j].setAttribute('data-block', 'stone');
                row[i][j].addEventListener('click', blockRemover);
            }
            else if (randNum == 3) {
                if (oneTreeOnly == 0 && i > 0 && i < row.length - 1) {
                    row[i][j].style.backgroundImage = "url('./img/trunk.jpg')";
                    row[i][j].style.backgroundSize = "50px";
                    row[i][j].setAttribute('data-block', 'trunk');
                    row[i][j].addEventListener('click', blockRemover);

                    let t = j;
                    t--;

                    row[i][t].style.backgroundImage = "url('./img/trunk.jpg')";
                    row[i][t].style.backgroundSize = "50px";
                    row[i][t].setAttribute('data-block', 'trunk');
                    row[i][t].addEventListener('click', blockRemover);

                    let l1 = t;
                    let l3 = i;
                    l3--;
                    l1--;

                    row[i][l1].style.backgroundImage = "url('./img/leaf.png')";
                    row[i][l1].style.backgroundSize = "50px";
                    row[i][l1].setAttribute('data-block', 'leaf');
                    row[i][l1].addEventListener('click', blockRemover);

                    row[l3][l1].style.backgroundImage = "url('./img/leaf.png')";
                    row[l3][l1].style.backgroundSize = "50px";
                    row[l3][l1].setAttribute('data-block', 'leaf');
                    row[l3][l1].addEventListener('click', blockRemover);

                    let r1 = l3;
                    r1 += 2;
                    row[r1][l1].style.backgroundImage = "url('./img/leaf.png')";
                    row[r1][l1].style.backgroundSize = "50px";
                    row[r1][l1].setAttribute('data-block', 'leaf');
                    row[r1][l1].addEventListener('click', blockRemover);

                    let l2 = l1;
                    let l4 = l3;
                    l3--;
                    l2--;

                    row[i][l2].style.backgroundImage = "url('./img/leaf.png')";
                    row[i][l2].style.backgroundSize = "50px";
                    row[i][l2].setAttribute('data-block', 'leaf');
                    row[i][l2].addEventListener('click', blockRemover);

                    row[l4][l2].style.backgroundImage = "url('./img/leaf.png')";
                    row[l4][l2].style.backgroundSize = "50px";
                    row[l4][l2].setAttribute('data-block', 'leaf');
                    row[l4][l2].addEventListener('click', blockRemover);

                    let r2 = l4;
                    r2 += 2;
                    row[r2][l2].style.backgroundImage = "url('./img/leaf.png')";
                    row[r2][l2].style.backgroundSize = "50px";
                    row[r2][l2].setAttribute('data-block', 'leaf');
                    row[r2][l2].addEventListener('click', blockRemover);
                    ++oneTreeOnly;
                }
            }
            randNum = Math.floor(Math.random() * 4);
        }
    }
    //SOIL
    for (let i = 0; i < row.length; i++) {
        for (let j = row[i].length - 4; j < row[i].length - 1; j++) {
            row[i][j].style.backgroundImage = "url('./img/soil.jpg')";
            row[i][j].style.backgroundSize = "50px";
            row[i][j].setAttribute('data-block', 'soil');
            row[i][j].addEventListener('click', blockRemover);
        }
    }
    //LAVA
    for (let i = 0; i < row.length; i++) {
        console.log(row[i].length);
        for (let j = row[i].length - 1; j < row[i].length; j++) {
            row[i][j].style.backgroundImage = "url('./img/lava.png')";
            row[i][j].style.backgroundSize = "50px";
            row[i][j].setAttribute('data-block', 'lava');
            row[i][j].addEventListener('click', blockRemover);
        }
    }

    $(".toolsAndstorage").css({
        width: "200px",
        height: "100vh",
        "background-color": "sandybrown"
    });
    let block = $("div");
};
Minecraft.buttons = function () {
    $('.game-size .btn').click(function () {
        Minecraft.canvasWidth = $(this).val();
        $(".selected").removeClass('selected');
        $(this).addClass('selected');
    })
}

Minecraft.setTool = () => {
    for (let tool of Minecraft.tools) {
        tool.style.backgroundImage = `url("./img/${tool.id}.png")`;
        tool.style.backgroundSize = "contain";
        tool.addEventListener("click", e => {
            tool.style.cursor = `url("./img/${tool.id}Cursor.png"),move`;
            Minecraft.minecraftField.style.cursor = `url("./img/${tool.id}Cursor.png"),move`;
            Minecraft.currentTool = tool.id;
        });
    }
};
Minecraft.setBlockBackground = () => {
    for (let block of Minecraft.block) {
        if (block.dataset.type === "clouds") {
            block.style.background = "white";
        }
        else if (block.dataset.type === "wood") {
            block.style.backgroundImage = "url('./img/trunk.jpg')";
            block.style.backgroundSize = "cover";
        }
        else if (block.dataset.type === "leaves") {
            block.style.backgroundImage = "url('./img/leaf.png')";
            block.style.backgroundSize = "cover";
        }
        else if (block.dataset.type === "grass") {
            block.style.backgroundImage = "url('./img/grass.png')";
            block.style.backgroundSize = "cover";
        }
        else if (block.dataset.type === "lava") {
            block.style.backgroundImage = "url('./img/lava.png')";
            block.style.backgroundSize = "cover";
        }
        else if (block.dataset.type === "lava") {
            block.style.backgroundImage = "url('./img/lava.png')";
            block.style.backgroundSize = "cover";
        }
        else if (block.dataset.type === "stone") {
            block.style.backgroundImage = "url('./img/stone.jpg')";
            block.style.backgroundSize = "cover";
        }
        else {
            block.style.backgroundImage = "url('./img/soil.jpg')";
            block.style.backgroundSize = "cover";
        }
    }
};
Minecraft.updateStorage = () => {
    for (let block of Minecraft.storageBlock) {
        block.addEventListener('click', function (e) {
            block.style.cursor = `url("./img/${block.id}.png"),move`;
            Minecraft.minecraftField.style.cursor = `url("./img/${block.id}.png"),move`;
        })
    }
};

function blockRemover() {
    let temp = $(this).data("block");
    let clone;
    if (temp == "cloud" && Minecraft.currentTool == "eraser") {
        $('[data-type="clouds"] .amount').html(parseInt($('[data-type="clouds"] .amount').html(), 10) + 1);
        $(this).css({ "background-color": "skyblue" });
        clone = $(this).clone();
        $(this).replaceWith(clone);
    }
    else if (temp == "leaf" && (Minecraft.currentTool == "axe" || Minecraft.currentTool == "eraser")) {
        $('[data-type="leaves"] .amount').html(parseInt($('[data-type="leaves"] .amount').html(), 10) + 1);
        $(this).css({ "background-color": "skyblue", "background-image": "" });
        clone = $(this).clone();
        $(this).replaceWith(clone);
    }
    else if (temp == "trunk" && (Minecraft.currentTool == "axe" || Minecraft.currentTool == "eraser")) {
        $('[data-type="wood"] .amount').html(parseInt($('[data-type="wood"] .amount').html(), 10) + 1);
        $(this).css({ "background-color": "skyblue", "background-image": "" });
        clone = $(this).clone();
        $(this).replaceWith(clone);
    }
    else if (temp == "grass" && (Minecraft.currentTool == "shovel" || Minecraft.currentTool == "eraser")) {
        $('[data-type="grass"] .amount').html(parseInt($('[data-type="grass"] .amount').html(), 10) + 1);
        $(this).css({ "background-color": "skyblue", "background-image": "" });
        clone = $(this).clone();
        $(this).replaceWith(clone);
    }
    else if (temp == "soil" && (Minecraft.currentTool == "shovel" || Minecraft.currentTool == "eraser")) {
        $('[data-type="pabbles"] .amount').html(parseInt($('[data-type="pabbles"] .amount').html(), 10) + 1);
        $(this).css({ "background-color": "skyblue", "background-image": "" });
        clone = $(this).clone();
        $(this).replaceWith(clone);
    }
    else if (temp == "lava" && (Minecraft.currentTool == "eraser" || Minecraft.currentTool == "eraser")) {
        $('[data-type="lava"] .amount').html(parseInt($('[data-type="lava"] .amount').html(), 10) + 1);
        $(this).css({ "background-color": "skyblue", "background-image": "" });
        clone = $(this).clone();
        $(this).replaceWith(clone);
    }
    else if (temp == "stone" && (Minecraft.currentTool == "pickaxe" || Minecraft.currentTool == "eraser")) {
        $('[data-type="stone"] .amount').html(parseInt($('[data-type="stone"] .amount').html(), 10) + 1);
        $(this).css({ "background-color": "skyblue", "background-image": "" });
        clone = $(this).clone();
        $(this).replaceWith(clone);
    }
}
$(document).ready(function () {
    $('.minecraft-world').css({ "visibility": "hidden" });
    $('.start-btn').click(function () {
        $('.welcome').fadeOut("slow");
        $('.minecraft-world').css({ "visibility": "visible" });
        Minecraft.start();
    })
});

Minecraft.start();
