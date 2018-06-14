# Menu
Menu com as opções de navegação do sistema.

Table of Contents
- Menu
  - Default
- Menu Expand Button
- Menu Container
- Menu Header, Menu Collapse Button & Imagem
- Menu Search
- Menu List
- Menu List Categories
- Menu Images
- Screens and Behaviors

## Menu
Onde todas as seções do menu são adicioadas, representado pela classe `.inv-menu`.
| Modificador        | Tipo           | Local  |
| ------------- |:-------------:| -----:|
| `.inv-menu`      | default | `div` |
| `.inv-menu--open`     | menu aberto      |   `div` |

``` html
<div class="inv-menu"><div>
<div class="inv-menu inv-menu--open"><div>
```
#### Default
Menu default. Em telas com menos de 500px ele aparece com os itens à mostra, em telas com 500px ou mais ele aparece por default com as descrições dos itens escondidas.
A versão 500px default não possui scroll quando os itens excedem o espaço do menu pois o mesmo foi projetado para abrir quando o usuário passar o mouse por cima (ou tocar qualquer parte do menu), ou seja, o usuário não irá de fato interagir com o menu 500px default, somente com as versões do menu aberto.

### Menu Expand Button
Botão para expandir o menu. Este só aparece em telas até 499px. Telas com ou mais de 500px terão o menu fixo,em sua forma fechada.
[Confira a documentação completa do Menu Expand Button](https://www.google.com)

``` html
<div class="inv-menu">
  <button class="inv-menu-expand-button">
    <i class="material-icons">menu</i>
  </button>
<div>

<div class="inv-menu inv-menu--open">
  <button class="inv-menu-expand-button">
    <i class="material-icons">menu</i>
  </button>
<div>
```

### Menu Container
Container das seções header, listas e footer do menu. O menu container é repre sentado pela classe `inv-menu__container`.
| Modificador        | Tipo           | Local  |
| ------------- |:-------------:| -----:|
| `.inv-menu__container`      | default | `div` |
| `.inv-menu__container--open`     | menu container aberto      |   `div` |

``` html
<div class="inv-menu">
  <button class="inv-menu-expand-button">
    <i class="material-icons">menu</i>
  </button>
  <div class="inv-menu__container"></div>
<div>

<div class="inv-menu inv-menu--open">
  <button class="inv-menu-expand-button">
    <i class="material-icons">menu</i>
  </button>
  <div class="inv-menu__container inv-menu__container--open"></div>
<div>
```

### Menu Header, Menu Collapse Button & Imagem
Header do menu. Nele nós temos o Collapse Button e uma imagem de escolha de quem implementar. O menu header é representado pela classe `.inv-menu-header` e fica sempre dentro do Menu Container.
  - Collapse Button: botão para fechar o menu. Este só aparece em telas até 499px.
  - Imagem: uma imagem de escolhe de quem implementa o menu. Pode ser a imagem da empresa, do sistema, do cliente que esta utilizando o sistema, etc.

[Confira a documentação completa do Menu Collapse Button](https://www.google.com)

``` html
<div class="inv-menu">
  <button class="inv-menu-expand-button">
    <i class="material-icons">menu</i>
  </button>
  <div class="inv-menu__container">
    <div class="inv-menu-header">
      <button class="inv-menu-collapse-button">
        <i class="material-icons">keyboard_arrow_left</i>
      </button>
      <picture>
        <source media="(min-width: 500px)" srcset="/assets/images/logo.png">
        <img src="/assets/images/logo-full.png" alt="Menu Logo" />
      </picture>
    </div>
  </div>
<div>
```

### Menu Search
O Menu Search é adicionado dentro do Menu Container, logo após Menu Header.
[Confira a documentação completa do Menu Search](https://www.google.com)



