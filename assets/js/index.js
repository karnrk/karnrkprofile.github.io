
const sidebar = document.querySelector('#sidebar');
const main = document.querySelector('.body-wrapper-inner');
const menuLink = document.querySelectorAll('#menu ul a');

menuLink.forEach(function(event) { 
    event.addEventListener('click', function () {
        if (sidebar!==null) {
            sidebar.classList.remove('inactive');
            main.classList.remove('inactive');
        }
    });
})

document.querySelector('.toggle').addEventListener('click', function () {
    if (sidebar!==null) {
        sidebar.classList.toggle('inactive');
        main.classList.toggle('inactive');
    } else {
        alert("element not thair");
    }
});
