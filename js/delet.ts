export class Close{
    public delet(elem: any){    
        // Click on a close button to hide the current list item
        let div = elem.parentElement;
        div.remove();
    }
}