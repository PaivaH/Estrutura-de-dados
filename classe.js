class Curso{
    constructor(){
        this.cursos = []
    }
    addCurso(nome){
        return this.cursos.push(nome)
    }
    status(){
        console.log(this.cursos)
    }
    editCurso(nomeAntigo, NovoNome){
        for( let i in this.cursos){
            if(this.cursos[i] == nomeAntigo){
                return this.cursos[i] = NovoNome;
            }
        }
    }
    delCurso(nome){
        return this.cursos.splice(this.cursos.indexOf(nome), 1);
    }
}

class Turma extends Curso{
    constructor(nome){
        super();
        this.nome = nome;
    }
}

class Bloco extends Turma { 

}

class Disciplina extends Bloco{

}
