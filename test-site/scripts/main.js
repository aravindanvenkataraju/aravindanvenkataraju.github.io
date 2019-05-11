var myImage = document.querySelector('img')
myImage.onclick = function(){
    var imageSource = myImage.getAttribute('src');
    if(imageSource === 'images/firefox-logo.png'){
        myImage.setAttribute('src', 'images/firefox-1-logo.png')
    }else{
        myImage.setAttribute('src', 'images/firefox-logo.png')
    }
}