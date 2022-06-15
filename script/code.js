
function Create(){
let container = document.getElementById("container");

container.innerHTML=`<form action="">
<h1>Temperature Converter</h1>
<label>Celsius:
<input id="Celsius" type="text" placeholder="Celsius">
 
</input>
<br>
<br>
</label>
<label>Fahrenheit:
     <input id="Fahrenheit" type="text" placeholder="Fahrenheit">
     
    </input>
    </label>
    <br>
    <button id="Button" type="button" onclick="Converter()">Converter</button>
</form>`

}

Create()



function Converter(){
    let celsius = document.getElementById('Celsius').value;
    let fahrenheit = document.getElementById('Fahrenheit');
    let converter = eval((celsius * 9/5)+32);
    // console.log(converter)
     fahrenheit.value= converter + " F";
}



