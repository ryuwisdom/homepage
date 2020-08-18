// const toggleBtn = document.querySelector(".navbar-toogleBtn");
// const menu = document.querySelector(".navbar-menu");
// const links = document.querySelector(".navbar-links");
// const overLay = document.querySelector(".overlay");

// 클릭했을때 클레스에 menu와 links가 active가 없다면 active를 추가해주고,
// active가 있다면 active를 빼주는 역할
// toggleBtn.addEventListener('click',function(){
//     overLay.classList.toggle('active');
   
// })


let toggle = false
// function openNav() {

//   if(toggle !== false){
//     return
//   }
//     document.getElementById("myNav").style.width = "35%";
//     toggle = true

//   }
  
//   function closeNav() {

//     if(toggle !==true){
//       return
//     }

//     document.getElementById("myNav").style.width = "0%";
//     toggle = false
//   }
  
function toggleNav () {
  if(toggle === false){
    document.getElementById("myNav").style.width = "35%";
    toggle = true
  }else {
    document.getElementById("myNav").style.width = "0%";
    toggle = false

  }
}