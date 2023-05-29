let searchString = "synerzip";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
    href = element.href;
    if(href.includes(searchString)){
        console.log(href);    
    }

});