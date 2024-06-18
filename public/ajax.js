let request = new XMLHttpRequest();
let randomPickerForm = document.getElementById("randomPickerForm");

let picked = 0;
let tableBox = document.getElementById("TableBox");

function randomPicker(e) {
  e.preventDefault();
  let form = new FormData(e.target);
  let quantitiy = form.get("quantitiy");
  let max = form.get("max");
  picked += 1;

  if (quantitiy != "" && max != "") {
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        if (picked > 0) {
          tableBox.classList.remove("hidden");
        }
        let result = document.getElementById("result");
        let values = JSON.parse(request.responseText);
        let tr = document.createElement("tr");

        console.log(values);

        let resultTd = document.createElement("td");
        resultTd.innerText = values.value;
        resultTd.className = "border px-4 py-2";
        tr.appendChild(resultTd);

        let quantityTd = document.createElement("td");
        quantityTd.innerText = values.quantitiy;
        quantityTd.className = "border px-4 py-2";
        tr.appendChild(quantityTd);

        let maxTd = document.createElement("td");
        maxTd.innerText = values.max;
        maxTd.className = "border px-4 py-2";
        tr.appendChild(maxTd);

        result.appendChild(tr);
      }
    };
    request.open("POST", "../src/randompicker.php", true);
    request.send(form);
  } else {
    alert("os DOIS campos são obrigatórios!");
  }
}

randomPickerForm.addEventListener("submit", randomPicker);
