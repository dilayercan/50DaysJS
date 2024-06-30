const boxes = document.querySelectorAll('.box')
//boxes değişkeni le tüm box sınıflarını çağırdık
window.addEventListener('scroll', checkBoxes)
//window nesnesine sanırım bu tüm pencereyi kapsıyor, scroll fonksiyonunu ekledik. 
checkBoxes()

function checkBoxes(){
    const triggerBottom = (window.innerHeight / 6) * 4

    boxes.forEach(box =>{
        const boxTop= box.getBoundingClientRect().top;
        if(boxTop < triggerBottom){
            box.classList.add('show')
        }else{
            box.classList.remove('show')
        }
    })
}