## Labels
Utilizadas nos campos de input

Tendo a classe base `.inv-label`, podendo ser adicionado um texto através de uma `span`

### Default Label
Label padrão, comum para ações regulares dos usuários.

``` html
<label for="" class="inv-label">Default</label>
<label for="" class="inv-label">
  Default 
  <span>- obrigatório</span>
</label>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-button--disabled`](#disabled-label) 	| Modifica a label com estilização de desabilitado	|

### Disabled label
Versão desabilitada.

``` html
<label for="" class="inv-label inv-label--disabled">
  Label
  <span>- desabilitada</span>
</label>
```
