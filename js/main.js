// Menu layout
const menuWrapper = $('div > div:nth-child(1) > div > div');

menuWrapper.addClass('flex-row');
menuWrapper.find('button.btn.btn-secondary').addClass('mr-1 rounded');
menuWrapper.find('button.btn.btn-secondary').css('width', 'fit-content');

// Header layout
const headerWrapper = $(
  'div > div:nth-child(4) > div.col-lg-12 > div.jumbotron'
);
headerWrapper.css('text-align', 'right');
headerWrapper.addClass('bg-secondary text-white');
headerWrapper.find('a.btn.btn-primary.btn-lg').addClass('btn-success');

// Cards order
const [animals, technology, people, nature] = $(
  'div.container > div:nth-child(6).row .col-lg-3'
);

$(animals).find('a.btn').addClass('btn-success');

$('div.container > div:nth-child(6).row')
  .slice(0, 1)
  .append([nature, animals, people, technology]);

// List elements
const listWrapper = $('div.container ul.list-group');

listWrapper.find('.list-group-item.active').removeClass('active');
listWrapper.append([
  '<li class="list-group-item active">Quarto item</li>',
  '<li class="list-group-item">Quinto item</li>',
]);
