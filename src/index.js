import './assets/style.css';

export async function init() {
  miro.board.ui.on('icon:click', async () => {

// Get all items from the board
const items = await miro.board.get();


items.forEach((items) => {
  switch (items.shape) {
    case 'rectangle':
    case 'star':
    case 'round_rectangle':
    case 'circle':
    case 'triangle':
    case 'rhombus':
    case 'parallelogram':
    case 'trapezoid':
    case 'pentagon':
    case 'hexagon':
    case 'octagon':
    case 'wedge_round_rectangle_callout':
    case 'cloud':
    case 'cross':
    case 'can':
    case 'right_arrow':
    case 'left_arrow':
    case 'left_right_arrow':
    case 'left_brace':
    case 'right_brace':
      items.content = "";
      items.sync();
      ;
  }
});


let stickyNotes = items.filter((item) => item.type === 'sticky_note')

// Delete sticky note content
for (const stickyNote of stickyNotes) 
{
  stickyNote.content = "";
  stickyNote.sync(); 
}


let textNotes = items.filter((item) => item.type === 'text')

// Delete sticky note content
for (const textNote of textNotes) 
{
  textNote.content = "";
  textNote.sync(); 
}


/* let selectedItems = await miro.board.getSelection()

// Filter sticky notes from selected items
let stickyNotes = selectedItems.filter((item) => item.type === 'sticky_note')

let rectangles = selectedItems.filter((item) => item.shape === 'rectangle')

let stars = selectedItems.filter((item) => item.shape === 'star')

// Delete selected stickers
for (const stickyNote of stickyNotes) 
{
  stickyNote.content = "";
  stickyNote.sync(); 
}

 //Delete selected stickers
for (const rectangle of rectangles) 
{
  rectangle.content = "";
  rectangle.sync(); 
}

 //Delete selected stickers
 for (const star of stars) 
 {
   star.content = "";
   star.sync(); 
 } */



  });
}

init();
