let msg_list = ["Hercules arruma a mesa", "Hercules seca a louça", "Hercules limpa a pia"]

function mensagem(){
    let msg_escolhida = Math.floor(Math.random() * msg_list.length);
    console.log(msg_list [msg_escolhida]);
    // return msg_list [msg_escolhida]
    document.getElementById("ler_msg").innerHTML = msg_list[msg_escolhida];
}
