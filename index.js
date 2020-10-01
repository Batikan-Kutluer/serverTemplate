//Burası Server, Node.js serveri paketler içerir, detaylı bilgi için: https://www.w3schools.com/nodejs/

/* konsole bir şey yazdırmak istersen cl('yazmak istediğin') yazman yeterli. */
let cl = console.log


var
express = require('express'),
app = express(),
http = require('http').createServer(app)
io = require('socket.io')(http),
fs = require('fs');

app.get('/', (req,res) => {
  //req = request, res = response.
  fs.readFile(__dirname + '/public/index.html', 'utf8', (err, data) => {
        if (err) {
            throw err
        } else {
            res.send(data)
        }
    })
})

//Public dosyasını kullanıcılara açık yapar.
app.use(express.static('public'))


//Kullanıcı bağlandığında mesaj yollar, fakat belli bir koda ihtiyacı vardır HTML dosyasında görebilirsiniz.
io.on('connection', socket => {
  cl('Bir kullanıcı bağlandı!')
})

//sunucuyu belirli bir port'a bağlar ve açıldığında mesaj gönderir.
http.listen(3000, () => cl('Sorunsuz şekilde sunucu çalıştı.'))