## Input Addon
Utilizado para agrupar um campo ao lado de um input

Tendo a classe base `.inv-input-addon`, podendo ser utilizado apenas com a tag `div`

Os elementos disponíveis para serem utilizados com o componente são:
- Elemento alocado a esquerda do input `<div class="inv-input-addon__prepend>`
- `inv-input`
- `inv-clear-input`

Ao colocar um campo ao lado esquedo do input, deverá ser criada uma `div` com a classe `inv-input-addon__prepend`

### Default Input Addon
Input addon padrão, comum para ações regulares dos usuários.

``` html
<div class="inv-input-addon">
  <div class="inv-input-addon__prepend">
    <input type="checkbox" class="inv-checkbox" />
  </div>
  <input id="" name="" type="text" class="inv-input " placeholder="Ex: 000-00-000" />
  <button class="inv-clear-input">
  <i class="material-icons">clear</i>
</button>
</div>

<div class="inv-input-addon inv-input-addon--disabled">
  <div class="inv-input-addon__prepend">
    <input type="checkbox" class="inv-checkbox" disabled />
  </div>
  <input id="" name="" type="text" class="inv-input " placeholder="Ex: 000-00-000" disabled />
  <button class="inv-clear-input" disabled>
    <i class="material-icons">clear</i>
  </button>
</div>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-input-addon--disabled`](#addon-disabled) 	| Modifica o addon com estilização de desabilitado	|
| [`.inv-input-addon--icon`](#addon-icon) 	| Modifica o addon para ter suporte a icone de ação	|
### Addon Disabled
Versão desabilitada.

``` html
<div class="inv-input-addon inv-input-addon--disabled">
  <div class="inv-input-addon__prepend">
    <input type="checkbox" class="inv-checkbox" disabled />
  </div>
  <input id="" name="" type="text" class="inv-input " placeholder="Ex: 000-00-000" disabled />
  <button class="inv-clear-input" disabled>
    <i class="material-icons">clear</i>
  </button>
</div>
```
### Addon Icon
Campo de addon com icone de ação do input.

``` html
<div class="inv-input-addon">
  <div class="inv-input-addon__prepend">
    <input type="checkbox" class="inv-checkbox" />
  </div>

  <div class="inv-input-addon__input inv-input-addon__input--icon">
    <input name="icon" type="text" class="inv-input" />
    <i class="material-icons inv-input-icon">visibility</i>
  </div>

  <button class="inv-clear-input">
    <i class="material-icons">clear</i>
  </button>
</div>
```
