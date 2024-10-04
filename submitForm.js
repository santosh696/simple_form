var user_name = document.createElement("input");
user_name.type = 'text';

var user_cell = document.createElement("input");
user_cell.type = 'number';

var breakline1 = document.createElement("br");

var breakline2 = document.createElement("br");

var btn = document.createElement("button");
btn.innerText = 'Submit';

document.body.appendChild(user_name);
document.body.appendChild(breakline1);
document.body.appendChild(user_cell);
document.body.appendChild(breakline2);
document.body.appendChild(btn);


btn.addEventListener("click", 
    function() {
        alert(user_name.value+" "+user_cell.value);
    }
);


