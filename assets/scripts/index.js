const overlay = new Overlay({
  overlay: "#overlay",
});

const drawer = new Drawer(overlay, {
  drawer: "#drawer",
  btnOpen: "#btn-drawer-open",
  btnClose: "#btn-drawer-close",
});

$(document).on("click", (event) => {
  const $target = $(event.target);
  if (drawer.isOpen && $target.isEqual(overlay.$overlay)) {
    drawer.close();
  }
});
