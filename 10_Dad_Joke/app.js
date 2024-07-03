
// jokeEl: Şaka metninin gösterileceği HTML öğesi.
// jokeBtn: Şaka düğmesi, tıklama olayı için kullanılır.

const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


// Bu satır, jokeBtn düğmesine bir tıklama olayı dinleyicisi ekler. 
// Bu düğmeye tıklandığında generateJoke fonksiyonu çalıştırılır.

jokeBtn.addEventListener("click", generateJoke)

// Bu satır, sayfa yüklendiğinde hemen bir şaka getirmek için generateJoke fonksiyonunu çağırır.

generateJoke()

// async

// async function generateJoke() { ... }: generateJoke fonksiyonu asenkron (async) olarak tanımlanır. 
// Bu, await anahtar kelimesinin kullanılmasına izin verir ve fonksiyonun içinde beklenen işlemleri asenkron olarak gerçekleştirir.

// const config = { headers: { Accept: 'application/json', }, }: fetch isteğine gerekli olan başlıkları içeren bir yapılandırma nesnesi (config) oluşturur. 
// Bu, istemcinin JSON formatında veri kabul ettiğini belirtir.


// const res = await fetch('https://icanhazdadjoke.com', config): fetch fonksiyonu ile https://icanhazdadjoke.com adresine bir GET isteği gönderir. await anahtar kelimesi, isteğin tamamlanmasını bekler ve sonucu res değişkenine atar.

// const data = await res.json(): Gelen yanıtı JSON formatında ayrıştırır ve data değişkenine atar.

// jokeEl.innerHTML = data.joke: JSON verisinden alınan şakayı (data.joke), jokeEl HTML öğesinin içeriği olarak ayarlar ve şakayı sayfada gösterir.

async function generateJoke() {
    const config = {
      headers: {
        Accept: 'application/json',
      },
    }
  
    const res = await fetch('https://icanhazdadjoke.com', config)
  
    const data = await res.json()
  
    jokeEl.innerHTML = data.joke
  }

// then
// function generateJoke(){

//     const config = {
//         headers: {
//             Accept:'application/json',
//         },
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res)=> res.json())
//     .then((data) =>{
//         jokeEl.innerHTML = data.joke
//     })

// }