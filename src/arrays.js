class Estudante {
    constructor(nome, sobrenome, nota){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nota= nota;
}
}

const aluno1 = new Estudante("Pedro","Sousa",8);
const aluno2 = new Estudante("Maria", "Greever", 10);
const aluno3 = new Estudante("Arthur", "Oliveira",5);
const aluno4 = new Estudante("Anna", "Lopes", 9)
//console.log(aluno1)
//console.log(aluno2)
//console.log(aluno3)

const grupo5A = [aluno1, aluno2, aluno3, aluno4];
//console.log(...grupo5A)

const alunosAprovados = grupo5A.filter(function(item){
    return item.nota >= 6;

})

console.log(...alunosAprovados)