const button1=document.getElementById('buttonSatu')
const button2=document.getElementById('buttonDua')
const button3=document.getElementById('buttonTiga')
const button4=document.getElementById('buttonEmpat')
const button5=document.getElementById('buttonLima')
const button6=document.getElementById('buttonEnam')
const button7=document.getElementById('buttonTujuh')
const button8=document.getElementById('buttonDelapan')
const button9=document.getElementById('buttonSembilan')
const button10=document.getElementById('buttonSepuluh')




//tagname P document
const P=document.getElementsByTagName('p')

//container scope
const container=document.getElementById('container')






button1.addEventListener('click',function(){

    for (i=0;i<P.length;i++){
        P[i].style.backgroundColor='MediumSpringGreen'
    }

})


button2.addEventListener('click',function(){

    button2.style.backgroundColor='orange'
    button2.style.color='white'

})


button3.addEventListener('click',function(){

    for (i=0;i<P.length;i++){
        P[i].style.fontFamily = 'Brush Script MT'
        P[i].style.color = 'Violet'
    }

})


button4.addEventListener('click',function(){

    for (i=0;i<P.length;i++){
        P[i].style.fontSize='40px'
    }

})


button5.addEventListener('click',function(){

    container.style.backgroundColor='LightPink'

})




button6.addEventListener('click',function(){
    //tangkap parent
const sectionA=document.getElementById('a')
//tangkap element yg ingin diganti
const pLama=sectionA.querySelector('p')
    //create element dan text baru
    const h2Baru=document.createElement('h2')
    const texth2Baru=document.createTextNode('WELCOME to DOJOBOX HAVE a Look around')
    h2Baru.appendChild(texth2Baru)
    sectionA.replaceChild(h2Baru,pLama)


    

})


button7.addEventListener('click',function(){
    const ul=document.querySelector('section#b ul')
    const li=document.querySelector('li')
    const newMentor=document.createElement('li')
    const TextnewItem=document.createTextNode('Mentor Baru')
    newMentor.appendChild(TextnewItem)
    ul.appendChild(newMentor)
    ul.removeChild(li)

})



button8.addEventListener('click',function(){

    const judul=document.getElementById('judul')
    judul.innerHTML='Post Test'

})


button9.addEventListener('click',function(){
    const a=document.getElementsByTagName('a')[0]
    const sectionA=document.getElementById('a')
    sectionA.removeChild(a)


})


button10.addEventListener('click',function(){
    const li=document.querySelector('section#c ul li:nth-child(10)')
    const sectionC=document.getElementById('c')
    const pRemove=sectionC.getElementsByTagName('p')[9]
    
    const aBaru=document.createElement('a')
    const TextaBaru=document.createTextNode('Berikut Link Github saya ')
    aBaru.appendChild(TextaBaru)
    aBaru.setAttribute('href','https://github.com/roynaldosihotang/javascript-challenge')
    li.replaceChild(aBaru,pRemove)
    

})



