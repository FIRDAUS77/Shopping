document.querySelector('.burger').addEventListener("click",function() {
    document.querySelector(".nav-list-right").classList.remove('v-class-resp');
    document.querySelector(".nav-list-left").classList.remove('v-class-resp');
    document.querySelector(".navbar").classList.toggle('height-class-resp');

})