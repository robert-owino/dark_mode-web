const toggleBtn = document.querySelector(".btn");
const articleContainer = document.querySelector(".articles");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
});

const articlesData = articles
  .map((article) => {
    const { title, date, length, snippet } = article;
    //format date
    const formatDate = moment(date).format("MMMM Do YYYY");
    return `<article class="post">
        <h2>${title}</h2>
        <div class="post-info">
          <span>${formatDate}</span>
          <span>${length}</span>
        </div>
        <p>
          ${snippet}
        </p>
      </article>`;
  })
  .join("");
articleContainer.innerHTML = articlesData;


// function display(items){
//     let displayItems = items.map((item) => {
//       return ` <article class="post">
//         <h2>${item.title}</h2>
//         <div class="post-info">
//           <span>${item.date}</span>
//           <span>${item.length}</span>
//         </div>
//         <p>
//           ${item.snippet}
//         </p>
//       </article>`;
//     });
//     displayItems = displayItems.join('')
//     articleDisplay.innerHTML = displayItems
// }

// display(articles)
