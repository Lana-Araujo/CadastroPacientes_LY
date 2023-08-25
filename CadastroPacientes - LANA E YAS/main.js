class Pacientes {
    constructor(nome, cpf, endereco, telefone, plano, historico) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.telefone = telefone;
        this.plano = plano;
        this.historico = [];
    }

    cadastrarPaciente() {
        console.log(`Ó seu nome é: ${this.nome}.
        Seu CPF é: ${this.cpf}.
        Seu endereço é: ${this.endereco}
        Seu telefone é: ${this.telefone}.
        Seu plano é: ${this.plano}.`)
    }

}