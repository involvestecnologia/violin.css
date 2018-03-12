## Form Field
Utilizado para entrada de dados no sistema, possuindo: 
  - label
  - input
  - form-text (opcional)

Tendo a classe base `.inv-form-field`, sendo utilizado por um elemento `div`

### Default Form Field
Campo de formulário padrão, comum para ações regulares dos usuários.

``` html
<div class="inv-form-field">
  <label for="name" class="inv-label">
    Nome
  </label>
  <input id="name" name="name" type="text" class="inv-input" placeholder="Ex: John Doe" />
</div>

<div class="inv-form-field">
  <label for="password" class="inv-label">
    Password <span>- required</span>
  </label>
  <input id="password" name="password" type="password" class="inv-input inv-input--error" placeholder="Your password" />
  <div class="inv-form-text inv-form-text--error">
    Wrong password!
  </div>
</div>

<div class="inv-form-field">
  <label class="inv-label inv-label--disabled">
    Name <span>- disabled</span>
  </label>
  <input type="text" class="inv-input" placeholder="Ex: John Doe" disabled />
</div>
```
