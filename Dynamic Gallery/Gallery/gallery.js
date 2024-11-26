// Select DOM elements
const gallery = document.getElementById('gallery');
const imageURLInput = document.getElementById('imageURL');
const addImageButton = document.getElementById('addImage');

//loading images
function loadImages(){
    const images = JSON.parse(localStorage.getItem('galleryImages')) || [];
    images.forEach((imageURL) => createGalleryItem(imageURL));

}

//saving images
function saveImages(images){
    localStorage.setItem('galleryImages',JSON.stringify(images));
}

//creating gallery item
function createGalleryItem(imageURL){
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');

    const img = document.createElement('img');
    img.src=imageURL;


    img.onerror = () => {
        alert('Invalid URL : ${imageURL}');
        galleryItem.remove();
        removeImage(imageURL);
    };

    galleryItem.appendChild(img);

    //remove button
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');
    removeButton.innerHTML='X';
    removeButton.onclick = () => {
        galleryItem.remove();
        removeImage(imageURL);
    };

    gallery.appendChild(galleryItem);
    galleryItem.appendChild(removeButton);
}

//add new image to gallery

function addImage (){
    const imageURL = imageURLInput.value.trim();
    if(imageURL && imageURL.startsWith('http')){
        const images = JSON.parse(localStorage.getItem('galleryImages')) || [];
        images.push(imageURL);
        saveImages(images);

        createGalleryItem(imageURL);

        imageURLInput.value='';
    }
    else{
        alert('Please enter valid image URL');
    }
}

//remove image from localstorage

function removeImage(imageURL){
    let images =  JSON.parse(localStorage.getItem('galleryImages')) || [];
    images = images.filter((url) => url!== imageURL);
    saveImages(images);

}

//add image button event listener
addImageButton.addEventListener('click',addImage);

//load images from local storage when page is loaded
window.onload=loadImages;