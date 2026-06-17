Este trabalho é inspirado em um projeto já existente. Créditos ao  Kalpesh Parmar por ter inspirado esse trabalho.




ONGConecta

O ONGConecta é uma plataforma Fullstack desenvolvida para conectar doadores, voluntários e organizações sociais, facilitando ações de solidariedade e apoio a comunidades em situação de vulnerabilidade.

Requisitos

Antes de executar o projeto, certifique-se de que os seguintes componentes estão instalados:

Node.js 20.x (LTS) (recomendado para compatibilidade com o projeto);
MongoDB Community Server instalado e em execução na máquina;
MongoDB Compass (opcional, apenas para visualizar o banco de dados).

Importante: o MongoDB precisa estar rodando antes de iniciar o backend.

Instalação
Backend

Abra um terminal na pasta backend e execute:

npm install
Frontend

Abra um terminal na pasta frontend e execute:

npm install
Executando o projeto
1. Iniciar o Backend

Entre na pasta server dentro do backend:

cd backend/server

Execute:

node index.js

O servidor deverá iniciar na porta configurada no arquivo .env (por padrão, 5000).

2. Iniciar o Frontend

Em outro terminal, entre na pasta frontend:

cd frontend

Execute:

npm run dev

Após isso, abra no navegador o endereço exibido pelo Vite (geralmente http://localhost:5173).

Banco de Dados (MongoDB)

Este projeto utiliza MongoDB com a biblioteca Mongoose para persistência de dados.

No arquivo .env do backend, configure a variável MONGO_URI. Exemplo para uso local:

MONGO_URI=mongodb://127.0.0.1:27017/NGOConnect
PORT=5000

Caso utilize MongoDB Atlas, substitua MONGO_URI pela string de conexão fornecida pelo serviço.

Tecnologias utilizadas
React
Vite
Node.js
Express.js
MongoDB
Mongoose
JavaScript
HTML5
CSS3
Observações
Recomenda-se utilizar Node.js 20 LTS para evitar problemas de compatibilidade.
O backend deve estar em execução antes de iniciar o frontend.
Caso ocorram erros de conexão com o banco de dados, verifique se o serviço do MongoDB está ativo e se a variável MONGO_URI está configurada corretamente.



################ Caso surja algum problema na execução local do projeto com o MONGODB
o projeto funcionará normalmente apenas com a integração FRONTend e BACKend, e poderá ser testado sem problemas.  apenas os dados criados nos metodos POST. não serão armazenados. devida a falta de conexão. mas ainda sim o projeto pode ser testado e avaliado.


