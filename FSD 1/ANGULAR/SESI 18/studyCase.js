function removeSpace (text){

    return text.replace(/\s/g, '');
}

function reverseText (text){

    return text.split('').reverse().join('');
}

function updateVowels (text){

    let vowel = {
        A : 'B',
        I : 'J',
        U : 'V',
        E : 'F',
        O : 'P',
        a : 'b',
        i : 'j',
        u : 'v',
        e : 'e',
        o : 'p',
    }
    let array = text.split("");

    for(let i = 0; i < array.length ; i++){
        let cek = vowel[array[i]]
        if(cek != undefined){
            array[i] = cek;
        }
    }
    return array.join('');
}

let password = 'i love javascript';
let noSpace = removeSpace(password);
let reversed = reverseText(noSpace);
let encryptedPassword = updateVowels(reversed);

console.log(encryptedPassword);
