"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 16;
console.log(x);
let nome = "Gabriel";
let idade = 20;
const isAdmin = true;
const vetorNumeros = [1, 2, 3];
let tupla;
const user = {
    nome: "Gabriel",
    idade: 20
};
let variavel = 0;
variavel = "gabriel";
variavel = true;
variavel = [1, 2, 3];
let id = "10";
id = 200;
const userId = 10;
var tamanho;
(function (tamanho) {
    tamanho["P"] = "pequeno";
    tamanho["M"] = "medio";
    tamanho["G"] = "grande";
})(tamanho || (tamanho = {}));
;
let tipoLiteral;
tipoLiteral = "tipoliteral";
function soma(a, b) {
    return a + b;
}
function digaOla(nome) {
    return `Olá ${nome}`;
}
function logger(mensagem) {
    console.log(mensagem);
}
logger("teste!");
function saudacao(nome, salve) {
    if (salve) {
        console.log(`Olá ${salve} ${nome}`);
        return;
    }
    console.log(`Olá ${nome}`);
}
saudacao("Zé");
saudacao("Zé", "PARABÉNS");
function somaNumeros(numeros) {
    return numeros.numero1 + numeros.numero2;
}
function multNumeros(numeros) {
    return numeros.numero1 * numeros.numero2;
}
function fazAlgo(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
    }
    console.log(`Não foi passado um número!`);
}
fazAlgo(5);
fazAlgo(true);
function mostraCoisas(array) {
    vetorNumeros.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const vetor1 = [1, 2, 3];
const vetor2 = ["p", "u", "t", "a"];
mostraCoisas(vetor1);
mostraCoisas(vetor2);
class Usuario {
    constructor(nome, funcao, isApproved) {
        this.nome = nome;
        this.funcao = funcao;
        this.isApproved = isApproved;
    }
}
const Zé = new Usuario("Zé", "putinha", true);
console.log(Zé);
class Carro {
    constructor(marca, rodas) {
        this.marca = marca;
        this.rodas = rodas;
    }
    mostraMarca() {
        console.log(`A marca do carro é ${this.marca}`);
    }
}
const bravo = new Carro("Fiat", 4);
bravo.mostraMarca();
class SuperCarro extends Carro {
    constructor(marca, rodas, motor) {
        super(marca, rodas);
        this.motor = motor;
    }
}
const mustang = new SuperCarro("Ford", 4, 2.0);
console.log(mustang);
mustang.mostraMarca();
function parametrosBase() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.criaData = new Date();
            }
        };
    };
}
let Pessoa = class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
};
Pessoa = __decorate([
    parametrosBase()
], Pessoa);
const Max = new Pessoa("Max");
console.log(Max);
