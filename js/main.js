const Minecraft = {};

Minecraft.canvas = [];
Minecraft.canvasWidth = 1000;
Minecraft.tools = document.querySelectorAll(".tool");
Minecraft.minecraftField = document.querySelector(".minecraft-field");
Minecraft.block = document.querySelectorAll(".block");
Minecraft.storageBlock = document.querySelectorAll(".block[data-type]");

Minecraft.start = function() {
  Minecraft.updateStorage();
  Minecraft.setBlockBackground();
  Minecraft.buttons();
  Minecraft.fillCanvas();
  Minecraft.setTool();
};

Minecraft.fillCanvas = function() {
  $(".cart-container").css({
    width: "200px",
    height: "100vh",
    "background-color": "sandybrown"
  });
  $(".minecraft-field").css({
    width: `${Minecraft.canvasWidth}px`,
    height: "100vh",
    "background-color": "skyblue",
    float: "left",
    overflow: "scroll"
  });

  $(".toolsAndstorage").css({
    width: "200px",
    height: "100vh",
    "background-color": "sandybrown"
  });
  let block = $("div");
};
Minecraft.buttons = function() {
  $(".game-size .btn").click(function() {
    console.log("clicked");
    Minecraft.canvasWidth = $(this).val();
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    console.log(Minecraft.canvasWidth);
  });
};
$(document).ready(function() {
  $(".start-btn").click(function() {
    $(".welcome").fadeOut("slow");
    Minecraft.start();
  });
});
Minecraft.setTool = () => {
  for (let tool of Minecraft.tools) {
    tool.style.backgroundImage = `url("./img/${tool.id}.png")`;
    tool.style.backgroundSize = "contain";
    tool.addEventListener("click", e => {
      tool.style.cursor = `url("./img/${tool.id}Cursor.png"),move`;
      Minecraft.minecraftField.style.cursor = `url("./img/${tool.id}Cursor.png"),move`;
    });
  }
};
Minecraft.setBlockBackground = () => {
  for (let block of Minecraft.block) {
    if (block.dataset.type === "cloude") {
      block.style.background = "white";
    } else if (block.dataset.type === "sky") {
      block.style.background = "blue";
    } else {
      block.style.backgroundImage = `url("./img/${block.dataset.type}.png")`;
      block.style.backgroundSize = "cover";
    }
  }
};
Minecraft.updateStorage = () => {
  for (let block of Minecraft.storageBlock) {
    console.log(block);
  }
};
Minecraft.start();
