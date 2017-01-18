document.addEventListener("DOMContentLoaded", function () {

    var main = document.getElementById("main");
    (function clickPara() {
        for (var p = 1; p <= 6; p++) {
            var para = document.createElement("p");
            para.innerHTML = "Some text";
            main.appendChild(para);

            para.addEventListener("click", (function (lst,innerPVariable) {
                return function () {
                    lst.innerHTML=innerPVariable ;
                }
            })(para,p));
        }
    })();
    var second = document.getElementById("second");
    second.addEventListener('click', setTimer);
});

function setTimer(){
    for( let i = 1; i<5; i ++){
        setTimeout(function(){
            document.querySelector("ul").innerHTML += '<li>' + i * 1000 +'</li>'}, i * 1000);
        }
}