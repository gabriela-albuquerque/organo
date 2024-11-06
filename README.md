# Organo - Organograma de Colaboradores

Organo é um projeto desenvolvido em React para organizar colaboradores de uma escola de tecnologia. Este organograma permite cadastrar colaboradores com informações como nome, cargo, foto, e exibi-los em cards organizados por time. Cada time possui uma cor de destaque para melhor visualização. Este projeto foi meu primeiro utilizando React e uma ótima oportunidade para aprimorar especialmente conhecimentos em manipulação de estado, passagem de props e renderização condicional.

## Funcionalidades do Projeto

- **App.js**: Componente principal do projeto, que mantém o estado dos colaboradores e passa os dados para os componentes filhos.
- **Banner.js**: Exibição de um banner fixo no topo da página.
- **Formulario.js**: Componente responsável pelo cadastro de nome, cargo, foto e time dos colaboradores. Recebe props como os times e a função para adicionar novos colaboradores.
- **Time.js**: Componente que exibe cada time, aplicando cor de fundo e cor principal, configuradas de forma dinâmica.
- **Rodape.js**: Componente fixo exibido ao final da página.

## Aprendizados

Durante o desenvolvimento do Organo, foram aplicados e aprendidos vários conceitos importantes de React, incluindo:

- **Passagem de `props` para Componentes**: Utilização de `props` para transmitir dados entre componentes. Por exemplo, o formulário recebe a lista de times e uma função para adicionar colaboradores ao estado do componente pai.

- **Uso de `children` para Aninhar Elementos**: Estruturação do componente `Formulario` de modo que elementos filhos sejam passados dinamicamente para o componente.

- **Manipulação de Eventos com `onSubmit`**: Utilização do evento `onSubmit` para capturar e processar os dados do formulário quando o usuário cadastra um novo colaborador.

- **Manipulação e Transformação de Arrays**: Criação de uma estrutura de dados em array para os times e aplicação de métodos de array para transformar e filtrar os dados. Isso incluiu a utilização de `map` para transformar a lista de times em uma lista de nomes, e `filter` para exibir colaboradores específicos em cada time.

- **Filtragem de Dados**: Filtragem dos colaboradores para exibir apenas aqueles pertencentes a cada time específico. Isso foi feito utilizando `filter` com uma condição baseada no time selecionado.

- **Renderização Condicional**: Exibição dos times e colaboradores de forma condicional, ou seja, os times são exibidos somente quando têm colaboradores cadastrados.

## Tecnologias Utilizadas

React, JavaScript ES6 e CSS.
