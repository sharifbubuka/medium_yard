async function fetchPosts() {
  try {
    const username = '@sharifbubuka256';
    const response = await fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${username}`
    );
    const { items } = await response.json();
    // check if object status is ok or not

    return items.filter(item => item.categories.length > 0);
  } catch (e) {
    console.log(e);
  }
}

(async () => {
  const postContainer = document.getElementById('container');
  const posts = await fetchPosts();
  console.log(posts);
  // console.log(typeof posts);

  posts.forEach(item => {
    postContainer.innerHTML += `
    <div class="post">
        <div class="title">
          <h3>${item.title}</h3>
        </div>
        <div class="article">
          ${item.content}
        </div>
        <hr>
        <div class="stats">
          <p class="claps">Claps: <span class="count"> 500 </span></p>
          <p class="comments">Comments: <span class="count"> 10 </span></p>
        </div>
      </div>`;
  });
})();
