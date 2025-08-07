# Projeto Cora

Um projeto NestJS com PostgreSQL e Prisma para gerenciamento de usuários.

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Docker](https://www.docker.com/get-started) e [Docker Compose](https://docs.docker.com/compose/)
- [Git](https://git-scm.com/)

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/FCPippi/ProjetoCora.git
cd ProjetoCora
```

### 2. Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes credenciais:

```env
DATABASE_URL="postgresql://cora:cora@localhost:5432/projeto_cora"
```

### 3. Instalar dependências

```bash
npm install
```

### 4. Subir os serviços com Docker

```bash
docker-compose up -d
```

Este comando irá:
- Criar e iniciar o container do PostgreSQL
- Configurar o banco de dados com as credenciais especificadas
- Expor o banco na porta 5432

### 5. Executar as migrações do banco

```bash
npx prisma migrate dev --name init
```

Este comando irá:
- Aplicar as migrações do Prisma
- Criar as tabelas no banco de dados
- Gerar o Prisma Client

## 🏃‍♂️ Executando a aplicação

### Modo de desenvolvimento

```bash
npm run start:dev
```

A aplicação estará disponível em `http://localhost:3000`

### Modo de produção

```bash
# Build da aplicação
npm run build

# Executar em produção
npm run start:prod
```

## 🗄️ Banco de Dados

### Prisma Studio

Para visualizar e gerenciar os dados através de uma interface gráfica:

```bash
npm run prisma:studio
```

Acesse `http://localhost:5555` para usar o Prisma Studio.

### Scripts do Prisma disponíveis

```bash
# Gerar o Prisma Client
npm run prisma:generate

# Executar migrações
npm run prisma:migrate

# Resetar o banco de dados
npm run prisma:reset

# Abrir Prisma Studio
npm run prisma:studio
```

## 🐳 Docker

### Scripts Docker disponíveis

```bash
# Subir todos os serviços
npm run docker:up

# Parar todos os serviços
npm run docker:down

# Build das imagens
npm run docker:build

# Ver logs dos containers
npm run docker:logs
```

## 📚 API Endpoints

### Usuários

- `GET /users` - Listar todos os usuários
- `GET /users/:id` - Buscar usuário por ID
- `POST /users` - Criar novo usuário
- `PATCH /users/:id` - Atualizar usuário
- `DELETE /users/:id` - Deletar usuário

### Exemplo de criação de usuário

```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{
    "email": "usuario@exemplo.com",
    "name": "Nome do Usuário"
  }'
```

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes em modo watch
npm run test:watch

# Testes com coverage
npm run test:cov

# Testes e2e
npm run test:e2e
```

## 🛠️ Tecnologias Utilizadas

- **NestJS** - Framework Node.js
- **PostgreSQL** - Banco de dados relacional
- **Prisma** - ORM e gerenciador de banco de dados
- **Docker** - Containerização
- **TypeScript** - Linguagem de programação
- **Class Validator** - Validação de dados
- **Class Transformer** - Transformação de objetos

## 📁 Estrutura do Projeto

```
src/
├── app.module.ts          # Módulo principal da aplicação
├── main.ts               # Arquivo de entrada da aplicação
├── prisma/               # Configuração do Prisma
│   ├── prisma.module.ts
│   └── prisma.service.ts
└── users/                # Módulo de usuários
    ├── dto/              # Data Transfer Objects
    ├── users.controller.ts
    ├── users.module.ts
    └── users.service.ts
```

## 🚨 Troubleshooting

### Erro de conexão com o banco

1. Verifique se o Docker está rodando
2. Confirme se o container do PostgreSQL está ativo:
   ```bash
   docker ps
   ```
3. Verifique se as credenciais no `.env` estão corretas

### Erro nas migrações

1. Resetar o banco de dados:
   ```bash
   npm run prisma:reset
   ```
2. Executar as migrações novamente:
   ```bash
   npx prisma migrate dev --name init
   ```

### Porta já em uso

Se a porta 3000 ou 5432 já estiver em uso, você pode:
- Parar o serviço que está usando a porta
- Alterar a porta no `docker-compose.yml` (para PostgreSQL)
- Definir uma porta diferente para a aplicação NestJS

## 📄 Licença

Este projeto está sob a licença UNLICENSED.

## 👨‍💻 Autor

FCPippi

---

Para mais informações, consulte a [documentação do NestJS](https://docs.nestjs.com/) e a [documentação do Prisma](https://www.prisma.io/docs/).
