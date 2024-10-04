const passwordbox = document.getElementById("password");
const lenght = 12;


const uppercase = "ABCDEFGHIJKLMMNOMPQRSTUVWXYZ";
const lowercase = "abcefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@!#$%^&*()_+-=/?{}[]\| <>~";

const allchars =  uppercase + lowercase + number + symbol;

function createPassword (){
    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    passwordbox.value = password;
}

function copyPassword(){
    passwordbox.select();
    document.execCommand("copy"); //,alert("Copy your random password")
    
}