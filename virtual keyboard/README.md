## 환경 설정

1. npm 설정<br>
   터미널에 `npm init -y`를 작성하여 package.json을 초기화 -> package.json 생성
2. 웹팩 설치<br>
   터미널에 `npm i -D webpack webpack-cli webpack-dev-server` 웹팩 패키지 생성<br>
   : -D의 의미? devDependencies(로컬 개발, 테스트에만 필요한 패키지)에 패키지를 설치하겠다. 라는 뜻
3. html, css, js 파일이 들어갈 src 폴더 생성
4. 최상위 경로에 웹팩 설정 파일 생성 (webpack.config.js 파일에 아래 코드 작성)<br>

```js
const path = require("path"); // path라는 모듈을 불러온다.
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js", // entry : 파일의 진입점, 웹팩이 확인하는 파일, 웹팩이 실행 될 때 참고하는 파일
  output: {
    // output : 웹팩이 실행 되면 filename에 있는 파일이 최종적으로 만들어진다. (이 파일은 dist 폴더에 저장된다.)
    filename: "bundle.js", // 파일 이름 지정
    path: path.resolve(__dirname, "./dist"), // 파일이 생성될 경로 // dist만 적어주면 안되고(상대경로이기 때문) path라는 모듈을 불러와서 절대경로를 찾을 수 있도록 앞에 있는 부분 작성한다.
    clean: true, // 파일이 생성될 경로에 다른 파일이 있다면 지우고 새로 생성하는 속성
  },
  devtool: "source-map", // source-map은 빌드한 파일과 원본 파일을 서로 연결
  mode: "development",
  devServer: {
    host: "localhost",
    port: 8080,
    open: true.valueOf,
    watchFiles: "index.html",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "keyboard", // 페이지 탭에 있는 타이틀 이름 설정
      template: "./index.html", // template에 있는 파일을 사용할거야~
      inject: "body", // 파일을 빌드헸을 때 js 파일을 body에 넣을거야~(body 적어주지 않으면 head에 들어가게 됨)
      favicon: "./favicon.ico",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // css 파일을 ~
        use: [MiniCssExtractPlugin.loader, "css-loader"], // 이러한 loader를 사용하여 읽어들이겠다~
      },
    ],
  },
  optimization: {
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
};
```

5. npx webpack 실행<br>
   위 코드에서 작성한 dist 폴더 안에 bundle.js 파일이 생성
6. html 파일 생성
7. html, css 파일을 설정해줄 모듈 설치 <br>
   `npm i -D html-webpack-plugin` <br>
   `npm i -D mini-css-extract-plugin css-loader css-minimizer-webpack-plugin`

- 참고 <br>
  위 코드에서 HtmlWebpackPlugin을 사용했을 때 템플릿을 index.html로 사용하겠다 했다. 이때 HtmlWebpackPlugin이 lodash 문법을 사용할 수 있게 해준다.
- 참고 https://art-coding3.tistory.com/56
- 참고 https://www.codeit.kr/community/threads/29051
- https://yamoo9.gitbook.io/webpack/webpack/config-webpack-dev-environment/webpack-mode

---
