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
[Confira a documentação completa do Menu Expand Button](/components/detail/menu-expand-button)

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

[Confira a documentação completa do Menu Collapse Button](/components/detail/menu-collapse-button)

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
[Confira a documentação completa do Menu Search](/components/detail/menu-search--default)

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

    <div class="inv-menu__search">
      <div class="inv-menu-search ">
        <input id="" name="" type="text" class="inv-input " placeholder="Ctrl+k para buscar" />
        <label class="inv-menu-search__label" for="">
          <i class="material-icons">search</i>
        </label>
      </div>
      <div class="inv-menu__search-tip">Ctrl+k</div>
    </div>
  </div>
<div>
```

### Menu List
O Menu List é adicionando também dentro do menu container, abaixo do Menu Search. Nele são exibidos os itens de navegação do menu.

[Confira a documentação completa do Menu List](/components/detail/menu-list--default)

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

    <div class="inv-menu__search">
      <div class="inv-menu-search ">
        <input id="" name="" type="text" class="inv-input " placeholder="Ctrl+k para buscar" />
        <label class="inv-menu-search__label" for="">
          <i class="material-icons">search</i>
        </label>
      </div>
      <div class="inv-menu__search-tip">Ctrl+k</div>
    </div>

    <div class="inv-menu__list">
      <div class="inv-menu-list ">
        <a href="#" class="inv-menu-list_item">
          <i class="material-icons">wifi</i>
          <span>Profile</span>
        </a>
          <a href="#" class="inv-menu-list_item">
          <i class="material-icons">face</i>
          <span>Pontos de Venda</span>
        </a>
          <a href="#" class="inv-menu-list_item">
          <i class="material-icons">search</i>
          <span>Métricas</span>
        </a>
          <a href="#" class="inv-menu-list_item">
          <i class="material-icons">people</i>
          <span>Acessos Externos</span>
        </a>
      </div>
    </div>
  </div>
<div>
```

### Menu List Categorie
O Menu List Categorie representa a versão aberta do menu após o usuário selecionar algum dos itens do Menu List.

[Confira a documentação completa do Menu List Categorie](/components/detail/menu-list-categorie)

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

    <div class="inv-menu__search">
      <div class="inv-menu-search ">
        <input id="" name="" type="text" class="inv-input " placeholder="Ctrl+k para buscar" />
        <label class="inv-menu-search__label" for="">
          <i class="material-icons">search</i>
        </label>
      </div>
      <div class="inv-menu__search-tip">Ctrl+k</div>
    </div>

    <div class="inv-menu__list">
      <div class="inv-menu-list-categorie-container">
        <a href="#" class="inv-menu-list-categorie-container__back-button">
          <i class="material-icons">keyboard_arrow_left</i>
        </a>
      <div class="inv-menu-list-categorie">
        <div class="inv-menu-list-categorie__title">
          <i class="material-icons">people</i><span>Colaboradores</span>
        </div>
          <a href="#" class="inv-menu-list-categorie__item">Colaboradores</a>
          <a href="#" class="inv-menu-list-categorie__item">Afastamento</a>
          <a href="#" class="inv-menu-list-categorie__item">Perfil de Acesso</a>
          <a href="#" class="inv-menu-list-categorie__item">Jornada de Trabalho</a>
          <div class="inv-menu-list-categorie__separator">Relatórios</div>
          <a href="#" class="inv-menu-list-categorie__item">Histórico de Contratação de Colaboradores</a>
        </div>
      </div>
    </div>
  </div>
<div>
```
### Menu Images
O Menu permite a adição de duas imagens: uma imagem de logo no topo e uma no bottom.

#### Imagem Topo
A imagem de topo do menu fica dentro do container `.inv-menu-header`.

#### Imagem Bottom
A imagem de bottom do menu fica dentro da tag `<picture>`, com a classe `.inv-menu__brand`. Esta (imagem bottom) fica logo após os componentes de lista.

``` html
<picture class="inv-menu__brand">
  <source media="(min-width: 500px)" srcset="/assets/images/brand.png">
  <img src="/assets/images/brand-full.png" alt="Menu Logo" />
</picture>
```
### Screens and Behaviors

#### Até 499px
- O Menu Default, até 499px exibe apenas o Menu Expand Button
- Ao utilizar o touch (no mobile) ou hover no desktop, o meno é aberto ocupando todos os 499px.
- Se os itens não couberem na tela, um scroll é adicionado para o usuário poder realizar a navegação.
- Nesta versão, o componente Menu Collapse Button é exibido para o usuário poder fechar o menu.

#### Mais de 499px
- O Menu Default, com mais de 499px é exibido em sua forma fechado, mostrando apenas os ícones do menu,
- Ao passar o mouse por cima (ou touch em telas com mais de 499px) o menu é expandido.
- Ao remover o mouse ou clicar/tocar em algum item, o menu é fechado.
