const { createApp } = Vue;

createApp({
  data() {
    return {
      // Array of image paths
      images: [
        "./assets/img/01.jpg",
        "./assets/img/02.jpg",
        "./assets/img/03.jpg",
        "./assets/img/04.jpg",
        "./assets/img/05.jpg",
      ],
      activeImage: 1,
    };
  },
  methods: {
    // Function to navigate to the next or previous image
    nextPrev(isNext) {
      if (isNext) this.activeImage++;
      else this.activeImage--;

      // Check to loop through images
      if (this.activeImage === this.images.length) {
        this.activeImage = 0;
      } else if (this.activeImage < 0) {
        this.activeImage = this.images.length - 1;
      }
    },
    // Function to change the active image when a thumbnail is clicked
    changeImage(index) {
      this.activeImage = index;
    },
    // Automatic image loop
    autoScroll() {
      setInterval(() => {
        this.nextPrev(true); // Set to true for automatic scrolling to the next image
      }, 3000); // 3secs
    },
  },
  mounted() {
    this.autoScroll(); //put a autoscroll when the component is mounted
  },
}).mount("#app");
