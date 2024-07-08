import './assets/style.css';

export async function init() {
  miro.board.ui.on('icon:click', async () => {

  // Get all items from the board
  const items = await miro.board.get();

  //For all the shapes, remove the content
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
    }
  });

  //Get all the sticky notes on the baord
  let stickyNotes = items.filter((item) => item.type === 'sticky_note')

  // Delete sticky note content
  for (const stickyNote of stickyNotes) {
    stickyNote.content = "";
    stickyNote.sync(); 
  }

  //Get all the text notes on the board
  let textNotes = items.filter((item) => item.type === 'text')

  // Delete text note content
  for (const textNote of textNotes) {
    textNote.content = "";
    textNote.sync(); 
  }
});
}

init();
