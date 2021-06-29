# Prueba NodeJS

## Indicaiones de ejecución
   
1. Clonar el repositorio.
git clone https://github.com/AndresCode11/prueba_node_eglobal.git

2. instalar las dependencias.
npm install.

3. Instalar sequelize-cli
npm install -g sequelize-cli

     
4. Configurar acceso a base de datos.

### En caso de no tener una base de datos en mysql, crear una con nombre prueba_eglobal.
* Acceder al config/config.json
* poner las credenciales respectivas en development
          
5. Correr migraciones
npx sequelize-cli db:migrate

6. Correr seeders.
npx sequelize-cli db:seed:all
         
7. Ejecutar proyecto (puerto 3000)
node app.js
