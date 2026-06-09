const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const sum = require('./sum');
app.use(express.json());

console.log(sum(1,3));
// app.get('/', (req, res) => {
//   res.json({ message: 'Hello from Express!' });
// });

// app.get('/health', (req, res) => {
//   res.json({ status: 'ok' });
// });

app.get('/sum/:a/:b', (req, res) => {
  const {a,b} = req.params;
  res.json({
    result:sum(parseInt(a),parseInt(b))
  })
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
