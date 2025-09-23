# Autenticação com Firebase (E-mail/Senha e Google)

Este projeto implementa um sistema de login e cadastro utilizando o
Firebase Authentication e armazenamento de dados de usuários no
**Firestore**.

------------------------------------------------------------------------

## Tecnologias utilizadas

-   [Firebase Authentication](https://firebase.google.com/docs/auth)
-   [Firebase Firestore](https://firebase.google.com/docs/firestore)
-   HTML, CSS e JavaScript

------------------------------------------------------------------------

## Funcionalidades

-   Criar conta com e-mail e senha\
-   Fazer login com e-mail e senha\
-   Fazer login com Google (conta Gmail)\
-   Salvar informações do usuário no Firestore\
-   Redirecionar para a homepage.html após login/cadastro

------------------------------------------------------------------------

## Como funciona

### 1. Cadastro com e-mail e senha

-   O usuário informa nome, sobrenome, e-mail e senha no formulário
    de cadastro.

-   É chamado o método do Firebase:

    ``` js
    createUserWithEmailAndPassword(auth, email, password)
    ```

-   Se o cadastro for bem-sucedido:

    -   O usuário é autenticado.

    -   Os dados (nome, sobrenome e e-mail) são salvos no Firestore

------------------------------------------------------------------------

### 2. Login com e-mail e senha

-   O usuário informa e-mail e senha no formulário de login.

-   É chamado o método do Firebase:

    ``` js
    signInWithEmailAndPassword(auth, email, password)
    ```

-   Se as credenciais forem válidas:

    -   O usuário é autenticado.

    -   O ID do usuário é salvo no localStorage:

    -   O usuário é redirecionado para homepage.html.

------------------------------------------------------------------------

### 3. Login com Google

-   O usuário clica no ícone do Google.

-   É chamado o método do Firebase com GoogleAuthProvider:

    ``` js
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    ```

-   Se o login for bem-sucedido:

    -   O usuário é autenticado com a conta Google.
    -   O UID é salvo no localStorage.
    -   O usuário é redirecionado para homepage.html.

------------------------------------------------------------------------

## Estrutura de Arquivos

    .
    ├── index.html          # Página de login/cadastro
    ├── firebaseauth.js     # Lógica de autenticação com Firebase
    ├── style.css           # Estilização da interface
    ├── homepage.html       # Página inicial após login
    └── README.md           # Documentação do projeto

------------------------------------------------------------------------

## Conclusão

Este projeto demonstra de forma simples como integrar Firebase
Authentication em uma aplicação web, permitindo autenticação tanto por
e-mail/senha quanto pelo Google.
