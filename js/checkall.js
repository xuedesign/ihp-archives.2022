document.getElementById("mytable").addEventListener("change",(e)=>{
    if(!e.target.checked){
      document.querySelector("input[type=checkbox][name=selectItem]").checked=false;
    }else{
      const checkBoxCount = document.querySelectorAll("input[type=checkbox]:not([name=selectItem])").length;
      
      const selectedCheckBoxCount = document.querySelectorAll("input[type=checkbox]:checked:not([name=selectItem])").length;
      console.log(selectedCheckBoxCount)
      if(checkBoxCount===selectedCheckBoxCount){
        document.querySelector("input[type=checkbox][name=selectItem]").checked=true;
      }
    }
 })
 
 document.querySelector("input[name=selectItem]").addEventListener("change",
 (e)=>{
     const allCheckBoxElements = document.querySelectorAll("input[type=checkbox]:not([name=selectItem])");
     allCheckBoxElements.forEach(el =>{
       
       if(e.target.checked){
         el.checked = true;
       }else {
         el.checked = false;
       }
     })
 });