import { playerScore, tieScore, aiScore } from "./app.js";

let typingTimeout; // 타잎 메세지 중지를 위한 타임아웃 변수

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
    clearTimeout(typingTimeout);
    const loadingIndicator = document.querySelector('.loading-indicator');
    const messageBoard = document.querySelector('.message-board');
    typeMessage("통신중...", messageBoard);

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

    let charIndex = 0;

    function type() {
        if (charIndex < message.length) {
            element.textContent = message.substr(0, charIndex + 1);
            charIndex++;
            typingTimeout = setTimeout(type, typingDelay);
        }
    }

    type();
}

window.addEventListener('DOMContentLoaded', function () {
    var crtElement = document.getElementById('crt');
    if (window.innerWidth < 480) {
        crtElement.style.filter = 'none'; // 모바일에서는 필터를 제거
    } else {
        crtElement.style.filter = 'url(#SphereMapTest)'; // 기본 필터 적용
    }
});