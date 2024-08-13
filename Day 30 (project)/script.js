document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("postForm");
    const responseMessage = document.getElementById("responseMessage");
    const postsContainer = document.getElementById("posts");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const postText = form.postText.value.trim();

        if (postText) {
            addPost(postText);
            form.reset();
            showResponseMessage();
        }
    });

    function addPost(text) {
        const post = document.createElement("div");
        post.classList.add("post");
        post.innerHTML = `
            <p>${text}</p>
        `;
        postsContainer.prepend(post);
    }

    function showResponseMessage() {
        responseMessage.style.display = "block";
        setTimeout(function() {
            responseMessage.style.display = "none";
        }, 3000);
    }
});
