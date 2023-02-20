let postUrl = "https://jsonplaceholder.typicode.com/posts/";
let usersUrl = "https://jsonplaceholder.typicode.com/users/";
let articles = document.querySelector("#articles");

// fetch(postUrl)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function getAuthor(url, id) {
  let response = await fetch(url + id);
  let author = await response.json();
  return author;
}

async function getArticles(url) {
  let response = await fetch(url);
  let data = await response.json();
  data.forEach(async (post) => {
    post.user = await getAuthor(usersUrl, post.userId);
    articles.innerHTML += `
    <article>
      <h3>${post.title}</h3>
      <small>${post.user.name}</small>
      <p>${post.body}</p>
    </article>
    <hr />
    `;
  });
}

getArticles(postUrl);
