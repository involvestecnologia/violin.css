## Radial Select Button
Radio button da aplicação

Tendo a classe base `.inv-radial-select`, e é formado por:
- Um radio button - `.inv-radial-select__radio`
- Uma label - `.inv-radial-select__label`

### Default Radial Select
Componente padrão, comum para ações regulares dos usuários.

``` html
<div class="inv-radial-select">
  <input id="male" name="sex" type="radio" class="inv-radial-select__radio" value="male" />
  <label class="inv-radial-select__label" for="male">male</label>
</div>

<div class="inv-radial-select">
  <input id="female" name="sex" type="radio" class="inv-radial-select__radio" value="female" />
  <label class="inv-radial-select__label" for="female">female</label>
</div>
```

| Modificadores 	| Uso 	|
|-------------------------------------------------	|----------------------------------------------------------	|
| [`disabled`](#radial-select-disabled) 	| Modifica o radial select com estado de desabilitado	|

### Radial Select Disabled
Versão de desabilitada do componente.

Basta inserir o atributo `disabled` no input radio.

``` html
<div class="inv-radial-select">
  <input id="disabled" name="sex" type="radio" class="inv-radial-select__radio" value="disabled" disabled />
  <label class="inv-radial-select__label" for="disabled">disabled</label>
</div>
```
