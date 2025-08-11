
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORSでhttp://localhost:8080からのリクエストを許可
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

// GETメソッドでフォームの値を受け取る
app.get('/api/v1/', (req, res) => {
    try {
        let user = { id: 1, name: '太郎' };

        res.json(user);
    } catch (e) {
        console.log("error")
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));