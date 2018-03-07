## Input Icon
Utilizadas nos campos de input

Tendo a classe base `.inv-input-icon`, podendo ser adicionado um `i`

### Default Input Icon
Icone padrão, usado em componentes para indicar qual o tipo de input, exemplo: Datepicker e Dropdown.
Também para realizar ações, ex: ver senha.

``` html
<i class="material-icons inv-input-icon">visibility</i>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-input-icon--active`](#active-input-icon) 	| Modifica o icon input com estilização de ativo	|
| [`.inv-input-icon--disabled`](#disabled-input-icon) 	| Modifica o icon input com estilização de desabilitado	|

### Active Input Icon
Versão ativa.

``` html
<i class="material-icons inv-input-icon inv-input-icon--active">visibility</i>
```

### Disabled Input Icon
Versão desabilitada, sendo feita automaticamente quando o icone estiver em conjunto com o input dentro de um campo de formulário.

Também podendo ser feita de forma manual adicionando a classe `.inv-input-icon--disabled`

``` html
<i class="material-icons inv-input-icon inv-input-icon--disabled">visibility</i>
```
