class DomElement {
  constructor($el) {
    this.$el = typeof $el === "string" ? document.querySelector($el) : $el;
  }

  on(eventType, cb) {
    this.$el.addEventListener(eventType, cb);
  }

  isEqual(other) {
    return this.$el === other.$el;
  }

  get data() {
    return this.$el.dataset;
  }
}

function $($el) {
  return new DomElement($el);
}
