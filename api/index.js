const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const conteudos = {
  python: {
    nome: "Python",
    cor: "#4584b6",
    descricao: "Ideal para ciência de dados e automação.",
    variavel: "nome = 'Ana'",
    saida: "print(f'Olá {nome}')",
    tipos: ["int", "float", "str", "bool"]
  },
  javascript: {
    nome: "JavaScript",
    cor: "#f7df1e",
    descricao: "A linguagem essencial para o desenvolvimento web.",
    variavel: "let nome = 'Ana';",
    saida: "console.log(`Olá ${nome}`);",
    tipos: ["Number", "String", "Boolean", "Object"]
  },
  csharp: {
    nome: "C#",
    cor: "#9b4f96",
    descricao: "Poderosa para jogos (Unity) e sistemas enterprise.",
    variavel: "string nome = \"Ana\";",
    saida: "Console.WriteLine($\"Olá {nome}\");",
    tipos: ["int", "double", "string", "bool"]
  },
  java: {
    nome: "Java",
    cor: "#f89820",
    descricao: "Robusta, segura e multiplataforma.",
    variavel: "String nome = \"Ana\";",
    saida: "System.out.println(\"Olá \" + nome);",
    tipos: ["int", "double", "String", "boolean"]
  }
};

app.get('/api/conteudo/:lang', (req, res) => {
  const lang = req.params.lang.toLowerCase();
  const data = conteudos[lang];
  data ? res.json(data) : res.status(404).json({ erro: "Não encontrado" });
});

app.listen(3001, () => console.log("Servidor rodando na porta 3001"));