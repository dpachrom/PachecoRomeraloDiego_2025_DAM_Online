FROM node:22.14-alpine3.20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de dependencias y luego instala las dependencias
COPY package*.json ./
RUN npm install
RUN npm install -g nodemon

# Copia el resto del código de la aplicación
COPY . .

# Expone el puerto en el que corre la aplicación
EXPOSE 5000

# Inicia la aplicación (asegúrate de que "npm run dev" esté definido en package.json)
CMD ["npm", "run", "dev"]
