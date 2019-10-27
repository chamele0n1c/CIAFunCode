const readline = require('readline');
const fs = require('fs');


const letters =
{
'01' : 'A',
'02' : 'B',
'03' : 'C',
'04' : 'D',
'05' : 'E',
'06' : 'F',
'07' : 'G',
'08' : 'H',
'09' : 'I',
'10' : 'J',
'11' : 'K',
'12' : 'L',
'13' : 'M',
'14' : 'N',
'15' : 'O',
'16' : 'P',
'17' : 'Q',
'18' : 'R',
'19' : 'S',
'20' : 'T',
'21' : 'U',
'22' : 'V',
'23' : 'W',
'24' : 'X',
'25' : 'Y',
'26' : 'Z',
}

let otpBlocks = [{},];
let cipherBlocks = [{},];
let otpLen;
let cipherLen;
let cipherRead;
let otpRead;

const otp = readline.createInterface({
    input: fs.createReadStream('otp.txt'),
    output: process.stdout,
    console: false
});

const cipher = readline.createInterface({
    input: fs.createReadStream('message.txt'),
    output: process.stdout,
    console: false
});

otp.on('line',(line) =>{
    const filtered = line.trim().split(/\s+/);
    for (let i = 0; i < filtered.length; i++)
    {
        if (filtered[i] == null || filtered[i] == undefined)
        {
            return false;
        }
        otpBlocks.push(filtered[i]);
    }
});
    
cipher.on('line', function(line) {
    const filtered = line.trim().split(/\s+/);
    for (let i = 0; i < filtered.length; i++)
    {
        if (filtered[i] == null || filtered[i] == undefined)
        {
            return false;
        }
        cipherBlocks.push(filtered[i]);
    }
});

otp.on('close', function() 
{
    otpLen = otpBlocks.length;
    otpRead = true;
});

cipher.on('close', function()
{
    cipherLen = cipherBlocks.length;
    cipherRead = true;
});


function bruteForce (x, y) 
{
    console.log('bfc');
    const max = x - y;
    //otp splicer builder
    let deciphered = [{},];
    let msg = '';
    let otpVary = [{},];
    for (let i = 1; i < max; i++)
    {
        const tOtp = otpBlocks.slice(i, i+x);
        let ntOtp = tOtp.join('');
        ntOtp = ntOtp.match(/.{1,1}/g);
        otpVary[i] = tOtp;
    }
    for (let i = 1; i < otpVary.length; i++)
    {
        console.log(i.toString() + " / " + otpVary.length.toString());
        const tOtp = otpVary[i].join('').match(/.{1,1}/g);
        const cipher = cipherBlocks.join('').slice(15);
        let cipherChars = cipher.match(/.{1,1}/g);
        let dInts = [{},];
        for (let j = 0; j < cipherChars.length; j++)
        {
            const cnum = parseInt(cipherChars[j]);
            const onum = parseInt(tOtp[j]);
            const dnum = Math.abs(cnum - onum);
            dInts.push(dnum);
        }
        let tIntChars = [{},];
        for (let j = 1; j < dInts.length; j++)
        {
            let jump = false;
            if (dInts[j] == undefined)
            {

                continue;
            }
            if (dInts[j + 1] == undefined)
            {

                tIntChars.push(dInts[j].toString());
                console.log('val ' + dInts[j].toString());
                continue;
            }
            const concat = dInts[j].toString() + dInts[j + 1].toString();
            console.log(concat);
            if (parseInt(concat) > 26 && parseInt(dInts[j].toString()) > 2)
            {
                if (jump)
                {
                    tIntChars.push("0"+dInts[j+1].toString());
                    console.log('val ' + "0"+dInts[j+1].toString());
                    jump = false;
                    continue;
                }
                tIntChars.push("0"+dInts[j].toString());
                console.log('val ' + dInts[j].toString());
                jump = false;
                continue;
            }
            else
            {
                if (jump)
                {
                    const val = dInts[j+1].toString() + dInts[j+2].toString();
                    console.log("val " + val);
                    tIntChars.push(val)
                }
                const val = dInts[j].toString() + dInts[j+1].toString();
                console.log("val " + val);
                tIntChars.push(val)
                jump = true;
                continue;
            }
        }
        for (let p = 0; p < tIntChars.length; p++)
        {
            tIntChars[p] = letters[tIntChars[p]];
        }
        deciphered.push(tIntChars.join(''));
        
    }
    return deciphered;
}

function complete ()
{
    if ( cipherRead == true && otpRead == true)
    {
        return true;
    }
    else{
        return false;
    }
}

const check = setInterval(() =>
{
    if (complete())
    {
        clearInterval(check);
        const results = bruteForce(otpLen, cipherLen);
        console.log('brute done');
        for (let i = 0; i < results.length; i++)
        {
            console.log(results[i]);
        }
    }
}, 1000)