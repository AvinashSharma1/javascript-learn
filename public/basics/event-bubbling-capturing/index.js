/**
 * Event Bubbling & Capturing
 * In Event Listner if we don't pass third argument it will take default value is false, which is Event Bubbling
 * and If we pass third agrument TRUE in Event Listner, which behave Event capturing or trickling down
 * Event Propogation
 */


/* document.querySelector('#grandParent')
  .addEventListener('click',()=>{
    console.log("Grand Parent Clicked!");
  });

  document.querySelector('#parent')
  .addEventListener('click',()=>{
    console.log("Parent Clicked!");
  });

  document.querySelector('#child')
  .addEventListener('click',()=>{
    console.log("Child Clicked!");
  }); */

/**
 * Event Bubbling
 * 
 */

/* document.querySelector('#grandParent')
  .addEventListener('click',()=>{
    console.log("Grand Parent Clicked!");
  },false);

  document.querySelector('#parent')
  .addEventListener('click',()=>{
    console.log("Parent Clicked!");
  },false);

  document.querySelector('#child')
  .addEventListener('click',()=>{
    console.log("Child Clicked!");
  },false);

 */

  /**
 * Event Capturing or trickling down
 */

  /* document.querySelector('#grandParent')
  .addEventListener('click',()=>{
    console.log("Grand Parent Clicked!");
  },true);

  document.querySelector('#parent')
  .addEventListener('click',()=>{
    console.log("Parent Clicked!");
  },true);

  document.querySelector('#child')
  .addEventListener('click',()=>{
    console.log("Child Clicked!");
  },true); */

  /**
   * StopPropogation
   * Default take trickling down and than bubble out
   * 
   */
 /*  document.querySelector('#grandParent')
  .addEventListener('click',(e)=>{
    console.log("Grand Parent Clicked!");
    e.stopPropagation();
  },true);

  document.querySelector('#parent')
  .addEventListener('click',(e)=>{
    console.log("Parent Clicked!");
  },true);

  document.querySelector('#child')
  .addEventListener('click',(e)=>{
    console.log("Child Clicked!");
  },true);
 */

 /*  document.querySelector('#grandParent')
  .addEventListener('click',(e)=>{
    console.log("Grand Parent Clicked!");
    e.stopPropagation();
    
  },false);

  document.querySelector('#parent')
  .addEventListener('click',(e)=>{
    console.log("Parent Clicked!");
    e.stopPropagation();
  },false);

  document.querySelector('#child')
  .addEventListener('click',(e)=>{
    console.log("Child Clicked!");
    e.stopPropagation();
  },false); */