const p=document.getElementById('body')
function searchWord(){
    let input=document.getElementById("input").value;
    if(input!=''){
        let regExp=new RegExp(input,"gi");
        p.innerHTML=(p.textContent).replace(regExp,"<mark>$&</mark>")

    }

}