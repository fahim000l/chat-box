



// let setName = function () {
//     // alert('Hello World');
//     // document.getElementById('user-name').innerText = 
//     displayName('hello');

// }

// localStorage.setItem('compressedFunc', setName.toString());

// function displayName(name) {

//     console.log(name);
// }

let profile = localStorage.getItem('Profile');
console.log(profile);

document.getElementById('user-name').innerText = profile + "'s";

let msg = {};
document.getElementById('send-btn').addEventListener('click', function () {




    let chatIn = document.getElementById('chat-in');
    let chatText = chatIn.value;

    let chatContainer = document.getElementById('chat-container');
    let chatDiv = document.createElement('div');

    msg['context'] = chatText
    console.log(msg.context);
    localStorage.setItem('Message', JSON.stringify(msg));
    let message = JSON.parse(localStorage.getItem('Message'));
    console.log(message);

    chatDiv.classList.add('container');
    chatDiv.classList.add('text-dark');
    chatDiv.innerHTML = `
        <img src="images/luffy.JFIF" alt="Avatar">
        <p class="text-dark">${message.context}</p>
        <span class="time-right text-dark">11:00</span>
    `;
    chatContainer.appendChild(chatDiv);
    chatIn.value = '';

    // chatDiv.classList.add('container');
    // chatDiv.classList.add('darker');
    // chatDiv.classList.add('text-dark');
    // chatDiv.innerHTML = `
    //     <img src="images/Robin.JFIF" class="right">
    //     <p class="text-dark">${chatText}</p>
    //     <span class="time-left text-dark">11:01</span>
    // `;
    // chatContainer.appendChild(chatDiv);
    // chatIn.value = '';






});

/* <div class="badge bg-primary text-wrap p-3 w-25 text-start m-3">
    ${chatText}
</div> */