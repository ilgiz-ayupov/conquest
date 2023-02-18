class Drawer {
  constructor({ overlay, drawer, btnOpen, btnClose }) {
    this.$overlay = $(overlay);
    this.$drawer = $(drawer);
    this.$btnOpen = $(btnOpen);
    this.$btnClose = $(btnClose);

    this.$btnOpen.on("click", () => this.open());
    this.$btnClose.on("click", () => this.close());
  }

  open() {
    this.$overlay.data.show = true;
    this.$drawer.data.show = true;
    $("body").data.block = true;
  }

  close() {
    this.$overlay.data.show = false;
    this.$drawer.data.show = false;
    $("body").data.block = false;
  }
}
