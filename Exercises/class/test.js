let body = document.body
let div = body.children[0]

let pTags = div.children

let firstP = div.children[0]
let lastP = div.children[pTags.length - 1]

let secondP = firstP.nextElementSibling


/*
             BODY    DIV       1ST P TAG    
    document.body.children[0].children[0].innerText
*/


// pTags.para1 - can select element in an HTML Collection based off the id name
// firstP.nextElementSibling - to find next sibling in the tree, so +1 to the HTML Collection index
// lastP.previousElementSibling



    pTags[0].innerText = "hello"


