let input = document.getElementById("input");
let button = document.querySelectorAll("button");

// Add a click event listener to each button
button.forEach(element => {
    element.addEventListener("click", (e) => {
        console.log(e.target.textContent);

   //if you enter operator after operator it will do nothing
    // if (e.target.innerText.match(/[+\-*/]/) && input.innerText.match(/[+\-*/]$/)) {
    //      return;
    // }

        if(e.target.textContent === "C"){
            input.innerText="";
        }
        else if(e.target.textContent === "<"){
            input.innerText=input.innerText.slice(0,-1);
        }
        else if(e.target.innerText === "="){
            input.innerText=eval(input.innerText);
        }
        else{
            input.innerText += e.target.textContent;
        }

        input.scrollLeft=input.scrollWidth ;
    })
});