import axios from 'axios';
const Card = (article) => {
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imageContainer = document.createElement('div');
  const authorPhoto = document.createElement('img');
  const authorName = document.createElement('span');
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');
  imageContainer.appendChild(authorPhoto);
  author.appendChild(imageContainer);
  author.appendChild(authorName);
  card.appendChild(headline)
  card.appendChild(author)
  headline.textContent = article.headline;
  authorPhoto.src = article.authorPhoto;
  authorName.textContent = article.authorName;
  card.addEventListener('click', () => {
    console.log(article.headline)
  })





  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  return card
}



const cardAppender = (selector) => {
  const entryPoint = document.querySelector(selector);
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then((res) => {
      const response = res.data.articles
      const bootstrap = res.data.articles.bootstrap
      const javascript = res.data.articles.javascript
      const jquery = res.data.articles.jquery
      const node = res.data.articles.node
      const technology = res.data.articles.technology
      for (let x = 0; x < 4; x++) {
        entryPoint.appendChild(Card(bootstrap[x]))
        entryPoint.appendChild(Card(javascript[x]))
        entryPoint.appendChild(Card(jquery[x]))
        entryPoint.appendChild(Card(node[x]))
        entryPoint.appendChild(Card(technology[x]))
      }
    })
    .catch(err => console.log(err))
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
