document.addEventListener('DOMContentLoaded', (event)=> {
  const COLS = 50;
  const ROWS = 50;
  const intFrameHeight = 500;
  const intFrameWidth = 1000;
  const cellWidth = intFrameWidth/COLS;
  const cellHeight = intFrameHeight/ROWS;
  const table = document.querySelector("#table");
  for (let i=0; i< COLS;i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j =0 ;j<ROWS;j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.cssText = `height: ${cellHeight}px;width: ${cellWidth}px`;
      cell.setAttribute("id",`row${i}col${j}`);
      row.appendChild(cell);
    
    }
    table.appendChild(row);
  }
})
