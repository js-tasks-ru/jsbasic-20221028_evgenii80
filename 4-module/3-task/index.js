function highlight(table) {
  let headCells = Array.from(table.tHead.rows[0].cells);
  let genderIndex;
  let nameIndex;
  let ageIndex;
  let statusIndex;

  for (let i = 0; i < headCells.length; i++) {

    switch (headCells[i].innerText) {
      case 'Gender':
        genderIndex = i;
          break;

      case 'Age':
        ageIndex = i;
          break;

      case 'Status':
        statusIndex = i;
          break;
    }
  }

  for (let row of table.tBodies[0].rows) {
    let genderItem = row.cells.item(genderIndex);
    let ageItem = row.cells.item(ageIndex);
    let statusItem = row.cells.item(statusIndex);

    if (genderItem.innerText ==='m') {
      row.classList.add(`male`);
    } else if (genderItem.innerText ==='f') {
      row.classList.add(`female`);
    }

    if ( +ageItem.innerText < 18) {
      row.style = "text-decoration: line-through";
    }

    if (!statusItem.dataset.hasOwnProperty('available')) {
      row.hidden = true;
    } else if (statusItem.dataset.available === 'true') {
      row.classList.add('available');
    } else if (statusItem.dataset.available === 'false') {
      row.classList.add('unavailable');
    }
  }
}
