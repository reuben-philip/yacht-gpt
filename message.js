document.addEventListener("DOMContentLoaded", function(){
    const input = document.getElementById("move");
    const button = document.getElementById("button");
    const chat = document.getElementById("chatbox");


    function append(messagetext, sender){
        const message1 = document.createElement("div");
        message1.textContent = messagetext;
        message1.classList.add("message1");
        message1.classList.add(sender);
        chatbox.appendChild(message1);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function send(){
        const text = input.value.trim();

        if(text !== ""){
            append(text, "user")
            input.value = "";
            setTimeout(() => {
                append("Testing","Chatgpt");
            },500);
        }
    }

    button.addEventListener("click", send);

    input.addEventListener("keydown", function(event){
        if (event.key === "Enter" && !event.shiftKey){
            event.preventDefault();
            send();
        }
    });
});