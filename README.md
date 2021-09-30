# api-rest-login-jwt
--------------------------------------------------


yarn install

docker-compose up

[crie um banco chamado login, esta no MySQL do docker]

yarn prisma migrate dev

yarn dev


---------------------------------------------
# DESENVOLVIMENTO
---------------------------------------------
mkdir API-REST
cd  API-REST
yarn init -y
yarn add typescript @types/express ts-node-dev -D
yarn add express
yarn tsc --init

*Alterar tsconfig.json
/* Type Checking */
    "strict": false

*Configurar o start do server package.json
"scripts": {
    "dev": "ts-node-dev src/server.ts"
  },

----------------------------------------------------------
Install prisma (ORM)

yarn add prisma -D
yarn add @prisma/client
yarn prisma init 

//run migrate
yarn prisma migrate dev

-----------------------------------------------------------
Encriptar senhas

yarn add bcryptjs
yarn add @types/bcryptjs -D

-----------------------------------------------------------
Tratamento de errors

yarn add express-async-errors

-----------------------------------------------------------
Gerar Token JWT

yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
