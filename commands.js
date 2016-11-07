function pwd () {
    process.stdout.write('prompt > ');

    process.stdin.on('data', function (data) {
        var cmd = data.toString().trim();
        if (cmd === 'pwd') {
            process.stdout.write(process.env['PWD']);
        }
        process.stdout.write('\nprompt > ');
    })
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

module.exports = {
    pwd: pwd
}