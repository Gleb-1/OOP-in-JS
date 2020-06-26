class Company {
  constructor() {
    this._element = '';
    this._header = '';
    this._headerClass = [];
    this._tableClass = [];
    this.attribute = [];
    this.data = [];
  }
  setElement(element) {
    if (document.querySelector(element)) {
      this._element = element;
      return true;
    }
    return false;
  }
  setHeader(header) {
    if (typeof header === 'string' && header.trim() != '') {
      this._header = header.trim();
      return true;
    }
    return false;
  }
  setHeaderClass(headerClass) {
    if (typeof header === 'object') {
      this._headerClass = headerClass;
      return true;
    }
    return false;
  }
  setTableClass(tableClass) {
    if (typeof tableClass === 'object') {
      this._tableClass = tableClass;
      return true;
    }
    return false;
  }
  setAttribute(attribute) {
    if (typeof attribute === 'object') {
      this.attribute = attribute;
      return true;
    }
    return false;
  }
  render(data) {
    this.setElement(data.element);
    this.setHeader(data.header);
    this.setHeaderClass(data.headerClass);
    this.setTableClass(data.tableClass);
    this.setAttribute(data.attribute);
    this.data = data.data;
    //show header
    const header = document.createElement('h1');
    this._headerClass.forEach((elem) => {
      header.classList.add(elem);
    });
    header.textContent = this._header;
    document.querySelector(this._element).append(header);
    //show tadle
    const table = document.createElement('table');
    this._tableClass.forEach((elem) => {
      table.classList.add(elem);
    });
    let tr = document.createElement('tr');
    for (let key in this.attribute) {
      let th = document.createElement('th');
      if (this.attribute[key].lable) th.textContent = this.attribute[key].lable;
      else th.textContent = key;
      tr.append(th);
    }
    table.append(tr);
    // draw table
    for (let i = 0; i < this.data.length; i++) {
      const tr = document.createElement('tr');
      for (let key in this.attribute) {
        const td = document.createElement('td');
        if (this.attribute[key].value) {
          this.data[i][key] = this.attribute[key].value(this.data[i]);
        }
        td.innerHTML = this.data[i][key];
        tr.append(td);
      }
      table.append(tr);
    }
    document.querySelector(this._element).append(table);
  }
}

// // });
// document.querySelector('.out').innerHTML = Object.keys(qw[0].social).join(' ');
// console.log(Object.keys(qw[0].social).join(' '));
