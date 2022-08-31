import React from 'react';
import ReactDOM from 'react-dom';
//react-domはreactのコンポーネントをブラウザに表示するために必要なのでindex.jsにインポートする

import App from './App';

ReactDOM.render(<App />,document.querySelector('#root'));
//ReactDOMで表示させる
