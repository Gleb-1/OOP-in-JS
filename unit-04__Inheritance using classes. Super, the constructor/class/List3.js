class List3 extends List {
  constructor(item, cssClass) {
    super(item);
    this.cssClass = cssClass;
  }
  render() {
    let stl = super.render();
    for (let i = 0; i < this.cssClass.length; i++) {
      stl.classList.add(this.cssClass[i]);
    }
    return stl;
  }
}

let padge3 = new List3(['one', 'two', 'three', 'four'], ['text-center', 'bold', 'text-red']);
console.log(padge3);

let instancePadge3 = new List3(['one', 'two', 'three', 'four'], ['text-center', 'bold', 'text-red']);
document.querySelector('body').append(padge3.render());
