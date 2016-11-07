var fs = require('fs');

function pwd () {
    // Need to remove most of the function //

    // process.stdout.write('prompt > ');
    // process.stdin.on('data', function (data) {
    //     var cmd = data.toString().trim();
    //     if (cmd === 'pwd') {
            process.stdout.write(process.env['PWD']);
        // }
        process.stdout.write('\nprompt > ');
    // })
}

/*
Date:

else if (cmd === 'date') {
            var myDate = new Date();
            process.stdout.write(dateFormat(myDate)); // Format Example: Mon Nov  7 10:12:44 EST 2016
        }

*/

// var exports = module.exports = {};
// exports.pwd = pwd;


function ls(){

    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
    });

}

function echo(args){
    // var args = process.argv.slice(2).join(' ');

    if(process.env[args.toUpperCase()]){
        process.stdout.write(process.env[args.toUpperCase()]);

    } else process.stdout.write(args);

    process.stdout.write("\nprompt > ");
}

module.exports = {
    pwd: pwd,
    ls: ls,
    echo: echo
}