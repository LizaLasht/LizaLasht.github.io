<!--Разработать на JavaScript калькулятор стоимости заказа. Калькулятор должен содержать:
- текстовое поле для ввода цены товара;
- текстовое поле для ввода количества товара;
- кнопка подсчета стоимости.
При нажатии на кнопку на странце выводится стоимость заказа, рассчитываемая как произведение цены и количества.-->
<script>
    function click1() {
    <p>Введите цену товара</p>
      let f1 = document.getElementsByName("field1");
      let f2 = document.getElementsByName("field2");
      let r = document.getElementById("result");
      r.innerHTML = f1[0].value + f2[0].value;
      return false;
    }
    
    </script>  
    
    <div id="result"></div>
    <form>
        <p>Введите цену товара</p>
        <input name="field1" type="text">
        <p>Введите количество товара</p>
        <input name="field2" type="text">
        <button id="button1" onclick="return click1();">OK</button>
      
    </form>
    
<script>
    function onClick() {
      alert("click");
    }
    
    window.addEventListener('DOMContentLoaded', function (event) {
      console.log("DOM fully loaded and parsed");
      let b = document.getElementById("my-button");
      b.addEventListener("click", onClick);
    });
    </script>  
    
    <button id="my-button">Рассчитать стоимость</button>
    <script>
        console.log("Hello World!");
        alert("Hello World!");     
        </script>
        
    
