import '../sass/grid.scss';
import '../sass/demo.scss';

function add_div(parent, className, textContent) {
  var element = document.createElement('div');
  element.className = className;
  parent.appendChild(element);
  if (textContent) {
    element.textContent = textContent;
  }
  return element;
}

function add_container (parent, fluid) {
  var container = add_div(parent, 'container' + (fluid ? '-fluid' : ''));

  let r = add_div(container, 'row');
  add_div(r, 'col only-xs', 'xs');
  add_div(r, 'col only-sm', 'sm');
  add_div(r, 'col only-md', 'md');
  add_div(r, 'col only-lg', 'lg');
  add_div(r, 'col only-xl', 'xl');

  for (let i = 1; i <= 12; i++) {
    let row = add_div(container, 'row');
    for (let c = 1; c <= i; c++) {
      var col = add_div(row, 'col');
      col.textContent = 'col ' + c + ' of ' + i;
    }
  }

  for (let i = 1; i <= 12; i++) {
    let row = add_div(container, 'row');
    for (let c = i; c <=12; c += i) {
      var col = add_div(row, 'col col-sm-' + i);
      col.textContent = 'col-sm-' + i;
    }
  }

  for (let i = 1; i <= 11; i++) {
    let row = add_div(container, 'row');
    var col = add_div(row, 'col col-sm-1 col-sm-offset-' + i);
    col.textContent = 'col-sm-offset-' + i;
  }

  for (let i = 1; i <= 11; i++) {
    let row = add_div(container, 'row');
    var col = add_div(row, 'col col-sm-1 col-md-offset-' + i);
    col.textContent = 'col-md-offset-' + i;
  }

  for (let i = 1; i <= 11; i++) {
    let row = add_div(container, 'row');
    var col = add_div(row, 'col col-sm-1 col-lg-offset-' + i);
    col.textContent = 'col-lg-offset-' + i;
  }

  for (let i = 1; i <= 11; i++) {
    let row = add_div(container, 'row');
    var col = add_div(row, 'col col-sm-1 col-xl-offset-' + i);
    col.textContent = 'col-xl-offset-' + i;
  }

  for (let i = 1; i <= 12; i++) {
    let row = add_div(container, 'row');
    for (let c = i; c <=12; c += i) {
      var col = add_div(row, 'col col-sm-12 col-md-' + i);
      col.textContent = 'col-md-' + i;
    }
  }

  for (let i = 1; i <= 12; i++) {
    let row = add_div(container, 'row');
    for (let c = i; c <=12; c += i) {
      var col = add_div(row, 'col col-sm-12 col-md-4 col-lg-' + i);
      col.textContent = 'col-lg-' + i;
    }
  }

  for (let i = 1; i <= 12; i++) {
    let row = add_div(container, 'row');
    for (let c = i; c <=12; c += i) {
      var col = add_div(row, 'col col-sm-12 col-md-6 col-lg-4 col-xl-' + i);
      col.textContent = 'col-xl-' + i;
    }
  }

  for (let i = 1; i <= 12; i++) {
    let row = add_div(container, 'row');
    for (let c = i; c <=12; c += i) {
      var col = add_div(row, 'col col-sm-12 col-md-6 col-lg-4 col-xl-' + i);
      let col_row = add_div(col, 'row');
      add_div(col_row, 'col col-xs-6', 'col-xs-6');
      add_div(col_row, 'col col-xs-6', 'col-xs-6');
    }
  }
}

add_container(document.body, true);
add_container(document.body, false);
