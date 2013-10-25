var Sigmund, menu01;

Sigmund = require('commander');

Sigmund.Command = Command;

Sigmund.version('0.0.1');

console.log('Bem-vinda a Sigmund, versão %s, em que posso ajudá-la?', Sigmund.version());

console.log(Sigmund);

menu01 = ['Novo paciente', 'Listar pacientes', 'Sair'];

Sigmund.diz.choose(menu01, function(i) {
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
