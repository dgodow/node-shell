var fs = require('fs');
var request = require('request')
var dateFormat = require('dateformat');

function pwd (filename) {
    var dir = process.env['PWD'];
    done(dir);
}

// function date (filename) {
//     var todaysDate = dateFormat(new Date());
//     done(date);
// }

function ls(filename){
    var fileDir = [];
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
            process.stdout.write(file.toString() + "\n");
        })
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
    fs.readFile(filename, function (err, data) {
        if (err) throw err;
        process.stdout.write(data);
        process.stdout.write("\nprompt > ");
    })
}

function head (filename) {
    fs.readFile(filename, function (err, data) {
        if (err) throw err;
        var stringData = data.toString().split('\n').slice(0,5).join('\n');
        process.stdout.write(stringData);
        process.stdout.write("\nprompt > ");
    })
}

function tail (filename){
    fs.readFile(filename, function (err, data) {
        if (err) throw err;
        var stringData = data.toString().split('\n').slice(-5).join('\n');
        process.stdout.write(stringData);
        process.stdout.write("\nprompt > ");
    })
}

function curl(url){
    // process.stdout.write(request.get(url));
    request(url, function (err, response, body) {
    if (err) throw err;
    if (!err && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage. 
        }
        process.stdout.write("\nprompt > ");
    })
    
}

module.exports = {
    pwd: pwd,
    ls: ls,
    echo: echo,
    cat: cat,
    head: head,
    tail: tail,
    curl: curl
}