const drawer = new Drawer({
  overlay: "#overlay",
  drawer: "#drawer",
  btnOpen: "#btn-drawer-open",
  btnClose: "#btn-drawer-close",
});

$(document).on("click", (event) => {
  const $target = $(event.target);
  if (drawer.$drawer.data.show && !$target.isEqual(drawer.$btnOpen)) {
    drawer.close();
  }
});
