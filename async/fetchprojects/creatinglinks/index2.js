function getlinks(){
    let searchvalue=document.getElementById("search").value;
    fetch(searchvalue).then(response=>response.json()).then(json=>{
        const container=document.getElementById("container");
        container.innerHTML='';
        json.forEach(element=>{
            const links=document.createElement("a");
            /*links.href=links.url;*/
            l=element.email;

            if (l.includes(".com")) {
                links.textContent=l;
            }
            links.style.color="red";
            links.style.display = "block";
            container.appendChild(links);

        })
    })
    

}


/* 
https://jsonplaceholder.typicode.com/comments
*/