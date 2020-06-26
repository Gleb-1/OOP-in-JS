class List {
  constructor(item) {
    this.item = item;
  }
  render() {
    let someList = document.createElement('ul');
    for (let i = 0; i < this.item.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = this.item[i];
      someList.append(li);
    }
    return someList;
  }
}

let padge = new List(['one', 'two', 'three', 'four']);
console.log(padge.render());
console.log(padge);

let instancePadge = new List(['one', 'two', 'three', 'four']);
document.querySelector('body').append(padge.render());
