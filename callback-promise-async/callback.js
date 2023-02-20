let articles = [
  {
    title: "First Article",
    content: "Hello python!",
  },
  {
    title: "Second Article",
    content: "Hello js!",
  },
];

function showArticles() {
  articles.forEach((article) => {
    console.log(`${article.title}: ${article.content}`);
  });
}

// Callback
function addArticle(article, callback) {
  setTimeout(() => {
    articles.push(article);
    callback();
  }, 0.5 * 1000);
}

// addArticle(
//   {
//     title: "Third Article",
//     content: "Hello golang.",
//   },
//   showArticles
// );

// Promise
function addArticle(article) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      articlesLength = articles.length;
      articles.push(article);
      if (articles.length === articlesLength + 1) {
        resolve("Article added successfully.");
      } else {
        reject("Something went wrong!");
      }
    }, 0.5 * 1000);
  });
}

addArticle({
  title: "Third Article",
  content: "Hello golang.",
})
  .then(showArticles)
  .catch((error) => console.log(error));

// Async
async function init() {
  await addArticle({
    title: "Third Article",
    content: "Hello golang.",
  });
  console.log("");
  showArticles();
}

init();
