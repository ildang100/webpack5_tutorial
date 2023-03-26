const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};

// 모듈 로더는 체인으로 연결할 수 있습니다. 체인의 각 로더는 리소스에 변형을 적용합니다. 체인은 역순으로 실행됩니다. 첫 번째 로더는 결과(변형이 적용된 리소스)를 다음 로더로 전달합니다. 마지막으로 webpack은 체인의 마지막 로더가 JavaScript를 반환할 것으로 예상합니다.
//
//   위의 로더 순서는 유지되어야 합니다. 'style-loader'가 먼저 오고 그 뒤에 'css-loader'가 따라오게 됩니다. 이 컨벤션을 따르지 않으면 webpack에서 오류가 발생할 수 있습니다.
