// app.js
const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

// 임시 사용자 데이터
let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  }
]

// 라우팅 설정
app.get('/users', (req, res) => {
  return res.json(users);
});
// app.get('/users', (req, res) => res.json(users));
