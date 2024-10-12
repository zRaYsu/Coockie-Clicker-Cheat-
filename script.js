let div = document.createElement('div');
div.style.position = 'fixed';
div.style.top = '50%';
div.style.left = '50%';
div.style.transform = 'translate(-50%, -50%)';
div.style.backgroundColor = 'black';
div.style.color = 'white';
div.style.padding = '20px';
div.style.borderRadius = '10px';
div.style.zIndex = '9999';
div.style.cursor = 'move'; // Cambiar el cursor para indicar que es movible

let h1 = document.createElement('h1');
h1.textContent = 'Kryxuss';
h1.style.color = 'purple';
h1.style.textAlign = 'center';
div.appendChild(h1);

let button1 = document.createElement('button');
button1.textContent = 'Cookies ilimitadas';
button1.style.display = 'block';
button1.style.width = '100%';
button1.style.padding = '10px';
button1.style.margin = '10px';
button1.style.border = 'none';
button1.style.borderRadius = '5px';
button1.style.backgroundColor = 'blue';
button1.style.color = 'white';
button1.style.cursor = 'pointer';
button1.onclick = function() {
  Game.cookies = Infinity;
  alert('Cookies ilimitadas activadas!');
};
div.appendChild(button1);

let button2 = document.createElement('button');
button2.textContent = 'Eliminar Progreso del juego';
button2.style.display = 'block';
button2.style.width = '100%';
button2.style.padding = '10px';
button2.style.margin = '10px';
button2.style.border = 'none';
button2.style.borderRadius = '5px';
button2.style.backgroundColor = 'red';
button2.style.color = 'white';
button2.style.cursor = 'pointer';
button2.onclick = function() {
  if (confirm('¿Estás seguro de que deseas eliminar el progreso del juego?')) {
    Game.Reset();
    alert('Progreso del juego eliminado!');
  }
};
div.appendChild(button2);

let button3 = document.createElement('button');
button3.textContent = 'Ver DataBase';
button3.style.display = 'block';
button3.style.width = '100%';
button3.style.padding = '10px';
button3.style.margin = '10px';
button3.style.border = 'none';
button3.style.borderRadius = '5px';
button3.style.backgroundColor = 'green';
button3.style.color = 'white';
button3.style.cursor = 'pointer';
button3.onclick = function() {
  console.log(Game);
  alert('Revisa la consola para ver la base de datos!');
};
div.appendChild(button3);

let button4 = document.createElement('button');
button4.textContent = 'Desinyectar';
button4.style.display = 'block';
button4.style.width = '100%';
button4.style.padding = '10px';
button4.style.margin = '10px';
button4.style.border = 'none';
button4.style.borderRadius = '5px';
button4.style.backgroundColor = 'grey';
button4.style.color = 'white';
button4.style.cursor = 'pointer';
button4.onclick = function() {
  document.body.removeChild(div);
};
div.appendChild(button4);

let version = document.createElement('p');
version.textContent = 'v.6.0';
version.style.color = 'grey';
version.style.position = 'absolute';
version.style.bottom = '10px';
version.style.right = '10px';
version.style.margin = '0';
div.appendChild(version);

document.body.appendChild(div);

// Funcionalidad de arrastre
div.onmousedown = function(event) {
  let shiftX = event.clientX - div.getBoundingClientRect().left;
  let shiftY = event.clientY - div.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    div.style.left = pageX - shiftX + 'px';
    div.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  document.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    document.onmouseup = null;
  };
};

div.ondragstart = function() {
  return false;
};
