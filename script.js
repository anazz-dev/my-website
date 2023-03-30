/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


// List of blog post URLs and titles in the order they appear on your blog
const blogPosts = [
    { url: "how-long-is-medical-residency-in-germany.html", title: "How Long is Medical Residency in Germany?"},
    { url: "blog-2.html", title: "Tips for Navigating the Language Requirements for Medical Residency in Germany"},
    { url: "fachsprachprufung-overview.html", title: "Understanding the Fachsprachprüfung for Medical Doctors in Germany"},
    { url: "living-in-germany.html", title: "Living in Germany during Medical Residency"},
    { url: "blog-1.html", title: "Getting Started with Medical Residency in Germany"},
    { url: "application-process.html", title: "Application Process for Medical Residency in Germany"},
    { url: "study-medicine-in-english-in-germany.html", title: "Study Medicine in English in Germany"},

    // Add more posts as needed
];

function setPostNavigation() {
    const currentPage = window.location.pathname.split('/').pop();
    const currentIndex = blogPosts.findIndex(post => post.url === currentPage);

    if (currentIndex > 0) {
        const prevPost = blogPosts[currentIndex - 1];
        document.getElementById("prevPostLink").href = prevPost.url;
        document.getElementById("prevPostTitle").textContent = prevPost.title;
    } else {
        document.querySelector(".prev-post").style.display = "none";
    }

    if (currentIndex < blogPosts.length - 1) {
        const nextPost = blogPosts[currentIndex + 1];
        document.getElementById("nextPostLink").href = nextPost.url;
        document.getElementById("nextPostTitle").textContent = nextPost.title;
    } else {
        document.querySelector(".next-post").style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", setPostNavigation);
