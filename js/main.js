const btnCalcular = document.querySelector('#Calcular');
const borrachoFoto = document.querySelector("#borracho");
const btnReiniciar = document.querySelector("#Reiniciar");
const tbody = document.querySelector("#tbody");

btnCalcular.addEventListener('click', calculos);
btnReiniciar.addEventListener('click', reiniciarPosicionDelBorracho);

function calculos() {
    reiniciarPosicionDelBorracho();
    let x = 0,
        y = 0,
        cuerpo = '';
    for (let n = 0; n < 10; n++) {
        let numAleatorio = getRandomInt(0, 99);
        if (numAleatorio >= 0 && numAleatorio < 25) {
            y++;
        }
        if (numAleatorio >= 25 && numAleatorio < 50) {
            y--;
        }
        if (numAleatorio >= 50 && numAleatorio < 75) {
            x++;
        }
        if (numAleatorio >= 75 && numAleatorio < 100) {
            x--;
        }

        if (n < 9) {
            const row = document.createElement("tr");
            cuerpo = `
            <tr>
              <th scope="row">${n+1}</th>
              <td>${numAleatorio}</td>
              <td></td>
            </tr>
        `;
            row.innerHTML = cuerpo;
            tbody.appendChild(row);
        } else if (n == 9) {
            let sumaXY = x + y;
            const row = document.createElement("tr");
            cuerpo = `
            <tr>
              <th scope="row">${n+1}</th>
              <td>${numAleatorio}</td>
              <td>${sumaXY}</td>
            </tr>
        `;
            row.innerHTML = cuerpo;
            tbody.appendChild(row);
        }
    }
    let sumaXY = x + y;
    cambiarPosicionDelBorracho(x, y);
}

function cambiarPosicionDelBorracho(x, y) {
    borrachoFoto.style.gridColumnStart = (20 + (x + x));
    borrachoFoto.style.gridRowStart = (20 - (y + y));
}

function reiniciarPosicionDelBorracho() {
    vaciarTabla();
    borrachoFoto.style.gridColumnStart = 20;
    borrachoFoto.style.gridRowStart = 20;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function vaciarTabla(){
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
}