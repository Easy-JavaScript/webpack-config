const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin"); // PLugin para HTML
const webpack = require("webpack"); // PLugin para HTML

module.exports = {
  devtool: "source-map", // mapeia todos os arquivos de uma forma que fique melhor de debugar
  // mode: 'none', mode: 'production', mode: 'development', executa o arquivo webpack 
  // mas configuramos no package.json o "dev": "webpack --mode development"
  mode: "none", 
  entry: "./src/index.js", // arquivo de entrada principal
  output: {
    // dist é o nome da pasta de saida, pode ser qualquer nome
    path: path.resolve(__dirname, "dist"), 
    filename: "bundler.js", // nome do nosso bundle
  },
  // o modulo que o webpack vai interpretar
  module: {
    // as regras
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // faz a transpilação para utilizarmos em nosso projeto
        },
      },
    ],
  },
  resolve: {
    alias: {
      process: "process/browser",
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
};

// Para que o webpack funcione é necessário instalar
// npm i -D webpack webpack-cli

// Configurando o babel no projeto
//  npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
// @babel/core         -
// babel-loader        - para a instalação de plugins

// @babel/preset-env   - para utilzar es6,7,8 e compilar pra um es5. utilizando o babel-preset-env não preciso especificar a versão do es
// OBS: Nem todo browser acompanha a última versão do JS, para isso utilizamos o babel.

// @babel/preset-react - para o babel transpilar o react para o browser interpretar pra es5, utilizamos um preset do react

// Com o ES6 utilizamos o "import" para importar os arquivos isso só é possivel devido a transpilação feita pelo babel
// Se não fosse o preset do babel teriamos que utilizar o "require"

// Para o webpack funcionar com o babel precisamos criar o arquivo .babelrc  devido termos instalado os presets (preset-env, preset-react),
// O arquivo .babelrc é o arquivo default onde o babel vai ler todos os presets e os plugins dele

// npm i -D webpack-dev-server - o webpack cria um servidor para nossa aplicação, ele ja vem com o watch reload

// OBS: O webpack so gera o bundler dos arquivos js que estão sendo importados dentro dos arquivos js. ele ignora arquivo que não ta sendo usado

// O uso do ESLint evita varios erros no desenvolvimento
// npm i --save-dev eslint babel-eslint eslint-plugin-react eslint-watch
// Cria o arquivo .eslintrc com as configs default
// execute npm run eslint para visualizar os erros nos arquivos js
