const panels = document.querySelectorAll(".panel");
// burada verileri çekmek için fonksiyon yazdık
// panels diye bir değişken tanımladım.  panel clası içindeki tüm verileri çek.

panels.forEach(panel => {
    panel.addEventListener("click", () => {
//tanımladığım panels değişkeninin içinde, panel clasının olayını tetikle.
//peki ne nyapmak istiyorsun?
//panels değişkeninin içindeki panel classının içinde dön ve click yap
        removeActive();
        panel.classList.add("active");

        //tıklanıldığında, active classı sil. 
        //ve hangisine tıklıyorsan active classını ekle.
    });
})

function removeActive(){
    panels.forEach(panel => {
        panel.classList.remove("active");
    })
}