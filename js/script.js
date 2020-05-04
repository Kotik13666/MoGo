document.getElementById('burger').onclick = function(){
    addMenu();
};

function addMenu(){
    document.getElementById('menu').classList.toggle('show');
};

/* add slider */

setInterval(function(){
    if(document.querySelectorAll('.owl-dot')[0].className === "owl-dot active"){
        document.getElementById("cont1").classList.remove('bgc2');
        document.getElementById("cont1").classList.add('bgc1');
    } else if(document.querySelectorAll('.owl-dot')[2].className === "owl-dot active"){
        document.getElementById("cont1").classList.remove('bgc2');
        document.getElementById("cont1").classList.remove('bgc4');
        document.getElementById("cont1").classList.add('bgc3');
    } else if(document.querySelectorAll('.owl-dot')[3].className === "owl-dot active"){
        document.getElementById("cont1").classList.remove('bgc3');
        document.getElementById("cont1").classList.add('bgc4');
    } else if(document.querySelectorAll('.owl-dot')[1].className === "owl-dot active"){
        document.getElementById("cont1").classList.remove('bgc1');
        document.getElementById("cont1").classList.remove('bgc3');
        document.getElementById("cont1").classList.add('bgc2');
    }
},10);
