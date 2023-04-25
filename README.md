# nodejs-api-almost-without-libs

## Sobre

Esse é um projeto desenvolvido para cumprir o desafio 1 do módulo 1 do ignite Nodejs versão 2023.

O projeto consiste em desenvolver uma API para criar e gerenciar tarefas do tipo _todo list_.

Essa é uma API feita em Nodejs quase sem libs. A única lib utilizada foi o busboy para realizar o _parser_ de uma requisição de _Content-type_ **multipart/form-data** utilizada para realizar o upload de arquivo via formulário de upload de arquivos.

---

## Tabela de conteúdos

<!--ts-->

- [Sobre](#sobre)
- [Funcionalidades](#funcionalidades)
- [Endpoints](#endpoints)
- [Pré-requisitos e como rodar a aplicação](#pre-requisitos)
- [Autor](#autor)

<!--te-->

---

## Funcionalidades

- [x] Criar uma tarefa
- [x] Editar uma tarefa
- [x] Apagar uma tarefa
- [x] Marcar uma tarefa como completada
- [x] Listar as tarefas
- [x] Importar tarefas em massa de um arquivo csv enviado através de um formulário de upload de arquivos

---

## Endpoints

---

## /tasks

### POST: Criar uma tarefa

Rota utilizada para criar uma tarefa.

Body:

- JSON
- Campos
  - title: Título da tarefa.
  - description: Descrição da tarefa.

Campos obrigatórios: title e description.

Retornos:

- 200

  - Retorna a tarefa criada.

  ```json
  {
    "id": "3f6eab17-004d-4abf-80e7-54a3b7f50d4e",
    "title": "Comprar alho",
    "description": "Comprar alho no mercado",
    "completed_at": null,
    "created_at": "2023-04-21T22:07:42.515Z",
    "updated_at": null
  }
  ```

<br>

### GET: Listar as tarefas.

Rota utilizada para listar as tarefas criadas.

Query params:

- title: filtra as tarefas que possuam no título o termo especificado.
- description: filtra as tarefas que possuam na descrição o termo especificado.

Retornos:

- 200

  - Retorna a lista de tarefas.

  ```json
  [
    {
      "id": "5e6fb209-b853-4a9e-a384-d31a5698e71a",
      "title": "Comprar sabonete",
      "description": "Comprar sabonete no mercado",
      "completed_at": null,
      "created_at": "2023-04-21T18:53:16.058Z",
      "updated_at": "2023-04-21T21:45:02.217Z"
    },
    {
      "id": "538f735d-05fe-4b9e-a222-a44466308733",
      "title": "Comprar água",
      "description": "Comprar água no mercado",
      "completed_at": null,
      "created_at": "2023-04-21T18:53:51.568Z",
      "updated_at": "2023-04-21T21:45:29.414Z"
    },
    {
      "id": "0e374e8e-451c-4224-91c6-078a779323ea",
      "title": "Comprar cebola",
      "description": "Comprar cebola no mercado",
      "completed_at": null,
      "created_at": "2023-04-21T22:00:05.071Z",
      "updated_at": null
    },
    {
      "id": "3f6eab17-004d-4abf-80e7-54a3b7f50d4e",
      "title": "Comprar alho",
      "description": "Comprar alho no mercado",
      "completed_at": null,
      "created_at": "2023-04-21T22:07:42.515Z",
      "updated_at": null
    }
  ]
  ```

  <br>

---

## /tasks/:id

### PUT: Editar uma tarefa.

Rota utilizada para editar o `title` ou `description` de uma tarefa específica.

Body:

- JSON
- Campos
  - title: Título da tarefa.
  - description: Descrição da tarefa.

Campos opcionais: title e description.

Retornos:

- 204

<br>

### DELETE: Apagar uma tarefa.

Rota utilizada para apagar uma tarefa específica.

Retornos:

- 204

---

## /tasks/:id/complete

### PATCH: Marcar ou desmarcar uma tarefa como completada.

Rota utilizada para alterar a informação de tarefa completa de uma tarefa específica.

Retornos:

- 204

---

## /tasks/import/csv

### POST: Importar tarefas de um arquivo CSV.

Rota utilizada para importar tarefas de um arquivo CSV enviado através de um formulário de upload de arquivo.

Retornos:

- 200

  - Retorna uma mensagem.

  ```json
  {
    "message": "Tasks imported"
  }
  ```

<br>

---

<h2 id="pre-requisitos">Pré-requisitos e como executar a aplicação</h2>

Você vai precisar ter instalado no seu computador:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) (v18)
- [Visual Studio Code](https://code.visualstudio.com/) (opcional)

<br>

### Baixando o projeto

Para baixar esse projeto:

```
# Abra o seu terminal.

# Clone esse repositório para a sua máquina.

$ git clone https://github.com/HalexV/nodejs-api-almost-without-libs.git

```

<br>

### Instalando as dependências para modificar o projeto

```
# Entre na pasta do projeto.

$ cd pasta_do_projeto

# Rode o seguinte comando para instalar as dependências do projeto:

$ npm install ci

```

<br>

### Executando o projeto em modo de desenvolvimento

```
# Na raiz do projeto (local onde fica o package.json), execute:

$ npm run dev

# O servidor estará rodando em http://localhost:3000

# Para encerrar a execução em modo de desenvolvimento, pressione as teclas no seu terminal:

$ Ctrl+C ou Ctrl+D

```

---

# Autor

<div>
  <img src="https://avatars.githubusercontent.com/u/14897195?s=96&v=4" alt="Hálex Viotto Gomes" title="Hálex Viotto Gomes" />
  <p>Hálex Viotto Gomes</p>
</div>

<div>
  <a href="https://github.com/HalexV">
    <img src="https://img.shields.io/static/v1?label=GitHub&message=HalexV&color=181717&style=for-the-badge&logo=GitHub"/>
  </a>

  <a href="https://www.linkedin.com/in/halexviottogomes/">
    <img src="https://img.shields.io/static/v1?label=LinkedIn&message=Hálex Viotto Gomes&color=0A66C2&style=for-the-badge&logo=LinkedIn"/>
  </a>
</div>
