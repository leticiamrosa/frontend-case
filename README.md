# 🚀 Frontend Case

Esse projeto está disponível para visualização através do [link](https://app-frontend-case.herokuapp.com)

Para rodar localmente o projeto é necessário fazer a configuração, para isso basta seguir os passos a seguir

----
### ⚙️ Setup

Para rodar esse projeto é preciso estar utilizando a versão `14x` do [node.](https://nodejs.org/ja/blog/release/v14.15.0/).


**Faça o clone deste repositorio:**

    git clone https://github.com/leticiamrosa/frontend-case.git

**Instale as dependencias:**

    yarn
  ---
  ### 📌 Rodando o projeto

Esse projeto possui os modos de desenvolvedor local e o de produção.

Dev:
**Para rodar o modo desenvolvedor local**

    yarn dev
A aplicação será aberta e ficara disponível na url http://localhost:3000/

---
Produção:
**Para rodar o modo de produção**

    yarn build && yarn start
   A aplicação será aberta e ficará disponível na url http://localhost:8080
 
---
### ✨ Testes
Para rodar os testes:

    yarn test
---

### ☘️ Backend

O repositório do backend que é utilizado nessa aplicação está [disponível aqui](https://github.com/leticiamrosa/api-bank). Para rodar o backend local, basta seguir os passos de configuração de ambiente no repositório e apontar a url local do backend no arquivo `.env`, substituindo o valor REACT_API_URL com o valor da url local do backend.