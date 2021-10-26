const classe44 = [
'anthony@mail.com',
'andrea@mail.com',
'federico@mail.com',
'cristia@mail.com',
'davide@mail.com',
'alberto@mail.com',
'mauro@mail.com',
'matteo@mail.com',
'michele@mail.com',
];

const userMail = prompt('Inserire E-mail');

const main = document.querySelector('.mp-main');

let found = false;

for(let i = 0; i < classe44.length; i++){
    if(userMail === classe44[i]) found = true;
}

console.log(found);

if(found){
    main.innerHTML +=
    `
        <h2> Email trovata! </h2>
    `
    let UserNumRand = Math.ceil(Math.random() * 6);
    let ComputerNumRand = Math.ceil(Math.random() * 6);

    console.log(UserNumRand);
    console.log(ComputerNumRand);

    let result;

    if(UserNumRand > ComputerNumRand){
    result = 
    `
    <h2>Bravo hai vinto TU!</h2>
    `
    }else if(UserNumRand < ComputerNumRand){
    result = 
    `
    <h2>Ha vinto il Computer</h2>
    `
    }else{
    result = 
    `
    <h2>Pareggio</h2>
    `
    }

    main.innerHTML += result;

}else{
    main.innerHTML +=
    `
        <h2> Email non presente </h2>
    `
}


   