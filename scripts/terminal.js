const outputElement = document.getElementById("output");
const inputElement = document.getElementById("command-input");

// Command handlers
const commandHandlers = {
  contact: function () {
      console.log('apolisskaya@gmail.com');
      console.log('Phone: 646-541-7407');
  },
  // Add more command handlers here for other commands
};

// Help text for each command
const helpText = {
  contact: 'Prints contact information (e-mail and phone number).',
  // Add more help text for other commands here
  help: 'Provides help text for available commands. Use "help <command_name>" to get specific help.',
};

// Function to print something to "stdout"
function printOutput(outputString) {
  const outputLine = document.createElement("div");
  outputLine.textContent = outputString;
  outputElement.appendChild(outputLine);
  outputElement.scrollTop = outputElement.scrollHeight;
}

// Function to process the user input and execute the appropriate command
function processCommand(input) {
  const args = input.trim().split(' ');
  const command = args[0].toLowerCase();

  if (command === 'help') {
      // Display general help or specific command help
      const specificCommand = args[1] ? args[1].toLowerCase() : null;
      if (specificCommand && helpText[specificCommand]) {
        printOutput(helpText[specificCommand]);
      } else {
          console.log('Available commands:');
          for (const cmd in helpText) {
            printOutput(`- ${cmd}: ${helpText[cmd]}`);
          }
      }
  } else if (commandHandlers[command]) {
      commandHandlers[command]();
  } else {
      console.log('Command not found. Type "help" to see available commands.');
  }
}

// Call the function when the page loads
window.onload = function () {
  typeHello();

  // Set up the terminal input handling
  const inputElement = document.getElementById('command-input');
  inputElement.addEventListener('keyup', function (event) {
      if (event.key === 'Enter') {
          const input = inputElement.value;
          console.log(`> ${input}`);
          processCommand(input);
          inputElement.value = '';
      }
  });
};
