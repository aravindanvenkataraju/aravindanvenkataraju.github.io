var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    if (myName !== null){
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myImage.onclick = function () {
    var imageSource = myImage.getAttribute('src');
    if (imageSource === 'images/firefox-logo.png') {
        myImage.setAttribute('src', 'images/firefox-1-logo.png')
    } else {
        myImage.setAttribute('src', 'images/firefox-logo.png')
    }
}

myButton.onclick = function () {
    setUserName();
}