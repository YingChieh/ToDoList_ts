export function checked() {
    // Add a "checked" symbol when clicking on a list item
    var todolist = document.getElementById("myUL");
    todolist.addEventListener('click', function (ev) {

        let target = (<HTMLTextAreaElement>ev.target);

        if (target.tagName === 'LI') {
            target.classList.toggle('checked');
        }
    }, false);
}