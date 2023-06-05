var data1={image:"IMG_20210317_173101.jpg",name:"Siddarth",designation:"Software Intern"};
var data2={image:"Karthik.jpg",name:"Manoj",designation:"Architect"};
var isdata1=true;
var displaydata;
var GenerateNewUser=function(){
    if(ifdata1){
        displaydata=data2;
        isdata1=false;
    }
    else{
        displaydata=data1;
        isdata1=true;
    }
}
document.getElementById("myimage").src=displaydata.image;

