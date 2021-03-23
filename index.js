var count = 0;
function addCart() {
    var table = this.parentNode.parentNode.parentNode;
    var tr = table.rows[0];

    var cart = document.getElementById("cart");
    var cartTr = cart.insertRow(-1);
    cartTr.insertCell(-1).innerHTML = "<input type='checkbox' name='all' onchange='changeSelect(this)'>";
    cartTr.insertCell(-1).innerHTML = tr.cells[0].innerHTML;
    cartTr.insertCell(-1).innerHTML = tr.cells[1].innerHTML;
    cartTr.insertCell(-1).innerHTML = "<input type='button' value='删除' onclick='delCart(this)'>";
    count++;//购物车数量添加
    document.getElementById("num").innerHTML = count;
    alert("加入购物车成功！");
}

(function(){
    var btns = document.getElementsByName('buyBtn');
    for(let i=0;i<btns.length;i++){
        btns[i].onclick = addCart;
    }
})();