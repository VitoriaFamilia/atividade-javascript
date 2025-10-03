// atividade2.js

const usuarios = [
  {
    nome: "Carlos",
    idade: 28,
    email: "carlos@exemplo.com",
    cidade: "São Paulo",
    interesses: ["Música", "Tecnologia", "Fotografia"]
  },
  {
    nome: "Beatriz",
    idade: 22,
    email: "beatriz@exemplo.com",
    cidade: "Rio de Janeiro",
    interesses: ["Viagens", "Leitura", "Cinema"]
  }
];

// Desafio 1: Extraia e imprima apenas o nome e a cidade do primeiro usuário usando destructuring.
console.log("=== Desafio 1 ===");
const { nome, cidade } = usuarios[0];
console.log(`Nome: ${nome}, Cidade: ${cidade}`);
console.log("---");

// Desafio 2: Crie um novo array `usuariosDoNorte`, cópia do original, mas adicionando um novo usuário.
console.log("=== Desafio 2 ===");
const novoUsuario = {
  nome: "Ana",
  idade: 25,
  email: "ana@exemplo.com",
  cidade: "Manaus",
  interesses: ["Natação", "Culinária", "Artesanato"]
};

const usuariosDoNorte = [...usuarios, novoUsuario];
console.log("Usuários do Norte:");
console.log(usuariosDoNorte);
console.log("---");

// Desafio 3: Crie um novo objeto `beatrizAtualizada` com todas as infos originais, mas com o email "bia.dev@exemplo.com".
console.log("=== Desafio 3 ===");
const beatrizAtualizada = {
  ...usuarios[1],
  email: "bia.dev@exemplo.com"
};

console.log("Beatriz Atualizada:");
console.log(beatrizAtualizada);
console.log("---");

// [Para ir além] Desafio 4: Crie uma função `mostrarInteresses(usuario)` que use destructuring no parâmetro
console.log("=== Desafio 4 ===");
function mostrarInteresses({ nome, interesses }) {
  const interessesFormatados = interesses.join(", ");
  console.log(`${nome} tem interesse em: ${interessesFormatados}`);
}

console.log("Mostrar Interesses:");
usuarios.forEach(usuario => mostrarInteresses(usuario));
mostrarInteresses(novoUsuario);