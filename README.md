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

# Methods:

- nextPrev(isNext): This method is responsible for navigating to the next or previous image based on the isNext parameter. It also includes logic to loop through the images when reaching the beginning or end of the array.
- changeImage(index): This method is triggered when a thumbnail is clicked, changing the active image to the one corresponding to the clicked thumbnail.
- autoScroll(): This method uses setInterval to automatically scroll to the next image every 3 seconds

# tools

# Image Iteration with v-for

When working with Vue.js, you often need to iterate over a collection of items and perform certain actions based on conditions. Here's how you can use `v-for`, `v-if`, and `v-else` directives to achieve image iteration and navigation button display in Vue.js:

## Image Iteration with v-for:

Using `v-for="(img, index) in images"`, you can iterate over each element of the `images` array and access the current image (`img`) and its index (`index`).

## Conditional Navigation Button Display:

- With `v-if="activeImage !== 0"`, the template checks if the active image is not the first in the array. If true, only the "Prev" (<) button is displayed.
- With `v-else`, it handles the case where the active image is the first in the array. In this case, only the "Next" (>) button is displayed.
- In both cases, `v-for` is used to iterate over objects in the `arrows` array, which contain information about navigation buttons.

## Event Handling on Buttons:

- The `@click="prevImage()"` and `@click="nextImage()"` directives call the `prevImage()` and `nextImage()` functions respectively when clicking on the "Prev" and "Next" buttons. These functions manage the change of the active image.

## Hover Effect Management:

- The `@mouseover="hoverEffect(true)"` and `@mouseleave="hoverEffect(false)"` directives trigger the `hoverEffect(true)` and `hoverEffect(false)` functions respectively when hovering over and exiting the buttons. These functions can be implemented to manage the hover effect if necessary.
