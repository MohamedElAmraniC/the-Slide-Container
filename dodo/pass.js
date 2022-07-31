const link = document.querySelector('#link')
const card = document.querySelector('.card')

alert('WELCOME TO YOU OFFICE ')
alert('click the button oussama and resize the page')

function Showimg(){
    link.addEventListener('click' , ()=>{
        alert('FACK YOU OUSSAMA')
        card.setAttribute('id' , 'dodo')
         setTimeout(()=>{
        card.setAttribute('id' , '')
        } , 3000)
    })
    
}

setInterval(Showimg, 1000)
