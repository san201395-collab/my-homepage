// src/main.ts
import './style.css' // 만약 별도의 style.css 파일이 없다면 이 줄은 지우셔도 됩니다.

const acornBtn = document.querySelector<HTMLButtonElement>('#acornBtn');
const message = document.querySelector<HTMLParagraphElement>('#message');

let clickCount = 0;

if (acornBtn && message) {
  acornBtn.addEventListener('click', () => {
    clickCount++;
    message.textContent = `볼이 빵빵해졌어요! 고마워요! 🐿️💨\n누른 횟수: ${clickCount}번`;
    message.style.color = "#d84315";
    message.style.fontWeight = "bold";
    message.style.marginTop = "15px";
    message.style.whiteSpace = "pre-line";
  });
}