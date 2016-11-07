var dateFormat = require('dateformat');
var commands = require('./commands');

// console.log(process);
// console.log(Object.keys(process));

// 1. SIMULATING THE BASH SHELL
// console.log(process);
// console.log(Object.keys(process));

// ---------------------------

// 2. THE 'PROCESS' GLOBAL VARIABLE
// OUTPUT A PROMPT
// process.stdout.write('prompt > ');

// // LISTENING FOR EVENTS IN THE SHELL INDEFINITELY
// process.stdin.on('data', function (data) {
//     var cmd = data.toString().trim(); // remove newline

//     process.stdout.write('You typed: ' + cmd);
//     process.stdout.write('\nprompt > ');
// })

// --------------------------

// 3. 'PWD' AND 'DATE'

// process.stdout.write('prompt > ');

// process.stdin.on('data', function (data) {
//     var cmd = data.toString().trim();
//     if (cmd === 'pwd') {
//         process.stdout.write(process.env['PWD']);
//     }
//     else if (cmd === 'date') {
//         var myDate = new Date();
//         process.stdout.write(dateFormat(myDate)); // Format Example: Mon Nov  7 10:12:44 EST 2016
//     }
//     process.stdout.write('\nprompt > ');
// })

// 4. HOW 'STDIN/STDOUT' WORK IN BASH?

/*
$ cat bash.js -- concatenate files and print on the standard output
$ head bash.js -- output the first part of files
$ cat bash.js | head -- the pipe ('|') means the shell will output the rightmost command on the input (bash.js, in this case) that succeeds (returns a non-failure state).

Visit explainshell.com if you want to learn more about cat and head. Explain the difference between the first two lines and the third. What is STDIN and STDOUT in each case?
*/

// 5. SEPARATING COMMANDS INTO A SEPARATE FILE

commands.pwd();