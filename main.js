function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.descricao = function() {
    return `Este é um animal chamado ${this.nome}.`;
}
function Cachorro(nome, raca) {
    Animal.call(this, nome);
    this.raca = raca;
}

Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.constructor = Cachorro;


Cachorro.prototype.descricao = function() {
    return `Este é um cachorro chamado ${this.nome} e sua raça é ${this.raca}.`;
};

function Gato(nome, cor) {
    Animal.call(this, nome);
    this.cor = cor;
}
Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.constructor = Gato;

Gato.prototype.descricao = function() {
    return `Este é um gato chamado ${this.nome} e sua cor é ${this.cor}.`;
};
const cachorro1 = new Cachorro("Rex", "Labrador");
const cachorro2 = new Cachorro("Fido", "Beagle");
const gato1 = new Gato("Mittens", "preto");


console.log(cachorro1.descricao());
console.log(cachorro2.descricao());
console.log(gato1.descricao());