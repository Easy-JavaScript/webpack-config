# Webpack Config
How config webpack file in your project

### DOC: https://webpack.js.org/concepts/
### DOC: https://babeljs.io/docs/en/
### DOC: https://eslint.org/docs/user-guide/getting-started

<hr/>

#### Para que o webpack funcione é necessário instalar

<code> npm i -D webpack webpack-cli </code>

<hr/>
Configurando o babel no projeto

<code> npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
#### @babel/core       - <br/>

#### babel-loader      - para a instalação de plugins. <br/>
<br/>
@babel/preset-env      - para utilzar es6,7,8 e compilar pra um es5. utilizando o babel-preset-env não preciso especificar a versão do es.<br/>
<br/>
@babel/preset-react    - para o babel transpilar o react para o browser interpretar pra es5, utilizamos um preset do react.<br/>
</code>
<br/>

### OBS: Nem todo browser acompanha a última versão do JS, para isso utilizamos o babel.

<hr/>

### Com o ES6 utilizamos o "import" para importar os arquivos isso só é possivel devido a transpilação feita pelo babel. Se não fosse o preset do babel teriamos que utilizar o "require"

### Para o webpack funcionar com o babel precisamos criar o arquivo .babelrc  devido termos instalado os presets (preset-env, preset-react).

### O arquivo .babelrc é o arquivo default onde o babel vai ler todos os presets e os plugins dele
<br/>
<code> npm i -D webpack-dev-server - o webpack cria um servidor para nossa aplicação, ele ja vem com o watch reload
</code>
<br/>
<br/>
### OBS: O webpack so gera o bundler dos arquivos js que estão sendo importados dentro dos arquivos js. ele ignora arquivo que não ta sendo usado
<br/>
<br/>

### O uso do ESLint evita varios erros no desenvolvimento
<code>npm i --save-dev eslint babel-eslint eslint-plugin-react eslint-watch</code>
<br/><br/>
### Cria o arquivo .eslintrc com as configs default.
<br/>

### Execute npm run eslint para visualizar os erros nos arquivos js.


Make for Bruno Lima