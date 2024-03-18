const app = Vue.createApp({
  data() {
    return {
      ownerImages: "Leandra Musto, student of Boolean",
      images: [
        "./assets/img/01.jpg",
        "./assets/img/02.jpg",
        "./assets/img/03.jpg",
        "./assets/img/04.jpg",
        "./assets/img/05.jpg",
      ],
      imageCharacteristics: [
        "These are the goats of Capri",
        "These are the Faraglioni of Capri, the rocks",
        "These are the Faraglioni of Capri, the rocks",
        "These are the Faraglioni of Capri, the rocks",
        "These are the via Krupp of Capri, walking-road",
      ],
      activeImage: 0,
    };
  },
  methods: {
    prevImage() {
      this.activeImage =
        (this.activeImage - 1 + this.images.length) % this.images.length;
    },
    nextImage() {
      this.activeImage = (this.activeImage + 1) % this.images.length;
    },

    changeImg(index) {
      this.activeImage = index;
    },
  },
  mounted() {
    setInterval(() => {
      this.nextImage(); // Set to true for automatic scrolling to the next image
    }, 3000); // 3secs
  },
});

app.mount("#app");
