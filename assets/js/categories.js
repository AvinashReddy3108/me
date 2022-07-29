const categories = { fiction: [{ url: `/me/posts/the-purpose-of-education/`, date: `12 Dec 1948`, title: `[SAMPLE POST] The Purpose of Education`},],jekyll: [{ url: `/me/posts/jekyll-markdown/`, date: `04 Nov 2021`, title: `[SAMPLE POST] Jekyll Markdown`},{ url: `/me/posts/the-purpose-of-education/`, date: `12 Dec 1948`, title: `[SAMPLE POST] The Purpose of Education`},],Test_Post: [{ url: `/me/posts/jekyll-markdown/`, date: `04 Nov 2021`, title: `[SAMPLE POST] Jekyll Markdown`},],first_post: [{ url: `/me/posts/jekyll-markdown/`, date: `04 Nov 2021`, title: `[SAMPLE POST] Jekyll Markdown`},], }

window.onload = function () {
  document.querySelectorAll(".category").forEach((category) => {
    category.addEventListener("click", function (e) {
      const posts = categories[e.target.innerText.replace(" ","_")];
      let html = ''
      posts.forEach(post=>{
        html += `
        <a class="modal-article" href="${post.url}">
          <h4>${post.title}</h4>
          <small class="modal-article-date">${post.date}</small>
        </a>
        `
      })
      document.querySelector("#category-modal-title").innerText = "Tag: " + e.target.innerText;
      document.querySelector("#category-modal-content").innerHTML = html;
      document.querySelector("#category-modal-bg").classList.toggle("open");
      document.querySelector("#category-modal").classList.toggle("open");
    });
  });

  document.querySelector("#category-modal-bg").addEventListener("click", function(){
    document.querySelector("#category-modal-title").innerText = "";
    document.querySelector("#category-modal-content").innerHTML = "";
    document.querySelector("#category-modal-bg").classList.toggle("open");
    document.querySelector("#category-modal").classList.toggle("open");
  })
};
