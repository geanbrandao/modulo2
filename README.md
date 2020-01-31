Para inicializar o projeto
$ yarn init -y

Para testar e rodar o arquivo que cria o servidor
$ node src/server.js

$ yarn add express

$ node ./src/server.js

$ yarn add sucrase nodemon -D

// usa depois de adicionar o sucrase mudar de require para import

$ yarn sucrase-node src/server.js


No arquivo nodemon.json usa essa estrutura para registrar o sucrase para todos os arquivos js antes de rodar o node
```
{
  "execMap": {
    "js": "node -r sucrase/register"
  }
}
```