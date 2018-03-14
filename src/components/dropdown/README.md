## Dropdown
Campos de seleção de itens

Tendo a classe base `.inv-dropdown`, o dropdown é formado por:

- Conteúdo - `inv-dropdown__content`
  - Input - `inv-input`
  - Input icon - `inv-input-icon`
  - Contador de valores selecionados - `inv-dropdown-counter` (Opcional)
  - Box de listagem - `inv-dropdown__box`
    - Caixa de texto de ação - `inv-dropdown-action` (Opcional)
    - Componente de listagem - `inv-list`
- Campo para limpar valores - `clear-input`

### Default Dropdown

``` html
<div class="inv-dropdown">
  <div class="inv-dropdown__content">
    <input id="" name="" type="text" class="inv-input " placeholder="Selecione uma cidade" />
    <i class="material-icons inv-input-icon">arrow_drop_down</i>

    <div class="inv-dropdown__box">
      <!-- Caixa de texto de ação / Listagem -->
    </div>
  </div>
  <button class="inv-clear-input">
    <i class="material-icons">clear</i>
  </button>
</div>
```

### Dropdown com campo de ação

Utilizado para exibir textos indicativos ao invés da listagem (ex: texto de nenhum resultado encontrado)

``` html
<!-- Caixa de ação -->
<div class="inv-dropdown-action">
  <div class="inv-dropdown-action__result">
    Nenhum resultado cadastrado.
  </div>
  <div class="inv-dropdown-action__action">
    Aperte Enter para adicionar um novo.
  </div>
</div>
```

``` html
<!-- Utilização no dropdown -->
<div class="inv-dropdown">
  <div class="inv-dropdown__content inv-dropdown__content--open">
    <input id="" name="" type="text" class="inv-input inv-input--focused" placeholder="Selecione uma cidade" />
    <i class="material-icons inv-input-icon">arrow_drop_down</i>

    <div class="inv-dropdown__box">
      <!-- Caixa de ação -->
      <div class="inv-dropdown-action">
        <div class="inv-dropdown-action__result">
          Nenhum resultado cadastrado.
        </div>
        <div class="inv-dropdown-action__action">
          Aperte Enter para adicionar um novo.
        </div>
      </div>
    </div>
  </div>

  <button class="inv-clear-input">
    <i class="material-icons">clear</i>
  </button>
</div>
```

### Dropdown com contador

Utilizado para exibir a contagem de itens selecionados

``` html
<div class="inv-dropdown-counter">3/10</div>
```

``` html
<!-- Utilização no dropdown -->
<div class="inv-dropdown">
  <div class="inv-dropdown__content inv-dropdown__content--open">
    <input id="" name="" type="text" class="inv-input inv-input--focused" placeholder="Ex: 000-00-000" />
    <i class="material-icons inv-input-icon">arrow_drop_down</i>

    <!-- Contador -->
    <div class="inv-dropdown-counter">3/10</div>

    <div class="inv-dropdown__box">
      <!-- Caixa de texto de ação / Listagem -->
    </div>
  </div>
  <button class="inv-clear-input">
    <i class="material-icons">clear</i>
  </button>
</div>
```

### Dropdown com listagem de itens

Basta utilizar o componente de listagem

``` html
<!-- Listagem simples -->
<div class="inv-list">
  <a href="#" class="inv-list__item">
    <span>#1 Opção</span>
  </a>
  <a href="#" class="inv-list__item">
    <span>#2 Opção</span>
  </a>  
</div>

<!-- Listagem com checkboxes -->
 <div class="inv-list">
  <label class="inv-list__item inv-list__item--addon inv-list__item--check-all">
    <input type="checkbox" class="inv-checkbox"  />
    <span>Selecionar todos </span>
  </label>

  <label class="inv-list__item inv-list__item--addon">
    <input type="checkbox" class="inv-checkbox"  />
    <span>#1 Opção</span>
  </label>

  <label class="inv-list__item inv-list__item--addon">
    <input type="checkbox" class="inv-checkbox"  />
    <span>#2 Opção</span>
  </label>
</div>
```

``` html
<!-- Utilização no dropdown -->
<div class="inv-dropdown">
  <div class="inv-dropdown__content inv-dropdown__content--open">
    <input id="" name="" type="text" class="inv-input inv-input--focused" placeholder="Ex: 000-00-000" />
    <i class="material-icons inv-input-icon">arrow_drop_down</i>

    <div class="inv-dropdown__box">
      <!-- Listagem -->
      <div class="inv-list">
        <a href="#" class="inv-list__item">
          <span>#1 Opção</span>
        </a>
        <a href="#" class="inv-list__item">
          <span>#2 Opção</span>
        </a>  
      </div>
    </div>
  </div>
  <button class="inv-clear-input">
    <i class="material-icons">clear</i>
  </button>
</div>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-dropdown__content--open`](#dropdown-content-open) 	| Modifica o dropdown para abrir a listagem	|

### Dropdown Content Open
Torna a listagem visível.

Para isso ser possível, deve ser adicionado o modificador `inv-dropdown__content--open` no elemento `inv-dropdown__content`.

Também será necessário ativar o estado do input adicionando o modificador `inv-input--focused`

``` html
<div class="inv-dropdown">
  <div class="inv-dropdown__content inv-dropdown__content--open">
    <input id="" name="" type="text" class="inv-input inv-input--focused" placeholder="Selecione uma cidade" />
    <i class="material-icons inv-input-icon">arrow_drop_down</i>

    <div class="inv-dropdown__box">
      <!-- Caixa de texto de ação / Listagem -->
    </div>
  </div>
  <button class="inv-clear-input">
    <i class="material-icons">clear</i>
  </button>
</div>
```
