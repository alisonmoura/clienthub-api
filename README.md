# ClientHub API

API para o ClientHub APP

## Setup do projeto

Primeiro instale as dependências do projeto:

```bash
npm install
```

Crie o arquivo `config.js` na raiz do projeto com os seguintes dados:

```js
module.exports = {
    db : {
        name: '',
        host: '',
        port: '',
        user: '',
        password: ''
    }
}
```

`db.name`: Nome do banco de dados

`db.host`: Host do banco de dados

`db.port`: Posta do servidor de banco de dados

`db.user`: Usuário do banco de dados

`db.password`: Senha do banco de dados


## Run do projeto

Para "rodar" o projeto execute o seguinte comando no terminal na pasta do projeto:

```bash
npm run dev
```