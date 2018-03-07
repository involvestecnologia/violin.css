## Buttons
Usado para ações de confirmação/criação.

Tendo a classe base `.inv-btn`, e podendo ser utilizado em conjunto com `<button>` e `<a>`

### Default Button
Botão padrão, comum para ações regulares dos usuários, menos “importante” que o primary button.

``` html
<a href="#" class="inv-btn">Default</a>
<button class="inv-btn">Default</button>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-button--addon`](#addon-button) 	| Possibilita utilizar icones com o botão 	|
| [`.inv-button--primary`](#primary-button) 	| Modifica o botão com estilização com a cor `primary` 	|
| [`.inv-button--accent`](#accent-button) 	| Modifica o botão com estilização com a cor `accent` 	|
| [`.inv-button--outline`](#outline-button) 	| Modifica o botão para utilizar as cores apenas nas boras 	|
| [`.inv-button--small`](#small-button) 	| Torna o botão pequeno 	|
| [`.inv-button--very-large`](#very-large-button) 	| Torna o botão grande 	|

### Addon Button
Versão com icone.

``` html
<a href="#" class="inv-btn inv-btn--addon">
  <i class="material-icons">mode_edit</i>
  Button
</a>
<button class="inv-btn inv-btn--very-addon">
  <i class="material-icons">mode_edit</i>
  Button
</button>
```

### Primary Button
Botão primário, comum para ações primárias mais comuns de acordo com a necessidade do usuário.

``` html
<a href="#" class="inv-btn inv-btn--primary">Primary</a>
<button class="inv-btn inv-btn--primary">Primary</button
```

### Accent Button
Botão acentuado, menos utilizado, é o botão de maior foco, para ações extremamente importantes.

``` html
<a href="#" class="inv-btn inv-btn--accent">Accent</a>
<button class="inv-btn inv-btn--accent">Accent</button>
```

### Outline Button
Versão outline, com menos destaque.

``` html
<a href="#" class="inv-btn inv-btn--outline">Outline</a>
<button class="inv-btn inv-btn--outline">Outline</button
```

### Small Button
Versão menor do botão.

``` html
<a href="#" class="inv-btn inv-btn--small">Button</a>
<button class="inv-btn inv-btn--small">Button</button>
```

### Very Large Button
Versão maior do botão.

``` html
<a href="#" class="inv-btn inv-btn--very-large">Button</a>
<button class="inv-btn inv-btn--very-large">Button</button>
```
