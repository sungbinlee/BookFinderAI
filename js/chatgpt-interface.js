import * as convo from "./conversation.js";

const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let conversation = localStorage.getItem("conversation");
if (conversation) {
    conversation = JSON.parse(conversation);
} else {
    conversation = convo.conversation; // 초기 대화 내용
    console.log(conversation);
}
// [0,0,0],[0,0,0],[0,0,0]
// 대화 내용 추가


export function sendToAI(data) {
    // console.log(data);

    let newMessage = data;
    conversation.push(newMessage);
    console.log(newMessage)
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
                console.log(res);
                return res.json();
            } else {
                throw new Error('Server response wasn\'t OK');
            }
        })
        .then((res) => {
            console.log(res);
            let response = { "role": "assistant", "content": res.choices[0].message.content };
            // 서버 응답 처리


            // 대화 내용 저장
            conversation.push(response);
            localStorage.setItem("conversation", JSON.stringify(conversation));
            // 보드 판 반환
            return (JSON.parse(res.choices[0].message.content));
        })

}