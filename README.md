# Shortink

<div align="center">

![Node.js Version](https://img.shields.io/badge/Node.js-v20-green)
![Docker-compose Version](https://img.shields.io/badge/Docker--compose-v1.2.3-blue)
![Moraisgabriel](https://img.shields.io/badge/moraisgabriel-purple)

</div>

Shortink é um backend simples de encurtador de URLs que utiliza tecnologias modernas e eficientes para oferecer um serviço rápido e confiável.

## Tecnologias Utilizadas

- **Fastify**: Framework web rápido e eficiente para Node.js
- **Typescript**: Superset de JavaScript que adiciona tipagem estática e outros recursos
- **Docker-compose**: Ferramenta para definir e executar aplicativos Docker de vários contêineres
- **PostgreSQL**: Banco de dados relacional usado para armazenar os dados dos links gerados
  - Para construção de queries SQL, esta lib utiliza o [postgres-js](https://github.com/porsager/postgres)
- **Redis**: Banco de dados em memória utilizado para armazenar dados de analytics dos links
- **Zod**: Biblioteca para validação de dados em TypeScript
- **TSX**: Transpiler para arquivos TypeScript

## Como Utilizar

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale todas as dependencias

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse o servidor em http://localhost:3000

## Novidades aprendidas

- Dentro do repositorio do [tsconfig/base](https://github.com/tsconfig/bases?tab=readme-ov-file), podemos visualizar a configuração base para o nosso tsconfig baseado na versão do node que estamos trabalahando. Dessa forma, só precisamos copiar e colar a configuração base em nosso tsconfig

- Extensão para dicionar sintax highlight na escrita dos comando sql : [Comment tagged templates](https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates)

  - Para utilizarmos, basta adicionarmos um pequeno comentário anstes dos acentos de crase, como no exemplo abaixo:

  ```typescript
  async function setup() {
    await sql/*sql*/ `CREATE TABLE IF NOT EXISTS my_table`;
  }
  ```

  Dessa forma teremos a ajuda do editor para escrevermos nossos sql dentro do typescript, de forma simples.
