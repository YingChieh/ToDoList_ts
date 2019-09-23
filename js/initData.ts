import { readTextFile } from "./readTextFile";
import { checked } from "./checked";
import { addBtn } from "./addBtn";
import { newElement } from "./create";
import { delet } from "./delet";

window.onload = function () {

   readTextFile("../data.json", function (text:string) {
        var json = JSON.parse(text);
        for (let i = 0; i < json.length; i++) {
            var li = document.createElement("li");
            if (json[i].check == 1) {
                li.className = "element checked";
            } else {
                li.className = "element";
            }
            var t = document.createTextNode(json[i].info);
            li.appendChild(t);
            document.getElementById("myUL").appendChild(li);
        }

        checked();
        addBtn();
        document.getElementById("addbtn").onclick = function () {
            newElement();
        };

        var x = document.getElementById("myUL");
        x.addEventListener('click', function (ev) {
        let target = (<HTMLTextAreaElement>ev.target);
            if (target.tagName === 'SPAN' && target.className === 'close') {
                delet(target);
            }
        }, false);
    });
}