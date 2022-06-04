const container = document.querySelector('.container');
const buttons = document.querySelectorAll('.click');
const passwords = document.querySelectorAll('.password');
const swipes = document.querySelectorAll('.swipe');

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        passwords.forEach((password)=>{
            if(password.type === 'password'){
                password.type = 'text'
            }else{
                password.type = 'password'
            }
        })
    })
})

swipes.forEach((swipe)=>{
    swipe.addEventListener('click', ()=>{
        if(container.classList.contains('active')){
            container.classList.toggle('active')
        }else{
            container.classList.add('active')
        }
      
    })
})