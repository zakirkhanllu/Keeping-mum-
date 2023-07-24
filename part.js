 const form = document.getElementById('form');
 const usernmae = document.getElementById('usernmae');
  
 form.addEventListener('submit', (e) => {
   
let massages = []
if(usernmae.value === '' || usernmae.value == null){
  massages.push('usernmae is requried')
}
if(name.length <= 4){
  massages.push('name is too short')
  errorElement.innerText = massages.join(', ')
  e.preventDefault();
}
 
 })


  
  