let dropArea=document.getElementById("input-area");
let inputArea=document.getElementById("input-img");
let imgView=document.getElementById("img-view");

inputArea.addEventListener("change",uploadImg);

function uploadImg(){
    let imgLink=URL.createObjectURL(inputArea.files[0]);
     imgView.style.backgroundImage=`url(${imgLink})`;
     imgView.textContent="";
     imgView.style.border=0;
};
dropArea.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
dropArea.addEventListener("drop",(e)=>{
    e.preventDefault();
    inputArea.files=e.dataTransfer.files;
    uploadImg();
})