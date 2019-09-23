export class Init_DelButton{
    public add(){
        // Create a "close" button and append it to each list item
        let myNodelist=document.getElementsByTagName("LI");
        for(let i = 0; i< myNodelist.length;i++){
            let span:any=document.createElement("SPAN");
            let txt:any=document.createTextNode("\u00D7");
            span.className="close";
            span.appendChild(txt);
            myNodelist[i].appendChild(span);
        }
    }
}