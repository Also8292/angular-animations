document.addEventListener("DOMContentLoaded", function() {

    var btnMenu = document.querySelector('#btn-menu');

    var i = 0;

    btnMenu.onclick = function() {

        if(i%2 == 0) {
            document.querySelector('.page-container').classList.add('move-container1');
            document.querySelector('.page-container').classList.remove('move-container2');
        }
        else {
            document.querySelector('.page-container').classList.remove('move-container1');
            document.querySelector('.page-container').classList.add('move-container2');     
        } 

        i++;
    }
});