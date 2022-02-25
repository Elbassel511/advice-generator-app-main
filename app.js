let adviceId = document.querySelector(".advice-id");
let adviseText = document.querySelector(".advise");
const url = "https://api.adviceslip.com/advice";
const btn =document.querySelector(".btn");

// fetch data function and updatin DOM
let gettingAdvice = async (url)=>{
        console.log(url)
        const answer = await fetch(url);
        try {
            let result = await answer.json();
            adviceId.innerHTML = `Advice #${result.slip.id}`
            adviseText.innerHTML = result.slip.advice
        } catch (error) {
          console.log("error:" + error);
        }
}
// Running fn on site load
window.onload=async()=> await gettingAdvice(url);
// btn functionality
btn.addEventListener('click',()=>gettingAdvice(url));