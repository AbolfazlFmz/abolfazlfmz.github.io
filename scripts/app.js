const navBtn=document.querySelector(".nav-ham"),navMenu=document.querySelector(".nav-mobile"),navMobileItems=document.querySelectorAll(".nav-mobile__item"),navMobileLinks=document.querySelectorAll(".nav-mobile__links");let navOpen=!1;function openNav(){navBtn.classList.add("nav-ham--active"),navMenu.classList.add("nav-mobile--active"),document.body.style.overflow="hidden",navOpen=!0}function closeNav(){navBtn.classList.remove("nav-ham--active"),navMenu.classList.remove("nav-mobile--active"),document.body.style.overflow="",navOpen=!1}navBtn.addEventListener("click",function(){navOpen?closeNav():openNav()}),navMobileItems.forEach(function(e){e.addEventListener("click",function(){closeNav()})}),navMobileLinks.forEach(function(e){e.addEventListener("click",function(){closeNav()})}),document.body.addEventListener("click",function(e){let t=navBtn.contains(e.target)||navMenu.contains(e.target);t||closeNav()}),document.querySelectorAll(".locations__like-wrapper").forEach(function(e){let t=e.querySelector(".locations__like"),n=t.classList.contains("locations__like--active");e.addEventListener("click",function(){n?(t.classList.remove("locations__like--active"),n=!1):(t.classList.add("locations__like--active"),n=!0)})});const button=document.querySelector(".locations__button"),rest768List=document.querySelectorAll(".rest768"),rest992List=document.querySelectorAll(".rest992");let clickCount=0;function handleButtonClick(){clickCount++,window.innerWidth>=768&&1===clickCount?(rest992List.forEach(e=>{e.style.display="block",setTimeout(()=>{e.style.opacity="1"},50)}),button.removeEventListener("click",handleButtonClick)):1===clickCount?rest768List.forEach(e=>{e.style.display="block",setTimeout(()=>{e.style.opacity="1"},50)}):2===clickCount&&(rest992List.forEach(e=>{e.style.display="block",setTimeout(()=>{e.style.opacity="1"},50)}),button.removeEventListener("click",handleButtonClick))}button.addEventListener("click",handleButtonClick);