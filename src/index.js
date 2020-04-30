const $ = require('jquery');

var count = 0;
function addCart() {
    var table = $(this).parents('table');
    var tr = table.find('tr:eq(0)');

    // var cart = document.getElementById("cart");
    // var cartTr = cart.insertRow(-1);
    // cartTr.insertCell(-1).innerHTML = "<input type='checkbox' name='all' onchange='changeSelect(this)'>";
    // cartTr.insertCell(-1).innerHTML = tr.cells[0].innerHTML;
    // cartTr.insertCell(-1).innerHTML = tr.cells[1].innerHTML;
    // cartTr.insertCell(-1).innerHTML = "<input type='button' value='删除' onclick='delCart(this)'>";
    count++;//购物车数量添加
    $("#num").text(count);
    alert("加入购物车成功！");
}

var btns = $('[name=buyBtn]');
btns.each(function(){
    $(this).click(addCart);
});

require('./index.css');