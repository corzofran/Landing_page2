const fetchComments = async () => {
    const container = document.getElementById('comments-container');
    container.innerHTML = ''; 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const comments = await response.json();
        comments.forEach(comment => {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment-card');
            commentDiv.innerHTML = `
                <h4>${comment.name} (${comment.email})</h4>
                <p>${comment.body}</p>
            `;
            container.appendChild(commentDiv);
        });
    } catch (error) {
        container.innerHTML = '<p style="color: red;">Error al cargar los comentarios.</p>';
        console.error('Error fetching comments:', error);
    }
};

const fetchPhotos = async () => {
    const container = document.getElementById('photos-container');
    container.innerHTML = ''; 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        const photos = await response.json();
        photos.slice(0, 6).forEach(photo => { 
            const photoDiv = document.createElement('div');
            photoDiv.classList.add('photo-item');
            photoDiv.innerHTML = `
                <img src="${photo.thumbnailUrl}" alt="${photo.title}">
                <p>${photo.title}</p>
            `;
            container.appendChild(photoDiv);
        });
    } catch (error) {
        container.innerHTML = '<p style="color: red;">Error al cargar las fotos.</p>';
        console.error('Error fetching photos:', error);
    }
};

const fetchPosts = async () => {
    const container = document.getElementById('posts-container');
    container.innerHTML = ''; 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'); 
        const posts = await response.json();
        posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post-item');
            postDiv.innerHTML = `
                <h3>${post.title}</h3>
                <p><strong>ID:</strong> ${post.id}</p>
            `;
            container.appendChild(postDiv);
        });
    } catch (error) {
        container.innerHTML = '<p style="color: red;">Error al cargar los posts.</p>';
        console.error('Error fetching posts:', error);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    fetchComments();
    fetchPhotos();
    fetchPosts();
});