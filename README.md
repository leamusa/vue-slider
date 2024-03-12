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
