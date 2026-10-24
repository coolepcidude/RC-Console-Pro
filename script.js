const textInput = document.getElementById('textInput');
const logoutput = document.getElementById('logs')

textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        console.log(textInput);
        const newLog = document.createElement('pre');
        newLog.textContent = textInput.innerText
        document.logs.appendChild(newLog)
    }
});