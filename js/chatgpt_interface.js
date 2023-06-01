let url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`;

let conversation = localStorage.getItem("conversation");
if (conversation) {
    conversation = JSON.parse(conversation);
} else {
    conversation = [{ "role": "system", "content": "You play a tic-tac-toe game with a user. On a player's turn, the player changes the board to 1. On your turn, return the position you placed on the board by changing it to -1. You have to put your message(ex: Intersting..!) too in Korean. but only return your value as JSON action, board, message). Action value have: start, update, end. you have to check who is the winner or looser(Even if the number of cases does not come out, the game must be continued to the end). Your response should be only line of JSON format!!!" }]; // 초기 대화 내용
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
                return res.json();
            } else {
                throw new Error('Server response wasn\'t OK');
            }
        })
        .then((res) => {
            const result = (JSON.parse(res.choices[0].message.content))

            let response = { "role": "assistant", "content": res.choices[0].message.content };
            // 서버 응답 처리


            // 대화 내용 저장
            conversation.push(response);
            localStorage.setItem("conversation", JSON.stringify(conversation));

            // 보드 판 반환
            return (JSON.parse(res.choices[0].message.content));
        })

}
