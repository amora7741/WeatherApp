import renderSearchBar from './search';

export default function renderHeader() {
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'BreezyZone';

  header.appendChild(title);
  header.appendChild(renderSearchBar());

  return header;
}
