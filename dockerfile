# Use uma imagem base do Node.js
FROM node:20.11.1

# Defina o diretório de trabalho na imagem
WORKDIR /api

# Copie o package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências
RUN npm install --production

# Copie o restante do código e o .env para o contêiner
COPY . .

# Exponha a porta definida na variável de ambiente ou a padrão 3333
EXPOSE 3333

# Defina a variável de ambiente para a porta (caso não seja passada de fora)
ENV PORT=3333

# Comando para iniciar a API
CMD ["npm", "start"]
