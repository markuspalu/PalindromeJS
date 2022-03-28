const container = document.getElementById('container');
const title = document.createElement('div');
title.classList.add('title');
title.textContent = "Palindrome Table";
container.appendChild(title);

let sequencenr = 0;
let palindromeData = [
    { sequence: sequencenr+=1, input: 'anna', result: isPalindrome('anna').toString()},
    { sequence: sequencenr+=1, input: 'Anna', result: isPalindrome('Anna').toString()},
    { sequence: sequencenr+=1, input: 'anna', result: isPalindrome('anna').toString()},
    { sequence: sequencenr+=1, input: 'YellowSubmarine', result: isPalindrome('YellowSubmarine').toString()}
];

function submittext(event) {
    let palindromeName = document.getElementById("inputtext").value;
    palindromeData.push({ sequence: sequencenr+=1, input: palindromeName, result: isPalindrome(palindromeName).toString() });
    event.preventDefault(); // to prevent the submit button from refreshing the page
    dataToTable(palindromeData);
    changeColors();
}

function dataToTable(palindromeData) {
    let tData= '';
    const tBody = document.getElementById('tData');
    for (let data of palindromeData) {
        tData += 
        `<tr>\
        <td>${data.sequence}</td>\
        <td>${data.input}</td>\
        <td>${data.result}</td>\
        </tr>`;
    }
    tBody.innerHTML = tData;
}
dataToTable(palindromeData);
changeColors();

function isPalindrome(word) {
    const len = word.length;
    for (let i = 0; i < len/2; i++) {
        if (word[i].toLowerCase() !== word[len - i - 1].toLowerCase()) {
            return false
        }
    }
    return true
}

function changeColors() {
    let tds = document.getElementById('tData').getElementsByTagName('td');
    for (let cell of tds) {
        if (cell.innerText == "false") {
            cell.style.backgroundColor = 'red';
        }
        if (cell.innerText == "true") {
            cell.style.backgroundColor = 'green';
        }
    }
}