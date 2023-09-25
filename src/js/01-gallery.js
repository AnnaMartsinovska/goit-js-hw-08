// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
  ulGallery: document.querySelector('.gallery'),
};

function galleryTemplate({preview, original, description}) {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
};
 

function renderGallery() {
    const markup = galleryItems.
        map(galleryTemplate).
        join('');
    refs.ulGallery.innerHTML = markup;
    
};
 
renderGallery();

 new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
 });

 console.log(galleryItems);