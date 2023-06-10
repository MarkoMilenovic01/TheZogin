const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.hamburger-menu');
    
    document.querySelector('.hamburger-menu').classList.add('hamburger-menu-active');
 


    burger.addEventListener('click', () => {
        
        nav.classList.toggle('hamburger-menu-active');
    });


}   


// const CounterFunction = () =>{
//     const counters = document.querySelectorAll('.counter');
//     counters.forEach((counter,index)=>{
//         const updateCounter = () =>{
//             const limit = parseInt(counter.getAttribute('limit'));
//             const count = parseInt(counter.innerText); // onaj broj koji se trenutno nalazi u counter.innerText jer ce svakako rekurzivno pozove zbog setTimeouta
//             if(count < limit){ // razlicita brzina za razlicite indekse
//                 switch(index){
//                     case 0:
//                     counter.innerText = count + 50;
//                     setTimeout(updateCounter,10);
//                     break;
                   
//                     case 1:
//                     counter.innerText = count + 1;
//                     setTimeout(updateCounter,5);
//                     break;

//                     case 2:
//                     counter.innerText = count + 1;
//                     setTimeout(updateCounter,100);
//                     break;
//                     case 3:
//                     counter.innerText = count + 10;
//                     setTimeout(updateCounter,10);
//                     break;
//                 }
//             }
           
//         }
//         updateCounter();
//     })
// }


const CounterFunction = () => {
    const counters = document.querySelectorAll('.counter');
  
    const updateCounter = (counter, limit, count, index) => {
      if (count < limit) {
        switch (index) {
          case 0:
            counter.innerText = count + 50;
            setTimeout(() => updateCounter(counter, limit, count + 50, index), 10);
            break;
  
          case 1:
            counter.innerText = count + 1;
            setTimeout(() => updateCounter(counter, limit, count + 1, index), 5);
            break;
  
          case 2:
            counter.innerText = count + 1;
            setTimeout(() => updateCounter(counter, limit, count + 1, index), 100);
            break;
  
          case 3:
            counter.innerText = count + 10;
            setTimeout(() => updateCounter(counter, limit, count + 10, index), 10);
            break;
        }
      }
    };
  
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const limit = parseInt(counter.getAttribute('limit'));
          const count = parseInt(counter.innerText);
          const index = Array.from(counters).indexOf(counter);
          updateCounter(counter, limit, count, index);
        }
      });
    };
  
    //  The Intersection Observer API allows you to asynchronously observe changes in the intersection of a target element with an ancestor element or with the viewport.
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust this threshold value as needed
    });
  
    counters.forEach((counter) => {
      observer.observe(counter);
    });
  };
  
  


const app = () => {
    navSlide();
    CounterFunction();

}

app();