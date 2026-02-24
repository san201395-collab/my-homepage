import './style.css'

const acornBtn = document.querySelector<HTMLButtonElement>('#acornBtn');
const message = document.querySelector<HTMLParagraphElement>('#message');

// ⭐ 1. 브라우저 저장소에서 이전 기록을 불러옵니다. 기록이 없으면 0으로 시작합니다.
let clickCount = Number(localStorage.getItem('acornClickCount')) || 0;

if (acornBtn && message) {
  
  // (선택) 처음에 접속했을 때 이전 기록이 있으면 화면에 띄워줍니다.
  if (clickCount > 0) {
    message.textContent = `이전까지 누른 횟수: ${clickCount}번 🐿️`;
    message.style.color = "#d84315";
    message.style.fontWeight = "bold";
    message.style.marginTop = "15px";
    message.style.whiteSpace = "pre-line";
  }

  acornBtn.addEventListener('click', () => {
    clickCount++;
    
    // ⭐ 2. 클릭할 때마다 브라우저 저장소에 현재 숫자를 저장합니다.
    localStorage.setItem('acornClickCount', clickCount.toString());

    message.textContent = `볼이 빵빵해졌어요! 고마워요! 🐿️💨\n누른 횟수: ${clickCount}번`;
    message.style.color = "#d84315";
    message.style.fontWeight = "bold";
    message.style.marginTop = "15px";
    message.style.whiteSpace = "pre-line";
  });
}