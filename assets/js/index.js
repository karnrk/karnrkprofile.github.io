
const sidebar = document.querySelector('#sidebar');
const main = document.querySelector('#main');
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

/* ================= Popup ================ */

// const openModalButtons = document.querySelectorAll('.projects-wrapper .card'),
//     modal = document.querySelectorAll('.projects-wrapper .popup-wrapper'),
//     closeModalButtons = document.querySelectorAll('.close-modal'),
//     innerInfo = document.querySelectorAll('.projects-wrapper .popup-wrapper .popup-inner');

// innerInfo.forEach(function(event) { 
//     event.addEventListener('click', function (e) {
//         e.stopImmediatePropagation();
//     });
// })
// openModalButtons.forEach(openBtn => {
//   openBtn.addEventListener('click', function(){
//     this.classList.toggle('open');
//   })
// });

/*============= wow animation ================*/
// var wow = new WOW(
//   {
//     boxClass:     'wow',      // animated element css class (default is wow)
//     animateClass: 'animated', // animation css class (default is animated)
//     offset:       0,          // distance to the element when triggering the animation (default is 0)
//     mobile:       true,       // trigger animations on mobile devices (default is true)
//     live:         true,       // act on asynchronously loaded content (default is true)
//     callback:     function(box) {
//       // the callback is fired every time an animation is started
//       // the argument that is passed in is the DOM node being animated
//     },
//     scrollContainer: null,    // optional scroll container selector, otherwise use window,
//     resetAnimation: true,     // reset animation on end (default is true)
//   }
// );
// wow.init();
