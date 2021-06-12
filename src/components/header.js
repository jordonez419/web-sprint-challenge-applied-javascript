const Header = (title, date, temp) => {
  const header = document.createElement('div')
  const titleContainer = document.createElement('h1')
  const dateContainer = document.createElement('span')
  const tempContainer = document.createElement('span')
  header.appendChild(dateContainer)
  header.appendChild(titleContainer)
  header.appendChild(tempContainer)
  header.classList.add('header');
  dateContainer.classList.add('date');
  tempContainer.classList.add('temp');
  dateContainer.textContent = date;
  tempContainer.textContent = temp;
  titleContainer.textContent = title;
  return header


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}


const headerAppender = (selector) => {
  const result = Header('Heckin opinionated DOGE Times', '6/12/21', '80°');
  const entryPoint = document.querySelector(selector);
  entryPoint.appendChild(result)
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  return entryPoint
}


export { Header, headerAppender }
