class Drawer {
  /**
   * 
   * @param {Overlay} overlay 
   * @param {{drawer: string, btnOpen: string, btnClose: string}} options 
   */
  constructor(overlay, { drawer, btnOpen, btnClose }) {
    this.overlay = overlay;
    this.$drawer = $(drawer);
    this.$btnOpen = $(btnOpen);
    this.$btnClose = $(btnClose);

    this.$btnOpen.on("click", () => this.open());
    this.$btnClose.on("click", () => this.close());
  }

  open() {
    this.overlay.show();
    this.$drawer.data.show = true;
    $("body").data.block = true;
  }

  close() {
    this.overlay.hide();
    this.$drawer.data.show = false;
    $("body").data.block = false;
  }

  get isOpen() {
    return this.$drawer.data.show;
  }
}
