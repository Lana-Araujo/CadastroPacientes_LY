
class Pacientes {
    constructor(nome, idade, endereco, telefone, plano, historico) {
        this.nome = nome;
        this.idade = idade;
        this.endereco = endereco;
        this.telefone = telefone;
        this.plano = plano;
        this.historico = [];
    }
    
    cadastrarPaciente() {
        const nome = document.getElementById("Nome").value;
        const idade = document.getElementById("Idade").value;
        const endereco = document.getElementById("Endereco").value;
        const plano = document.getElementById("plano").value;
        
        
        Swal.fire({
            icon: 'info',
            title: 'Dados do Paciente',
            html: `O seu nome é: ${nome}<br>
                   Sua idade é: ${idade}<br>
                   Seu endereço é: ${endereco}<br>
                   Seu plano é: ${plano}<br>`,
        });
    }
}

function cadastrarPaciente() {
    const paciente = new Pacientes();
    paciente.cadastrarPaciente();
}

