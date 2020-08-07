function checkWord(palabra_uno, palabra_dos) {
  if (palabra_dos.length >= palabra_uno.length) {
    for (let index = 0; index < palabra_dos.length; index++) {
      if (palabra_uno.indexOf(palabra_dos[index]) != -1) {
        palabra_uno = palabra_uno.replace(palabra_dos[index], "");
      }
      if (palabra_uno === "") {
        console.log(true);
        return true;
      }
    }
    if (palabra_uno != "") {
      console.log(false);
      return false;
    }
  } else {
    console.log(false);
    return false;
  }
}

checkWord("acara", "atada");

function checkNumber(palabra) {
  let array_palabra = palabra.split(" ");
  array_palabra = array_palabra.sort((item, item_next) => {
    let index = item.search(/[0-9]/);
    let numero_palabra = item[index];

    let index_next = item_next.search(/[0-9]/);
    let numero_palabra_next = item_next[index_next];
    if (numero_palabra > numero_palabra_next) return 1;
    if (numero_palabra < numero_palabra_next) return -1;
    return 0;
  });

  array_palabra.map((palabra) => {
    console.log(palabra);
  });
}

checkNumber("estas9 5hola c2omo");
