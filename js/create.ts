export class NewElement{
    public create() {
        let li = document.createElement("li");
        li.className = "element";
        let inputValue = (<HTMLInputElement>document.getElementById("myInput")).value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
        }
        (<HTMLInputElement>document.getElementById("myInput")).value = "";

        // Create a "close" button and append it to the item
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
    }
}