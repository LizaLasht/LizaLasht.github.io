function click1(event)
{
    var result;
    let f1=document.getElementById('field1').value;
    let f2=document.getElementById('field2').value;
    let r1=document.getElementById('result');
    const price=/^-?(0|[1-9]\d*)(\.[0-9]{1,4})?$/;
    const k=/^(0|-?[1-9]\d{0,5})$/;
    if( (!price.test(f1) && !k.test(f2) ))
    { r1.innerHTML = "Введены некорректные данные";}
    else if( !price.test(f1))  r1.innerHTML = "Введена неверная цена";
    else if(!k.test(f2))  r1.innerHTML = "Введено неверное количество товара";
    else
    { result=f1*f2;
        r1.innerHTML ="Стоимость заказа: "+ result;
    }
    event.preventDefault();
}

window.addEventListener('DOMContentLoaded', function (event) {
    console.log("DOM fully loaded and parsed");
    let b=document.getElementById("button1");
    b.addEventListener("click", click1);
});
