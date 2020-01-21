fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => data.forEach(({
        id,
        userId,
        title,
        body,
    }) => {
        const div = document.createElement("div");
        const title = document.createElement("h3");
        const body = document.createElement("p");
        const id = document.createElement("h3");
        const userId = document.createElement("h3")
        const parentDiv = document.querySelector(".parent");

        //css
        div.style.border = "3px solid black";
        div.style.margin = "20px";
        div.style.width = "600px";

        body.style.border = "1px solid black";
        body.style.padding =  "20px";
        body.style.margin =  "20px";

        id.style.border = "1px solid black";
        id.style.padding =  "20px";
        id.style.margin =  "20px";

        userId.style.border = "1px solid black";
        userId.style.margin =  "20px";
        userId.style.padding =  "20px";

        title.style.margin =  "20px";
        title.style.padding =  "20px";
        title.style.border = "1px solid black";

        //attaching data
        id.innerHTML = `ID: ${id}`;
        userId.innerHTML = `UserId: ${userId}`
        title.innerHTML = `Title: ${title}`;
        body.innerHTML = `Body: ${body}`;

        //appending to html
        parentDiv.appendChild(div);
        div.appendChild(id)
        div.appendChild(userId);
        div.appendChild(title);
        div.appendChild(body);
    }));
