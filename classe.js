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
    editCurso(nome){
        this.cursos.forEach(e => {
            if(nome==e){
                return this.cursos=e
            }
        })
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

let novo = new Curso();

novo.addCurso('Ciencia');
novo.status();
novo.editCurso('Cienciass');
novo.status();