## Addon
Utilizadas em conjunto com campos de formulários, sempre no lado esquerdo.

Tendo a classe base `.inv-addon`, podendo ser adicionado um texto através de qualquer tag, ex: `div, label...`

### Default Addon
Forma padrão, comum para ações regulares dos usuários.

``` html
<label class="inv-addon">
  <input type="checkbox" class="inv-checkbox"  />
</label>

<div class="inv-addon">
  R$
</div>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-addon--disabled`](#disabled-addon) 	| Modifica o addon com estilização de desabilitado	|

### Disabled Addon
Versão desabilitada.

``` html
<label class="inv-addon inv-addon--disabled">
  <input type="checkbox" class="inv-checkbox" disabled />
</label>

<div class="inv-addon inv-addon--disabled">
  R$
</div>
```
