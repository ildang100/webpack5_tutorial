# webpack5_tutorial

### Authoring Libraries
### Environment Variables
### Loaders

```
최소한으로 필요한 모듈에만 로더를 적용하세요.

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
};
위와 같은 방식보다는 아래처럼 include 필드를 사용하여 실제로 변환해야 하는 모듈에만 로더를 적용합니다.

const path = require('path');

module.exports = {
  //...
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },
};

```
