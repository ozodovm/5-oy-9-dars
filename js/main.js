fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
    renderUsers(data)
})
let ElUsersList = document.querySelector(".users-list")
function renderUsers(arr) {
arr.forEach(item => {
    let elItem = document.createElement("li")
    elItem.className = "p-4 bg-gray-200 rounded-lg shadow-sm"
    elItem.innerHTML = `
        <p class="text-gray-700"><strong>Id:</strong> ${item.id}</p>
        <p class="text-gray-700"><strong>Name:</strong> ${item.name}</p>
        <p class="text-gray-700"><strong>Username:</strong> ${item.username}</p>
        <p class="text-gray-700"><strong>Email:</strong> ${item.email}</p>
        <p class="text-gray-700"><strong>Phone:</strong> ${item.phone}</p>
        <button onclick="handleUsersPostShow(${item.id})" 
            class="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Show Posts
        </button>
    `
    ElUsersList.appendChild(elItem)
});
}
let elPostsList = document.querySelector(".posts-list")
function handleUsersPostShow(id) {
elCommentsList.innerHTML = null
elPostsList.textContent = "Loading..."
fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(res => res.json())
    .then(data => {
        setTimeout(() => {
            renderPost(data);
        }, 500);
    })
}
function renderPost(arr) {
elPostsList.innerHTML = null
arr.forEach(item => {
    let elItem = document.createElement("li")
    elItem.className = "p-4 bg-gray-200 rounded-lg shadow-sm"
    elItem.innerHTML = `
        <p class="text-gray-700"><strong>Id:</strong> ${item.id}</p>
        <p class="text-gray-700"><strong>User Id:</strong> ${item.userId}</p>
        <p class="text-gray-700"><strong>Title:</strong> ${item.title}</p>
        <p class="text-gray-700"><strong>Body:</strong> ${item.body}</p>
        <button onclick="handlePostsCommentShow(${item.id})" 
            class="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
            Show Comments
        </button>
    `
    elPostsList.appendChild(elItem)
});
}
let elCommentsList = document.querySelector(".comments-list")
function handlePostsCommentShow(id) {
elCommentsList.textContent = "Loading..."
fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json())
    .then(data => {
        setTimeout(() => {
            renderComment(data)
        }, 500);
    })
}
function renderComment(arr) {
elCommentsList.innerHTML = null
arr.forEach(item => {
    let elItem = document.createElement("li")
    elItem.className = "p-4 bg-gray-200 rounded-lg shadow-sm"
    elItem.innerHTML = `
        <p class="text-gray-700"><strong>Id:</strong> ${item.id}</p>
        <p class="text-gray-700"><strong>Name:</strong> ${item.name}</p>
        <p class="text-gray-700"><strong>Email:</strong> ${item.email}</p>
        <p class="text-gray-700"><strong>Body:</strong> ${item.body}</p>
    `
    elCommentsList.appendChild(elItem)
});
}