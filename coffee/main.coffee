## Subconscious DB ##
## alpha 0.1 ##
## by @cav_dan ##

fs = require 'fs'
TAFFY = require("../bower_components/taffydb/taffy").taffy;
dbPath = '../db/'
Subconcious = [] #Um nível acima para o Taffy, pois posso lidar com vários arquivos e preciso ler todos no início do programa
Ego = {
	list : fs.readdirSync(dbPath) #array
	store : (nomeArq)-> #salva todas as informações da tabela em um arquivo
		#console.log(Subconcious[0].dados().get())
		conteudo = x.dados().get() for x in Subconcious when nomeArq is x.origem
		fs.writeFileSync dbPath + nomeArq, JSON.stringify(conteudo)
	find : (nomeArq)-> #encontra e retorna o índice do arquivo desejado
		indice = x.indice for x in Subconcious when nomeArq is x.origem
		if indice is undefined 
			false
		else
			indice
}

#listaDeBancos = fs.readdirSync(dbPath) #array

criarTaffy = (db) ->
	console.log('Lendo o arquivo %s', db)
	arq = db
	status = fs.statSync(dbPath + db)
	if status.isFile()
		db = fs.readFileSync(dbPath + db, 'utf8')
		novo = {}
		novo.origem = arq
		novo.dados = TAFFY(JSON.parse(db))
		novo.indice = Subconcious.length
		Subconcious.push new Object novo
		#console.log Subconcious[0].origem
		#console.log(Subconcious[0].dados('Daniel').get())
		console.log Ego.find('remedios.json')

criarTaffy(db) for db in Ego.list

