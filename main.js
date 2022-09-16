import './style.scss';
import * as bootstrap from 'bootstrap';

let showSidebar = document.getElementById('show-sidebar');
let sidebar = document.getElementById('sidebar');
showSidebar.addEventListener('click',function(){
    // console.log("hello");
    sidebar.classList.toggle("show");
})