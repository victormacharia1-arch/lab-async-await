
function displayPosts(posts) {
    const postList = document.getElementById('post-list');

    if (!postList || !Array.isArray(posts)) {
        return;
    }

    postList.innerHTML = '';

    posts.forEach((post) => {
        const postItem = document.createElement('li');

        const title = document.createElement('h1');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        postItem.appendChild(title);
        postItem.appendChild(body);

        postList.appendChild(postItem);
    });
}

async function fetchAndDisplayPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        displayPosts(data);
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

module.exports = {
    displayPosts,
    fetchAndDisplayPosts
};

if (typeof document !== 'undefined' && document.getElementById('post-list')) {
    fetchAndDisplayPosts();
}
