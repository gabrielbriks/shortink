# Shortink

<div align="center">

![Node.js Version](https://img.shields.io/badge/Node.js-v20-green)
![Docker-compose Version](https://img.shields.io/badge/Docker--compose-v1.2.3-blue)
![Moraisgabriel](https://img.shields.io/badge/moraisgabriel-purple)

</div>

Um encurtador de URLs simples e performático, desenvolvido com **Node.js, Fastify e TypeScript**, com suporte a **Docker** e **PostgreSQL**. 

## Tecnologias Utilizadas

- Node.js
- Fastify
- TypeScript
- Zod (valid1ação de dados)
- PostgreSQL
- Redis
- Docker & Docker Compose

---

## 📦 Funcionalidades 

- Encurtar URLs longas em links curtos.
- Redirecionar URLs curtas para o destino original.
- Estatísticas de cliques (via cache/Redis).

---


## Como Utilizar

### Com Node.js localmente

1. Clone este repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd shortink
npm install npm run dev
```

## Estrutura do projeto

src/
 ├── routes/       # Rotas da aplicação
 ├── services/     # Regras de negócio
 ├── database/     # Configuração de banco
 ├── utils/        # Helpers e middlewares
 
## ✅ O que aprendi
- Uso do Fastify para alta performance.
- Validação robusta com Zod.
- Integração com PostgreSQL e Redis.
- Organização de APIs escaláveis com TypeScript.

### Dicas relevantes 

- Em [tsconfig/base](https://github.com/tsconfig/bases?tab=readme-ov-file), podemos visualizar a configuração base para o nosso tsconfig baseado na versão do node que estamos trabalahando. Dessa forma, só precisamos copiar e colar a configuração base em nosso tsconfig
- Extensão para dicionar sintax highlight na escrita dos comando sql : [Comment tagged templates](https://marketplace.visualstudio.com/items?itemName=bierner.comment-tagged-templates)
