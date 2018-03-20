class PaymentManager {
  constructor(title) {
    this.title = title;
    this.table = this._createTable();
    this.name = '';
    this.category = '';
    this.price = '';
  }

  render(id) {
    $('#' + id).append(this.table);
  }

  _createTable() {
    let table = $('<table>');
    let caption = $('<caption>');
    let thead = this._createTableHeader();
    let tbody = this._createTableBody();
    let tfoot = this._createTableFooter();
    caption.text(`${this.title} Payment Manager`);
    table.append(caption);
    table.append(thead);
    table.append(tbody);
    table.append(tfoot);
    return table;
  }

  _createTableHeader() {
    let tableHead = `<thead>
        <tr>
            <th class="name">Name</th>
            <th class="category">Category</th>
            <th class="price">Price</th>
            <th>Actions</th>
        </tr>
    </thead>`;
    return tableHead;
  }

  _createTableBody() {
    let tbody = $('<tbody>');
    tbody.attr('class', 'payments');
    return tbody;
  }

  _createTableFooter() {
    let tfoot = $('<tfoot>');
    tfoot.attr('class', 'input-data');
    let tr = $('<tr>');
    tr.append('<td><input name="name" type="text"></td>');
    tr.append('<td><input name="category" type="text"></td>');
    tr.append('<td><input name="price" type="number"></td>');
    let td = $('<td>');
    let addBtn = $('<button>');
    var that = this;
    addBtn.click(function () {
      var selectedTable = $(this).parent().parent().parent().parent();
      let name = selectedTable.find('input[name="name"]').val();
      selectedTable.find('input[name="name"]').val('');
      let category = selectedTable.find('input[name="category"]').val();
      selectedTable.find('input[name="category"]').val('');
      let price = Number(selectedTable.find('input[name="price"]').val());
      selectedTable.find('input[name="price"]').val('');
      if (name === '' || category === '' || price === 0) {
        return;
      }
      let pmt = $('.payments');
      let innertr = $('<tr>');
      innertr.append(`<td>${name}</td>`);
      innertr.append(`<td>${category}</td>`);
      innertr.append(`<td>${price}</td>`);
      let innertd = $('<td>');
      let deleteBtn = $('<button>');
      deleteBtn.text('Delete');
      deleteBtn.click(function () {
        $(this).parent().parent().remove();
      });
      innertd.append(deleteBtn);
      innertr.append(innertd);
      selectedTable.append(innertr);
    });
    addBtn.text('Add');
    td.append(addBtn);
    tr.append(td);
    tfoot.append(tr);
    return tfoot;
  }
}