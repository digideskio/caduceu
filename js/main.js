var Ego, Subconcious, TAFFY, criarTaffy, db, dbPath, fs, listaDeBancos, _i, _len, _ref;

fs = require('fs');

TAFFY = require("../bower_components/taffydb/taffy").taffy;

dbPath = '../db/';

Subconcious = [];

Ego = {
  list: fs.readdirSync(dbPath),
  store: function(nomeArq) {
    var conteudo, x, _i, _len;
    for (_i = 0, _len = Subconcious.length; _i < _len; _i++) {
      x = Subconcious[_i];
      if (nomeArq === x.origem) {
        conteudo = x.dados().get();
      }
    }
    return fs.writeFileSync(dbPath + nomeArq, JSON.stringify(conteudo));
  },
  find: function(nomeArq) {
    var indice, x, _i, _len;
    for (_i = 0, _len = Subconcious.length; _i < _len; _i++) {
      x = Subconcious[_i];
      if (nomeArq === x.origem) {
        indice = x.indice;
      }
    }
    if (indice === void 0) {
      return false;
    } else {
      return indice;
    }
  }
};

listaDeBancos = fs.readdirSync(dbPath);

criarTaffy = function(db) {
  var arq, novo, status;
  console.log('Lendo o arquivo %s', db);
  arq = db;
  status = fs.statSync(dbPath + db);
  if (status.isFile()) {
    db = fs.readFileSync(dbPath + db, 'utf8');
    novo = {};
    novo.origem = arq;
    novo.dados = TAFFY(JSON.parse(db));
    novo.indice = Subconcious.length;
    Subconcious.push(new Object(novo));
    return console.log(Ego.find('remedios.json'));
  }
};

_ref = Ego.list;
for (_i = 0, _len = _ref.length; _i < _len; _i++) {
  db = _ref[_i];
  criarTaffy(db);
}
