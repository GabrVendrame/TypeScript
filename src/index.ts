let x: number = 10;

x = 16;

console.log(x);

//tipos basicos
let nome: string = "Gabriel";
let idade: number = 20;
const isAdmin: boolean = true;

//objetos
const vetorNumeros: number[] = [1,2,3];

//tuplas
let tupla: [number, string, string[]]

//object literals
const user: {nome: string, idade: number} = {
    nome: "Gabriel",   
    idade: 20
}

//variavel any (aceita qualquer tipo) -> EVITE USAR!!
let variavel: any = 0
variavel = "gabriel"
variavel = true
variavel = [1, 2, 3]

//union type
let id: string | number = "10"
id = 200

//type alias
type meuTipo = number | string
const userId: meuTipo = 10

//enum
enum tamanho{
    P = "pequeno",
    M = "medio",
    G = "grande"
};

//literal types
let tipoLiteral: "tipoliteral"
//teste = "algumliteral"
tipoLiteral = "tipoliteral";

//funcoes
function soma(a: number, b: number){
    return a + b;
}

function digaOla(nome: string): string{
    return `Olá ${nome}`; 
}

function logger(mensagem: string): void{
    console.log(mensagem);
}
logger("teste!")

function saudacao(nome: string, salve?: string){
    if(salve){
        console.log(`Olá ${salve} ${nome}`);
        return;
    }
    console.log(`Olá ${nome}`);
}
saudacao("Zé");
saudacao("Zé", "PARABÉNS")

//interfaces
interface paramsOperacaoMatematica{
    numero1: number;
    numero2: number;
}

function somaNumeros(numeros: paramsOperacaoMatematica){
    return numeros.numero1 + numeros.numero2
}

function multNumeros(numeros: paramsOperacaoMatematica){
    return numeros.numero1 * numeros.numero2
}

//narrowing === checar tipos
function fazAlgo(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}`)
    }
    console.log(`Não foi passado um número!`)
}
fazAlgo(5)
fazAlgo(true)

//generics
function mostraCoisas<vetor>(array: vetor[]){
    vetorNumeros.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}
const vetor1 = [1,2,3]
const vetor2 = ["p","u","t","a"]
mostraCoisas(vetor1)
mostraCoisas(vetor2)

//classes
class Usuario{
    nome
    funcao
    isApproved
    constructor(nome: string, funcao: string, isApproved: boolean){
        this.nome = nome
        this.funcao = funcao
        this.isApproved = isApproved
    }
}

const Zé = new Usuario("Zé", "putinha", true)
console.log(Zé)

//interfaces em classes
interface Veiculo{
    marca: string
    mostraMarca(): void
}

class Carro implements Veiculo{
    marca
    rodas
    constructor(marca:string, rodas: number){
        this.marca = marca
        this.rodas = rodas
    }
    mostraMarca(): void {
        console.log(`A marca do carro é ${this.marca}`)
    }
}

const bravo = new Carro("Fiat", 4)

bravo.mostraMarca();

//herança
class SuperCarro extends Carro{
    motor;
    constructor(marca: string, rodas: number, motor: number){
        super(marca, rodas);
        this.motor = motor
    }
}

const mustang = new SuperCarro("Ford", 4, 2.0)
console.log(mustang)
mustang.mostraMarca();

//decorators
function parametrosBase(){
    return function <F extends {new (...args: any[]): {}}>(constructor: F){
        return class extends constructor{
            id = Math.random();
            criaData = new Date();
        }
    }
}

@parametrosBase()
class Pessoa{
    nome
    constructor(nome: string){
        this.nome = nome
    }
}

const Max = new Pessoa("Max")
console.log(Max)