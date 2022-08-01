    
var owl = `
$('.owl-carousel').owlCarousel({
    // loop: true,
    // margin: 30,
    dots: true,
    nav: false,
    // autoplay:true,
    // autoplayTimeout: 7000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1.5
        },
        768: {
            items: 2.5
        },
        992: {
            items: 3.
        }
    }
})`;

// function show(val) {
// 
//   let list = ['#offer-img-1', '#offer-img-2', '#offer-img-3', '#offer-img-4'];
//   let listt = ['#user-frd-1', '#user-frd-2', '#user-frd-3', '#user-frd-4'];
//   $(list[val]).collapse('show');
// 
//   for (let i = 0; i < list.length; i++) {
//     // $(list[val]).collapse('hide');
//     $(listt[val]).collapse('hide');
//     if (val == i) {
//       $(list[val]).collapse('show');
//       $(listt[val]).collapse('show');
// 
//     }
//   }
// }
// // show(0);
// let interval = 5000;
// let j = 1;
// 
// setInterval(() => {
//   show(j);
//   j++;
//   (j > 3) ? j = 0 : "";
// }, interval);
