const startLevel1 = () => {
  clearStartGameBtn();
  clearGrid();
  loadLevel1();
};

const startLevel2 = () => {
  clearStartGameBtn();
  clearGrid();
  loadLevel2();
};

const clearStartGameBtn = () => {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) startBtn.remove();
};

const clearGrid = () => {
  const grid = document.querySelector(".grid");
  while (grid.firstElementChild) {
    grid.firstElementChild.remove();
  }
  //grid.innerHTML = "";
};

// function loadScript(url) {
//     document.body.appendChild(document.createElement("script")).src = url;
// }
