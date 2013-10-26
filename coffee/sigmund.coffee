##Sigmund##

Sigmund = require('commander')
Sigmund.diz = new Sigmund.Command()

console.log Sigmund.diz

Sigmund.version('0.0.1')

logo = "\n
,---.o                        |\n
`---..,---.,-.-..   .,---.,---|\n
    |||   || | ||   ||   ||   |\n
`---'``---|` ' '`---'`   '`---'\n
      `---'\n
"

console.log(logo)

console.log 'Sigmund v%s', Sigmund.version()
console.log Sigmund

menu01 = ['Novo paciente', 'Listar pacientes', 'Sair']

Sigmund.choose menu01, (i)->
	switch i
		when 1 then Sigmund.criar('pacientes.js')
		when 2 then Sigmund.listar('pacientes.js')
		when 3
			console.log('Auf wiedersehen!')
			process.stdin.destroy()
		else console.log('Tente novamente')