// Add this code to your script.js file
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector("nav ul").classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const blogPostsContainer = document.getElementById("blogPostsContainer");
  const testimonialsContainer = document.querySelector(".testimonials-container");

  if (searchInput && blogPostsContainer) {
    fetch("blog_posts.json")
      .then((response) => response.json())
      .then((blogPosts) => {
        displayBlogPosts(blogPosts);
        searchInput.addEventListener("input", function () {
          const searchValue = this.value.toLowerCase();
          const filteredBlogPosts = blogPosts.filter((post) =>
            post.title.toLowerCase().includes(searchValue)
          );
          displayBlogPosts(filteredBlogPosts);
        });

        function displayBlogPosts(posts) {
          blogPostsContainer.innerHTML = "";

          posts
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .forEach((post) => {
              const postElement = document.createElement("div");
              postElement.classList.add("blog-post-item");
              postElement.innerHTML = `
                            <h2><a href="${post.url}">${post.title}</a></h2>
                            <p>Published on: ${post.date}</p>
                        `;
              blogPostsContainer.appendChild(postElement);
            });
        }
      });
  }

  if (testimonialsContainer) {
    testimonialsContainer.addEventListener("wheel", function (e) {
      e.preventDefault();
      testimonialsContainer.scrollLeft += e.deltaY;
    });
  }
});
