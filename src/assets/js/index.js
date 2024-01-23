function myFunction() {
    let x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  //Modal formulaire d'ajout

  const btn = document.getElementById("btn1")
  const modal = document.getElementById('modal')


  console.log('while',btn)
  function showModale(){

    let btn = document.querySelector('.btn')
    let modal = document.querySelector('.modal')
  
    btn.addEventListener('clic',function(){
        modal.classList.remove('hidden')
    })
  }
 