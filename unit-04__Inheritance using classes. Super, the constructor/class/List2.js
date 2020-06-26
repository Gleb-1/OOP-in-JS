class List2 extends List {
  constructor(item, cssClass) {
    super(item);
    this.cssClass = cssClass;
  }
  render() {
    let ul = super.render();
    ul.classList.add(this.cssClass);
    return ul;
  }
}

let padge2 = new List2(['one', 'two', 'three', 'four'], 'good');
console.log(padge2);

let instancePadge2 = new List2(['one', 'two', 'three', 'four', 'good']);
document.querySelector('body').append(padge2.render());
