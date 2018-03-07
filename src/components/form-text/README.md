## Form Text
Utilizados para indicar um texto abaixo dos campos de formulário

Tendo a classe base `.inv-form-text`, podendo ser adicionado um texto através de uma `span` ou uma `div`

### Default Form Text
Texto de formulário padrão, comum para ações regulares dos usuários.

``` html
<div class="inv-form-text">
  Sou um texto de formulário
</div>

<span class="inv-form-text">
  Sou um texto de formulário
</span>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-form-text--error`](#error-form-text) 	| Modifica o form text com estilização de erro	|
| [`.inv-form-text--success`](#success-form-text) 	| Modifica o form text com estilização de sucesso	|

### Error Form Text
Versão de erro.

``` html
<div class="inv-form-text inv-form-text--error">
  Sou um texto de formulário com erro
</div>

<span class="inv-form-text inv-form-text--error">
  Sou um texto de formulário com erro
</span>
```

### Success Form Text
Versão de sucesso.

``` html
<div class="inv-form-text inv-form-text--sucess">
  Sou um texto de formulário com sucesso
</div>

<span class="inv-form-text inv-form-text--sucess">
  Sou um texto de formulário com sucesso
</span>
```
