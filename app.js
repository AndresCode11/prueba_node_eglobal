const express = require('express')
const cors = require('cors');
const app = express();
var jwt = require('jsonwebtoken');

app.use(cors({ origin: true }));
app.options('*', cors({ origin: true }));

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

const port = 3000
const user = require('./models/user');

const db = require('./models');
const PasswordController = require('./controllers/PasswordController');


app.get('/', (req, res) => {
  
});

app.get('/all-users', async (req, res) => {
    const users = await db.User.findAll();
    console.log(JSON.stringify(users));
    res.json(users);
})

app.post('/user-data', async (req, res) => {
    const userID = req.body.user_id;
    const user = await db.User.findAll({
        where: {id: userID}
    });
    
    res.json(user[0]);

})

app.post('/edit-user', async (req, res)  => {
    
    let id = req.body.id;
    let firstName = req.body.first_name;
    let lastName = req.body.last_name; 
    let email = req.body.email
    let document_type = req.body.document_type;
    let document = req.body.document;
    let born_date = req.body.born_date;
    let city = req.body.city;

    db.User.update(
        {   firstName: firstName,
            lastName: lastName,
            email: email,
            document_type: document_type,
            document: document,
            born_date: born_date,
            city: city
        },
        { where: { id }}
    ).then(()=> {
        res.json({status: 'ok'})
    })

})

app.post('/register', async (req, res) => {

    let firstName = req.body.first_name;
    let lastName = req.body.last_name; 
    let email = req.body.email
    let document_type = req.body.document_type;
    let document = req.body.document;
    let password = req.body.password;
    let password_encrypt = await PasswordController.encrypt(password);
    let born_date = req.body.born_date;
    let city = req.body.city;
    let picture = req.body.picture;
    
    const user =  await db.User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        document_type: document_type,
        document: document,
        password: password_encrypt,
        born_date: born_date,
        city: city,
        picture: picture
     });


     res.json({status: 'ok'});
    
})

app.post('/login', async (req, res) => {
    
    let email = req.body.email;
    let password = req.body.password;

    let user = await db.User.findAll({
        where: {
            email: email
        }
    })

    // validate if user is register
    if(user.length > 0) {
         // validate password
        if(await PasswordController.check(password, user[0].password)) {
            let tokenData = {
                userID: user[0].id
            }

            let token = jwt.sign(tokenData, 'Secret Password', {
                expiresIn: 60 * 60 * 24 // expires in 24 hours
            });

            res.json({token});
            return;
        }
        else {
            res.status(401).send({
                error: 'usuario o contraseña inválidos'
            });
            return;
        }
    }

    res.status(401).send({
        error: 'usuario o contraseña inválidos'
    });
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  