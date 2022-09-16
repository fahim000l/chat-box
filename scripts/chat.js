
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


document.getElementById('send-btn').addEventListener('click', function () {

    let chatIn = document.getElementById('chat-in');

    let chatText = chatIn.value;

    let chatContainer = document.getElementById('chat-container');
    let chatDiv = document.createElement('div');
    chatDiv.innerHTML = `
        <div class="badge bg-primary text-wrap p-3 w-25 text-start m-3">
            ${chatText}
        </div>
    `;
    chatContainer.appendChild(chatDiv);
    chatIn.value = '';
});