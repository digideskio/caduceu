var Sigmund, logo, menu01;

Sigmund = require('commander');

Sigmund.diz = new Sigmund.Command();

console.log(Sigmund.diz);

Sigmund.version('0.0.1');

logo = "\n,---.o                        |\n`---..,---.,-.-..   .,---.,---|\n    |||   || | ||   ||   ||   |\n`---'``---|` ' '`---'`   '`---'\n      `---'\n";

console.log(logo);

console.log('Sigmund v%s', Sigmund.version());

console.log(Sigmund);

menu01 = ['Novo paciente', 'Listar pacientes', 'Sair'];

Sigmund.choose(menu01, function(i) {
  switch (i) {
    case 1:
      return Sigmund.criar('pacientes.js');
    case 2:
      return Sigmund.listar('pacientes.js');
    case 3:
      console.log('Auf wiedersehen!');
      return process.stdin.destroy();
    default:
      return console.log('Tente novamente');
  }
});
