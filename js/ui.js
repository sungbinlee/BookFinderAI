import { playerScore, tieScore, aiScore } from "./app.js";

// 페이지 로드가 완료되면 프리로더를 숨깁니다.
window.addEventListener('load', function () {
    var preloader = document.querySelector('.preloader-wrapper');
    preloader.style.display = 'none';
});

/**
 * 메시지를 화면에 표시합니다.
 * @param {string} message - 표시할 메시지
 */
export function displayMessage(message) {
    const messageBoard = document.querySelector('.message-board');
    typeMessage(message, messageBoard);
}

/**
 * 로딩 인디케이터를 표시합니다.
 */
export function showLoadingIndicator() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    loadingIndicator.style.display = 'flex';
}

/**
 * 로딩 인디케이터를 숨깁니다.
 */
export function hideLoadingIndicator() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    loadingIndicator.style.display = 'none';
}

/**
* 점수판을 업데이트합니다.
*/
export function updateScoreboard() {
    const playerScoreElement = document.getElementById('player-score-value');
    const tieScoreElement = document.getElementById('tie-score-value');
    const aiScoreElement = document.getElementById('ai-score-value');

    playerScoreElement.innerText = playerScore;
    tieScoreElement.innerText = tieScore;
    aiScoreElement.innerText = aiScore;
}

/**
* 문자 타이핑하는 함수
*/
function typeMessage(message, element) {
    const typingDelay = 100; // 각 글자가 출력되는 딜레이
    const blinkDelay = 500; // 깜빡임 간격

    let charIndex = 0;

    function type() {
        if (charIndex < message.length) {
            element.textContent = message.substr(0, charIndex + 1);
            charIndex++;
            setTimeout(type, typingDelay);
        }
    }

    type();
}
