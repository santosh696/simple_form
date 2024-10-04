var user_name = document.createElement("input");
user_name.type = 'text';
user_name.placeholder = "Enter You Name";

var user_cell = document.createElement("input");
user_cell.type = 'number';
user_cell.placeholder = "Enter 10 digit number";

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

user_cell.addEventListener('input', function() {
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});

