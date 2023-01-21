export default class Section {
  constructor({ renderer }, constainerSelector) {
    //this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(constainerSelector);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }

  renderCard(item) {
    this._renderer(item);
  }

  addItem(element) {
    this._container.append(element);
  }

  prependItem(element) {
    this._container.prepend(element);
  }
}