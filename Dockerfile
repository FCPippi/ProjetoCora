# Use Node.js oficial como imagem base
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm ci --only=production

# Copiar código fonte
COPY . .

# Gerar Prisma Client
RUN npx prisma generate

# Compilar a aplicação
RUN npm run build

# Expor porta
EXPOSE 3000

# Comando para iniciar aplicação
CMD ["npm", "run", "start:prod"]
