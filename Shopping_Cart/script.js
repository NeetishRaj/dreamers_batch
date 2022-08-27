let item_name_input, item_price_input;
const Items = [];

function insertItem() {
    // Get the item name and price from inputs
    const current_item_name = item_name_input.value;
    const current_item_price = parseFloat(item_price_input.value);

    // Empty both the name and price inputs
    item_name_input.value = '';
    item_price_input.value = '';

    // Make sure name & price are valid
    if(current_item_name.length <= 0 || Number.isNaN(current_item_price)) {
        return;
    }

    // add the item to Items array
    Items.push({
        serialNo: Items.length + 1,
        name: current_item_name,
        price: current_item_price
    });

    // Create a new Table row
    add_item_in_table();


    // Update the Grand total value in table
    const grandTotal = Items
        .map(item => item.price)                    //[50, 180, 30]
        .reduce((acc, price) => acc + price, 0);    // 260

    const grandTotalTd = document.querySelector('td[data-ns-test="grandTotal"]');
    grandTotalTd.textContent = grandTotal;
}



function add_item_in_table() {
    const table_last_row = document.querySelector('table tr:last-child');

    // Create a new tr
    const tr = document.createElement('tr');
    table_last_row.parentNode.insertBefore(tr, table_last_row);

    // Create 3 td, 
    const  item = Items[Items.length - 1];

    const td1 = document.createElement('td');
    td1.textContent = item.serialNo;
    tr.appendChild(td1);

    const td2 = document.createElement('td');
    td2.textContent = item.name;
    td2.setAttribute('data-ns-test','item-name');
    tr.appendChild(td2);

    const td3 = document.createElement('td');
    td3.textContent = item.price;
    td3.setAttribute('data-ns-test','item-price');
    tr.appendChild(td3);

}


function init() {
    item_name_input = document.getElementById('item-name-input');
    item_price_input = document.getElementById('item-price-input');


}

window.onload = init;