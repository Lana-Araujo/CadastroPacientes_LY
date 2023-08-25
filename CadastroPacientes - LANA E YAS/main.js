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
        console.log(`O seu nome é: ${this.nome}.
        Seu CPF é: ${this.cpf}.
        Seu endereço é: ${this.endereco}
        Seu telefone é: ${this.telefone}.
        Seu plano é: ${this.plano}.`)
    }

}

var paciente1 = new Pacientes("Lana",22223222, "rua airen", 99999, "particular")
paciente1.cadastrarPaciente();