# vue-slider

# Descrizione:

1. Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

# Bonus: 1

- al click su una thumb, visualizzare in grande l'immagine corrispondente
- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

# Consigli del giorno:

regola d'oro: riciclare ovunque possibile!:

- Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
  il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)

# tools

# Data:

- array with 5 images that contains the paths
- The activeImage variable represents the index of the currently displayed image. I've set it to 0 initially and then chang in 1

# tools

## Image Iteration with v-for:

use `v-for` to iterate over the images in the `images` array and dynamically generate image thumbnails in the `thumb-container`, allowing the user to click on them to change the main image displayed in the slider:

- use the `v-for="(img, index) in images"` directive on the `<img>` element inside `thumb-container`. This directive allows to iterate over each element of the `images` array.
- Each iteration creates an `<img>` element in the `thumb-container`, and `img` represents the path of the current image in the array.
- `index` represents the current index of the image in the array.
- Data binding `:src="img"` dynamically sets the `src` attribute of the `<img>` element with the path of the current image.
- `:class="{ active: index === activeImage % images.length }"` adds the `active` class to the current image if its index is equal to the index of the active image, calculated as `activeImage % images.length`. This allows us to visually highlight the active image among the thumbnails.
  Of course! Here's the explanation for the methods used in the Vue app:

## Methods:

the methods `prevImage()`, `nextImage()`, and `changeImg(index)` handle image navigation and selection, while the `mounted()` hook sets up automatic image scrolling using `setInterval()`

### prevImage():

- This method is called when the user clicks on the "Prev" button to navigate to the previous image.
- It decrements the value of `activeImage` by 1 and ensures that it remains within the bounds of the `images` array using modulo operation `(this.activeImage - 1 + this.images.length) % this.images.length`.
- This ensures that the images loop back to the last one when the user reaches the beginning of the array.

### nextImage():

- This method is called when the user clicks on the "Next" button to navigate to the next image.
- It increments the value of `activeImage` by 1 and ensures that it remains within the bounds of the `images` array using modulo operation `(this.activeImage + 1) % this.images.length`.
- This ensures that the images loop back to the first one when the user reaches the end of the array.

### changeImg(index):

This method is called when the user clicks on one of the thumbnail images to change the active image:

- It takes the index of the clicked thumbnail as a parameter and sets the value of `activeImage` to that index.
- This allows the user to directly select a specific image from the thumbnails.

### setInterval():

- This hook is called after the Vue app is mounted to the DOM.
- It sets up an interval function using `setInterval()` that automatically calls the `nextImage()` method every 3 seconds.
- This enables automatic scrolling through the images, providing a slideshow-like functionality.
