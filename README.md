<p align="center">
  <a href="#">
    <img src="https://raw.githubusercontent.com/involvestecnologia/violin.css/master/public/images/logo.jpg" alt="violin.css" />
  </a>

  <h3 align="center">Violin.css</h3>

  <p align="center">
    Design system e framework css da Involves.
    <br>
    <a href="https://involvestecnologia.github.io/violin.css/index.html"><strong>Documentação »</strong></a>
  </p>
</p>

### Status

[![Travis](https://img.shields.io/travis/involvestecnologia/violin.css.svg)](https://travis-ci.org/involvestecnologia/violin.css)
[![license](https://img.shields.io/github/license/involvestecnologia/violin.css.svg)](https://github.com/involvestecnologia/violin.css)
[![David](https://img.shields.io/david/involvestecnologia/violin.css.svg)](https://david-dm.org/involvestecnologia/violin.css)
[![David](https://img.shields.io/david/dev/involvestecnologia/violin.css.svg)](https://david-dm.org/involvestecnologia/violin.css)

### Utilizando

Você poderá utilizar o framework de diversas formas:

- [Baixando o último release](https://github.com/involvestecnologia/violin.css/archive/v0.0.1.zip)
- Clonando o repositório: `git clone https://github.com/involvestecnologia/violin.css.git`
- Adicionando
```html
<link rel="stylesheet" href="https://raw.githubusercontent.com/involvestecnologia/violin.css/master/dist/index.min.css">

<!-- ou caso você queira dar suporte a navegadores antigos -->

<link rel="stylesheet" href="https://raw.githubusercontent.com/involvestecnologia/violin.css/master/dist/index-old-browsers.min.css">
```
- Instalar com o npm: `npm install -d violin.css`

### Estrutura

Estamos utilizando o [Fractal](https://github.com/frctl/fractal) como ferramenta de desenvolvimento e documentação.

O projeto está estruturado da seguinte forma:

``` bash
violin.css/
├── bin/
|   └── test # script para execução dos testes de regressão visual
├── dist/ # arquivos de produção
├── docs/ # arquivos estáticos para a documentação
├── public/ # arquivos públicos utilizados para desenvolvimento
├── src/ # ambiente de desenvolvimento
│   ├── components/
│   │   ├── _partials
│   │   ├── button/ # módulo do componente
│   │   │   ├── button.config.yml # arquivo de configuração do módulo
│   │   │   ├── button.css # css do módulo
│   │   │   ├── button.hbs # markup do módulo
│   │   │   └── README.md # documentação do módulo
│   ├── css/
│   │   ├── base/
│   │   │   ├── variables/
│   │   │   │   ├── typhography.css # variáveis de tipografia
│   |   |   |   └── variables.css # variáveis gerais utilizadas no framework
│   |   |   └── base.css # alteração de elementos
│   │   ├── themes/
│   |   |   └── default.css # tema padrão do framework
│   |   └── index.css # ponto de entrada para compilação do postcss
│   └── docs/ # documentação do fractal
```

Temos as seguintes npm tasks:
- **commit** - utilizada para padronização dos commits
- **version** - gerar o changelog
- **start** - inicia o ambiente de desenvolvimento
- **start:css** - compila o css do projeto e observa por alterações
- **start:fractal** - inicia o fractal
- **build** - cria o build de produção
- **build:css** - builda o css da aplicação
- **build:themes** - buildas todos os temas do framework e coloca na pasta de produção
- **build:css:doc** - builda o css utilizado na documentação
- **build:css:support** - builda a aplicação aplicando cssnext para suporte a navegadores antigos
- **build:fractal** - cria uma documentação estática do projeto
- **test** - executa os testes de regressão visual
- **test:approve** - aprova os testes de regreção visual
- **analyse** - mostra estatísticas referente ao css do projeto

### Ambiente de desenvolvimento

```bash
cd violin.css
npm install
npm start
```

#### Ao realizar algum commit

```bash
npm run commit
```

#### Testes de regressão visual

Estamos utilizando a biblioteca [BackstopJs](https://github.com/garris/BackstopJS)

Para criar um novo teste, edite o arquivo `backstop.json`, e insira um novo cenário de teste, de preferência apontando para a url da documentação na páginas de preview do componente

```json
"scenarios": [
  {
    "readySelector": "body",
    "label": "Button",
    "url": "http://localhost:3000/components/preview/button",
    "selectorExpansion": true,
    "misMatchThreshold" : 0,
    "requireSameDimensions": true
  },
  ...
],
```

Executando os testes

```bash
npm test
```

### Versionamento

Para transparência nos nossos ciclos de release, estamos utilizando [Semantic Versioning](https://semver.org/)
