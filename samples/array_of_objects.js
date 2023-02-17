let articles = [
  {
    title: "How To Use Python",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci, delectus.
        Odit praesentium porro doloremque in corporis a hic facilis
        commodi aspernatur architecto aut est amet sunt,
        possimus velit enim! Ab!`,
    author: "Mohammad Dori",
    likes: 43,
    views: 1587,
  },
  {
    title: "Javascript Programming Language",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Sit ea corrupti culpa eum vel at totam maxime quam distinctio minima
    ipsa nostrum, accusamus fugit eveniet libero cupiditate,
    magnam voluptates molestiae!`,
    author: "Salar",
    likes: 80,
    views: 3598,
  },
  {
    title: "Create Store Using React",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Sit ea corrupti culpa eum vel at totam maxime quam distinctio minima
    ipsa nostrum, accusamus fugit eveniet libero cupiditate,
    magnam voluptates molestiae!`,
    author: "Mina Adibi",
    likes: 257,
    views: 8725,
  },
];

articles.forEach((article) => {
  console.log(article.title);
  console.log(article.description);
  console.log(`Author: ${article.author}`);
  console.log(`Views: ${article.views} | Likes: ${article.likes}`);
  console.log("------------------------------------");
});
