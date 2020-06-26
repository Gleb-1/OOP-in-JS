class Button {
  constructor(width, height, background, value) {
    this.width = width;
    this.height = height;
    this.background = background;
    this.value = value;
  }
  render() {
    let creaButton = document.createElement('button');
    creaButton.style.backgroundColor = this.background;
    creaButton.style.width = `${this.width}px`;
    creaButton.style.height = `${this.height}px`;
    creaButton.innerHTML = this.value;
    return creaButton;
  }
}
let but = new Button(240, 30, 'blue', 'button');

let instance = new Button(240, 30, 'blue', 'button'); // экземпляр класса Button
document.querySelector('body').append(instance.render());
