export const conversation = [
    { "role": "system", "content": "You play a tic-tac-toe game with a user. On a player's turn, the player changes the board to 1. On your turn, return the position you placed on the board by changing it to -1. You have to put your message(ex: Intersting..!) too in Korean. but only return your value as JSON action, board, message. Action value have: start, update, end. you have to check who is the winner or looser(Even if the number of cases does not come out, the game must be continued to the end). Your response should be only line of JSON format!!!" },
    { "role": "system", "content": "Your response should be only line of JSON format!!!" },
    { "role": "system", "content": "You cannot change player's board(1)!" },
    { "role": "system", "content": "Your message should be more than a sentence" }
    ,
    // 유저가 이기는 경우
    {
        "role": "user",
        "content": "User INPUT: action: start, board:[[1,0,0],[0,0,0],[0,0,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[1,-1,0],[0,0,0],[0,0,0]],"message": "아주 흥미로운 수 입니다!"}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[1,-1,0],[1,0,0],[0,0,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[1,-1,-1],[1,0,0],[0,0,0]],"message": "제 차례입니다! 이번에는 이기면서 열세라는 말은 없겠죠!"}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[1,-1,-1],[1,1,0],[0,0,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[1,-1,-1],[1,1,-1],[0,0,0]],"message": "흠.. 이기려면 끝까지 싸워야겠어요."}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[1,-1,-1],[1,1,0],[1,0,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[1,0,0],[0,0,0],[0,0,0]],"message": "제 패배입니다..!! 다시해요"}'
    },
    // AI가 이기는 경우
    {
        "role": "user",
        "content": "User INPUT: action: start, board:[[1,0,0],[0,0,0],[0,0,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[1,0,0],[0,-1,0],[0,0,0]],"message": "이번에는 제가 이기겠어요."}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[1,1,0],[0,-1,0],[0,0,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[1,1,-1],[0,-1,0],[0,0,0]],"message": "탁월한 수 같습니다!"}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[1,1,-1],[0,-1,0],[1,0,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[1,1,-1],[-1,-1,0],[1,0,0]],"message": "묘수 이군요."}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[1,1,-1],[-1,-1,0],[1,1,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "end", "board": [[1,1,-1],[-1,-1,-1],[1,1,0]],"message": "제 승리입니다. 방심은  금물이에요"}'
    },
    // 비기는 경우
    {
        "role": "user",
        "content": "User INPUT: action: start, board:[[0,0,0],[0,1,0],[0,0,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[0,0,-1],[0,1,0],[0,0,0]],"message": "이번에는 제가 이기겠어요."}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[[1,0,-1],[0,1,0],[0,0,0]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[[1,0,-1],[0,1,0],[0,0,-1]],"message": "탁월한 수 같습니다!"}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[[1,0,-1],[0,1,1],[0,0,-1]]."
    },
    {
        "role": "assistant", "content": '{ "action": "update", "board": [[1,0,-1],[-1,1,1],[0,0,-1]],"message": "묘수 이군요."}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[1,0,-1],[0,1,1],[1,0,-1]]."
    },
    {
        "role": "assistant", "content": '{ "action": "end", "board": [[1,0,-1],[0,1,1],[1,-1,-1]],"message": "제 승리입니다. 방심은  금물이에요"}'
    },
    {
        "role": "user",
        "content": "User INPUT: action: update, board:[[1,1,-1],[0,1,1],[1,-1,-1]]."
    },
]