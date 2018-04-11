## Input Progress
Utilizadas nos campos de input para indicar o progresso

Tendo a classe base `.inv-input-progress`

### Default Input Progress
Forma padrão da barra de progresso

``` html
<progress class="inv-input-progress" max="100" value=""></progress>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`.inv-input-progress--invalid`](#invalid-input-progress) 	| Modifica a barra de progresso do input com estilização de inválidação	|
| [`.inv-input-progress--alert`](#alert-input-progress) 	| Modifica a barra de progresso do input com estilização de alerta	|
| [`.inv-input-progress--done`](#done-input-progress) 	| Modifica a barra de progresso do input com estilização de concluído	|
| [`.inv-input-progress--disabled`](#disabled-input-progress) 	| Modifica a barra de progresso do input com estilização de desabilitado	|

### Invalid Input Icon
Variação de progresso com estado inválido.

``` html
<progress
  class="inv-input-progress inv-input-progress--invalid"
  max="100"
  value="15"
></progress>
```

### Alert Input Icon
Variação de progresso com estado de alerta.

``` html
<progress
  class="inv-input-progress inv-input-progress--alert"
  max="100"
  value="55"
></progress>
```

### Done Input Icon
Variação de progresso com estado de conclusão.

``` html
<progress
  class="inv-input-progress inv-input-progress--done"
  max="100"
  value="95"
></progress>
```

### Disabled Input Icon
Variação de progresso desabilitado.

``` html
<progress
  class="inv-input-progress inv-input-progress--disabled"
  max="100"
  value="55"
></progress>
```
