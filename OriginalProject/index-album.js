const display = function () {

            let storedName = localStorage.getItem("name")
            let user = document.getElementById("username")
            const inhalt = `
         <span>${storedName}</span>
             `

            user.innerHTML += inhalt

            
        }
        

 
// function store() {

//     var name = document.getElementById('name');
//     localStorage.setItem('name', name.value);
  
// }

window.onload = function () {
            
            
            display()
        }