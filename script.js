const textInput = document.getElementById('textInput');
const logOutput = document.getElementById('logs')
const time = new Date()

function addlogs(input, type) {
        const newLog = document.createElement('pre');
        newLog.textContent = "<" + time + ">" + " " + input
        logOutput.appendChild(newLog);
        if (type = "warning") {
            newLog.style.color = "#c96b65";
        } else if (type = "normal") {
            newLog.style.color = "#8295a8";
        } else {
            newLog.style.color = "#d2d0c8";
        }
}


const commands = {
    "/help": function() {
        addlogs(
            `         _            _              _                 
        /\ \        /\ \           /\ \         _      
       /  \ \      /  \ \         /  \ \       /\ \    
      / /\ \ \    / /\ \ \       / /\ \ \   ___\ \_\   
     / / /\ \_\  / / /\ \ \     / / /\ \ \ /___/\/_/_  
    / / /_/ / / / / /  \ \_\   / / /  \ \_\\__ \/___/\ 
   / / /__\/ / / / /    \/_/  / / /    \/_/  /\/____\/ 
  / / /_____/ / / /          / / /           \ \_\     
 / / /\ \ \  / / /________  / / /________     \/_/     
/ / /  \ \ \/ / /_________\/ / /_________\             
\/_/    \_\/\/____________/\/____________/     
current commands:
/help - you should already know this one, displays all existing commands
`
        )
    }
}

textInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        if (commands[commands]) {
            commands[commands]();
        } else {
            addlogs("Unknown command: " + textInput.textContent)
        }
        }
});         
