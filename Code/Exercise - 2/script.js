let choices = ["S", "W", "G"]
let com_score = 0;
let user_score = 0;

const win_or_loss = (user, com) => {
    if (user == "G" && com == "S") {
        user_score++
        return "User Win";
    }

    else if (user == "S" && com == "G") {
        com_score++
        return "Com Win";

    }

    else if (user == "W" && com == "G") {
        user_score++
        return "User win"
    }

    else if (user == "G" && com == "W") {
        com_score++
        return "Com win"
    }
    else if (user == "S" && com == "W") {
        user_score++
        return "User win"
    }
    else if (user == "W" && com == "S") {
        com_score++
        return "Com win"
    }
    else if (user == com) {
        return "Draw"
    }
}

for(let i =0; i<3; i++){
    let num = Math.random()
    let com_choice = choices[Math.floor(num * choices.length)];
    let user_choice = prompt("S, W or G?")
                        alert(`User:${user_choice}\nCom:${com_choice}\n${win_or_loss(user_choice, com_choice)}`)

}


alert(`Com's Score: ${com_score}\nUser's Score: ${user_score}\nOverall, ${user_score>com_score?"You Win":`${user_score==com_score?"Draw":"Com Win"}`}`)