import { Read } from "./readTextFile";
import { Checked_symbol } from "./checked";
import { Init_DelButton } from "./addBtn";
import { NewElement } from "./create";
import { Close } from "./delet";

window.onload = function () {
    const btn = new Init_DelButton();
    const checkSymbol = new Checked_symbol();
    const element = new NewElement();
    const close = new Close();
    const readFile = new Read();

    readFile.readTextFile("../data.json", function (text:string) {
        let json = JSON.parse(text);
        for (let i = 0; i < json.length; i++) {
            let li = document.createElement("li");
            if (json[i].check == 1) {
                li.className = "element checked";
            } else {
                li.className = "element";
            }
            let t = document.createTextNode(json[i].info);
            li.appendChild(t);
            document.getElementById("myUL").appendChild(li);
        }

        checkSymbol.checked();
        btn.add();
        document.getElementById("addbtn").onclick = function () {
            element.create();
        };

        let x = document.getElementById("myUL");
        x.addEventListener('click', function (ev) {
        let target = (<HTMLTextAreaElement>ev.target);
            if (target.tagName === 'SPAN' && target.className === 'close') {
                close.delet(target);
            }
        }, false);
    });
}