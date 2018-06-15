## Menu List Categorie
O Menu List Categorie é exibido após o usuário interagir com algum dos itens de navegação do Menu List.

### Menu List Categorie - Container
O Container é responsável por conter os itens do componente.
Sua classe principal é `.inv-menu-list-categorie-container`.

``` html
<div class="inv-menu-list-categorie-container"></div>
```

### Menu List Categorie - Back Button
Botão para retornar ao estado anterior do menu.
Sua classe principal é `.inv-menu-list-categorie-container__back-button`.

``` html
<a href="#" class="inv-menu-list-categorie-container__back-button">
  <i class="material-icons">keyboard_arrow_left</i>
</a>
```

### Menu List Categorie - Lista de itens
Lista com os itens que serão exibidos ao usuário.
Sua classe principal é `.inv-menu-list-categorie`.

``` html
<div class="inv-menu-list-categorie-container">
  <div class="inv-menu-list-categorie"></div>
</div>
```

### Menu List Categorie - Título de Categoria
Título da categoria que o usuário selecionou.
Sua classe principal é `.inv-menu-list-categorie__title`.

``` html
<div class="inv-menu-list-categorie-container">
  <div class="inv-menu-list-categorie">
    <div class="inv-menu-list-categorie__title">
      <i class="material-icons">people</i><span>Colaboradores</span>
    </div>
  </div>
</div>
```
### Menu List Categorie - Itens da Categoria
Itens da categoria selecionada pelo usuário.
Sua classe principal é `.inv-menu-list-categorie__item`.

``` html
<div class="inv-menu-list-categorie-container">
  <div class="inv-menu-list-categorie">
    <div class="inv-menu-list-categorie__title">
      <i class="material-icons">people</i><span>Colaboradores</span>
    </div>
    <a href="#" class="inv-menu-list-categorie__item">Colaboradores</a>
  </div>
</div>
```

### Menu List Categorie - Itens Separator
Separador de itens da categoria.
Sua classe principal é `.inv-menu-list-categorie__separator`.

``` html
<div class="inv-menu-list-categorie-container">
  <div class="inv-menu-list-categorie">
    <div class="inv-menu-list-categorie__title">
      <i class="material-icons">people</i><span>Colaboradores</span>
    </div>
    <a href="#" class="inv-menu-list-categorie__item">Colaboradores</a>
    <div class="inv-menu-list-categorie__separator">Relatórios</div>
    <a href="#" class="inv-menu-list-categorie__item">Histórico de Contratação de Colaboradores</a>
  </div>
</div>
```
