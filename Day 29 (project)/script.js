document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('dashboard-content');

    const posts = [
        { id: 1, title: 'My First Post', content: 'This is the content of my first post.' },
        { id: 2, title: 'Another Day, Another Post', content: 'Here is some more content in another post.' },
        { id: 3, title: 'Social Media Insights', content: 'Insights and updates on my social media activities.' }
    ];

    const renderPosts = () => {
        content.innerHTML = '';
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            `;
            content.appendChild(postDiv);
        });
    };

    const showPosts = () => {
        renderPosts();
    };

    const showFriends = () => {
        content.innerHTML = '<h2>Friends List</h2><p>List of friends will be displayed here.</p>';
    };

    const showMessages = () => {
        content.innerHTML = '<h2>Messages</h2><p>Messages will be displayed here.</p>';
    };

    // Default view
    showPosts();

    // Expose functions globally
    window.showPosts = showPosts;
    window.showFriends = showFriends;
    window.showMessages = showMessages;
});
