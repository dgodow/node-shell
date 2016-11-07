var fs = require('fs');

function pwd (filename) {
    process.stdout.write(process.env['PWD']);
    process.stdout.write('\nprompt > ');
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


function ls(filename){
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
    });
}

function echo(args, filename){
    if (process.env[args.toUpperCase()]) {
        process.stdout.write(process.env[args.toUpperCase()]);
    } else {
        process.stdout.write(args);
    }
    process.stdout.write("\nprompt > ");
}

function cat (filename) {
    var fileToFind = filename;
    fs.readFile(filename, function (err, data) {
        if (err) throw err;
        process.stdout.write(data);
        process.stdout.write("\nprompt > ");
    })
}

function head (filename) {
    var fileToFind = filename;
    fs.readFile(filename, function (err, data) {
        if (err) throw err;
        var stringData = data.toString().split('\n').slice(0,5);
        process.stdout.write(stringData);
        process.stdout.write("\nprompt > ");
    })
}

module.exports = {
    pwd: pwd,
    ls: ls,
    echo: echo,
    cat: cat,
    head: head
}