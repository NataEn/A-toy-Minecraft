const Minecraft = {};

Minecraft.canvas = [];
Minecraft.canvasWidth = 1000;
Minecraft.tools = document.querySelectorAll(".tool");
Minecraft.minecraftField = document.querySelector(".minecraft-field");
Minecraft.minecraftFieldWrapper = document.querySelector(
  ".minecraft-field-wrapper"
);
Minecraft.block = document.querySelectorAll(".block");
Minecraft.storageBlock = document.querySelectorAll(".block[data-type]");

Minecraft.start = function() {
  Minecraft.addField();
  Minecraft.updateStorage();
  Minecraft.setBlockBackground();
  Minecraft.buttons();
  Minecraft.fillCanvas();
  Minecraft.setTool();
};

Minecraft.fillCanvas = function() {
  $(".cart-container").css({
    width: "20vw",
    height: "100vh",
    "background-color": "sandybrown"
  });
  $(".minecraft-field").css({
    "background-color": "skyblue"
  });
  $(".minecraft-field-wrapper").css({
    width: "80vw",
    height: "max-content",
    "background-color": "skyblue",
    overflowX: "scroll",
    overflowY: "initial"
  });

  $(".toolsAndstorage").css({
    width: "20vw",
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
Minecraft.addField = (fieldSize = Minecraft.canvasWidth) => {
  let field = Minecraft.minecraftField;
  let numOfleaves = 5;
  let numOfpabbles = 5;
  let numOfcloudes = 5;
  let numOfWood = 5;
  for (let i = 0; i < 10; i++) {
    if (numOfleaves) {
      for (let i = 0; i < numOfleaves; i++, numOfleaves--) {
        let block = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("data-type", "leaves");
        block.style.backgroundImage = `url("./img/${block.dataset.type}.png")`;
        field.appendChild(block);
      }
    }
    if (numOfpabbles) {
      for (let i = 0; i < numOfpabbles; i++, numOfpabbles--) {
        let block = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("data-type", "pabbles");
        block.style.backgroundImage = `url("./img/${block.dataset.type}.png")`;
        field.appendChild(block);
      }
    }
    if (numOfcloudes) {
      for (let i = 0; i < numOfcloudes; i++, numOfcloudes--) {
        let block = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("data-type", "cloudes");
        block.style.background = "white";
        field.appendChild(block);
      }
    }
    if (numOfWood) {
      for (let i = 0; i < numOfWood; i++, numOfWood--) {
        let block = document.createElement("div");
        block.setAttribute("class", "block");
        block.setAttribute("data-type", "wood");
        block.style.backgroundImage = `url("./img/${block.dataset.type}.png")`;
        field.appendChild(block);
      }
    } else {
      let block = document.createElement("div");
      block.setAttribute("class", "block");
      block.setAttribute("data-type", "wood");
      field.appendChild(block);
    }
  }
};
Minecraft.start();
