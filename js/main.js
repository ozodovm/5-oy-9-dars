fetch("https://jsonplaceholder.typicode.com/posts",{
    method:"get",
    headers:{
        "Content-type":"application/json",
    }
})
.then(res => res.json())
.then(data => {
    renderNavber(data)
})
.catch(err => {
    console.log("Salom Komiljon");
})