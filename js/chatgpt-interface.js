import * as convo from "./conversation.js";

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

// 대화 내용을 로컬 스토리지에서 불러오거나 초기화합니다.
let conversation = localStorage.getItem("conversation");
conversation = conversation ? JSON.parse(conversation) : convo.conversation;

/**
 * 대화 내용을 AI로 전송하고 응답을 받아옵니다.
 * @param {object} data - 사용자의 입력 데이터
 * @returns {Promise} - AI 응답을 담은 프로미스 객체
 */
export function sendToAI(data) {
    // console.log(data);

    let newMessage = data;
    conversation = [...conversation, newMessage];
    // console.log(newMessage)
    // 서버와 대화 진행
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(conversation),
        redirect: "follow",
    })
        .then((res) => {
            if (res.ok) {
                // console.log(res);
                return res.json();
            } else {
                throw new Error('Server response wasn\'t OK');
            }
        })
        .then((res) => {
            // console.log(res);
            let response = { "role": "assistant", "content": res.choices[0].message.content };
            // 대화 내용 저장
            conversation = [...conversation, response];
            localStorage.setItem("conversation", JSON.stringify(conversation));
            // 보드 판 반환
            return (JSON.parse(res.choices[0].message.content));
        })

}