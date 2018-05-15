## List
Utilizadas nos campos de select

Contendo a classe base `.inv-list`, e elementos com a classe `.inv-list__item`

### Default List
Lista de itens padrão para seleção

``` html
<div class="inv-list">
  <a href="#" class="inv-list__item">
    <span>#Opção 1</span>
  </a>
</div>

<div class="inv-list">
  <label for="1" class="inv-list__item inv-list__item--addon">
    <input id="1" type="checkbox" class="inv-checkbox" />
    <span>
      #Meu item da lista
    </span>
  </label>
</div>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-list__item--selected`](#selected) 	| Modifica o item da lista para o mesmo estar selecionado |
| [`.inv-list__item--addon`](#addon-item) 	| Modifica o item da lista para inserir um novo componente na lateral esquerda	|
| [`.inv-list__item--check-all`](#check-all) 	| Modifica o item da lista, seleção de itens internos	|

### Selected item
Modifica o item da lista para o mesmo estar selecionado

``` html
<div class="inv-list">
  <a href="#" class="inv-list__item inv-list__item--selected">
    <span>#Opção 1</span>
  </a>
</div>
```
### Addon item
Modifica o item da lista para inserir um novo componente na lateral esquerda

``` html
<div class="inv-list">
  <label for="1" class="inv-list__item inv-list__item--addon">
    <input id="1" type="checkbox" class="inv-checkbox" />
    <span>
      #Meu item da lista 1
    </span>
  </label>
  <label for="2" class="inv-list__item inv-list__item--addon">
    <input id="2" type="checkbox" class="inv-checkbox" />
    <span>
      #Meu item da lista 2
    </span>
  </label>
</div>
```
 ### Check all
 Modifica o item da lista, seleção de itens internos

``` html
<div class="inv-list">
  <label for="selecionarTodos" class="inv-list__item inv-list__item--addon inv-list__item--check-all">
    <input id="selecionarTodos" type="checkbox" class="inv-checkbox" />
    <span>Selecionar todos </span>
  </label>
  <label for="1" class="inv-list__item inv-list__item--addon">
    <input id="1" type="checkbox" class="inv-checkbox" />
    <span>
      #Meu item da lista 1
    </span>
  </label>
  <label for="2" class="inv-list__item inv-list__item--addon">
    <input id="2" type="checkbox" class="inv-checkbox" />
    <span>
      #Meu item da lista 2
    </span>
  </label>
</div>
```
