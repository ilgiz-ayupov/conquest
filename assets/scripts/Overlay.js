class Overlay {
    /**
     * 
     * @param {{overlay: string}} options
     */
  constructor({ overlay }) {
    this.$overlay = $(overlay);
  }

  show() {
    this.$overlay.data.show = true;
  }

  hide() {
    this.$overlay.data.show = false;
  }
}
