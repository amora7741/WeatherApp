export default function renderSearchBar() {
  const searchForm = document.createElement('form');

  const searchLabel = document.createElement('label');
  searchLabel.textContent = 'Enter a City: ';
  searchLabel.setAttribute('for', 'cityinput');
  const searchBar = document.createElement('input');
  searchBar.setAttribute('id', 'cityinput');
  const searchButton = document.createElement('button');
  searchButton.textContent = 'Search';

  searchForm.appendChild(searchLabel);
  searchForm.appendChild(searchBar);
  searchForm.appendChild(searchButton);

  return searchForm;
}
