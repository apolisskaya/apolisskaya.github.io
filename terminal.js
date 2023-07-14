const outputElement = document.getElementById("output");
const inputElement = document.getElementById("command-input");

inputElement.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    const command = inputElement.value;
    executeCommand(command);
    inputElement.value = "";
  }
});

function executeCommand(command) {
  // Here you can implement the logic to execute the console command
  // and display the output in the terminal window
  const output = "> " + command; // Placeholder output
  const outputLine = document.createElement("div");
  outputLine.textContent = output;
  outputElement.appendChild(outputLine);
  outputElement.scrollTop = outputElement.scrollHeight;
}
