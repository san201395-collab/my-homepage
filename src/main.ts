import './style.css'

const acornBtn = document.querySelector<HTMLButtonElement>('#acornBtn');
const message = document.querySelector<HTMLParagraphElement>('#message');

if (acornBtn && message) {
  acornBtn.addEventListener('click', () => {
    message.innerHTML = "볼이 빵빵해졌어요! 고마워요! 🐿️💨";
    message.style.color = "#d84315";
    message.style.fontWeight = "bold";
    message.style.marginTop = "15px";
  });
}