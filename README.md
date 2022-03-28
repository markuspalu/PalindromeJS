# PlayTech_JSDev

Program that displays the sequence number, input word and expected result === actual result (true or false) of a palindrome in a table. User has the option to add their own palindromes into the table.

Four rows of palindrome data has previously been added to the table but the user has the option to add their own data into the table by using the input field and clicking submit.

The program consists of four functions:  
function submittext():  
Reads input from the input field and after clicking the submit button saves the input into the palindromeData variable. Then dataToTable() and changeColors() are run to save the new data into the table and change the result columns accordingly.  
  
function dataToTable():  
Loops through the data of palindromeData and adds them into a table.  
  
function isPalindrome():  
Checks if a word is a palindrome. Returns true if it is a palindrome and returns false if it's not a palindrome.  
  
function changeColors():  
Loops through the table cells and checks if the text inside of a cell is "false" or "true" and accordingly colors the background color of a cell either red or green.

