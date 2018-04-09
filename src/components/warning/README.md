## Warnings
Utilizados como alertas de informações no sistema.

Tendo a classe base `.inv-warning`, e podendo ser utilizado em conjunto com `<div>`

### Default Warning
Alerta padrão.

``` html
<div class="inv-warning">
  Alerta padrão
</div>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-warning--success`](#success-warning) 	| Modifica o alerta com estilização com a cor `success` 	|
| [`.inv-warning--error`](#error-warning) 	| Modifica o alerta com estilização com a cor `error` 	|

### Success Warning
Alerta com estado de sucesso.

``` html
<div class="inv-warning inv-warning--success">
  Operação realizada com sucesso
</div>
```

### Error Warning
Alerta com estado de erro.

``` html
<div class="inv-warning inv-warning--error">
  Ocorreu um erro interno no servidor.
</div>
```
