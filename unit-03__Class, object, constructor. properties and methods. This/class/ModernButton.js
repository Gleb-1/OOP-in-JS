class ModernButton extends Button {
  constructor(width, height, background, value, borderRadius) {
    super(width, height, background, value);
    this.borderRadius = borderRadius;
  }
  render() {
    let c = super.render(); // если не возвратить  в родительском классе (Button) - (return creaButton) то (let c = super.render()) будет undefined
    c.style.borderRadius = `${this.borderRadius}px`;
    return c;
  }
}

let but2 = new ModernButton(240, 30, 'blue', 'button', 10);

let instanceBut2 = new ModernButton(240, 30, 'blue', 'button', 10); //// экземпляр класса ModernButton
document.querySelector('body').append(instanceBut2.render());
