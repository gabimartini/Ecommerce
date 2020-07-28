/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable radix */
/* eslint-disable linebreak-style */
const express = require('express');

const cors = require('cors');

const sql = require('mysql');
const { elementType } = require('prop-types');
const e = require('cors');

const app = express();

// const crypto = require("crypto");

const connection = sql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'server@123',
    database: 'ecommerce',
    multipleStatements: true,
  },
);

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connection established');
});

const Select = 'SELECT * from newStore ';

app.use(cors());

app.get('/', async (req, res) => {
  connection.query(Select, (err, results) => {
    if (err) {
      return res.send(err);
    }

    return res.json({ data: results });
  });
});

app.post('/data', async (req, res) => {
  // eslint-disable-next-line array-callback-return
  JSON.parse(req.query.orderData).map((element) => {
    const sqlData = `INSERT INTO orders (name_order, email_order, name_product, quantity, price_product, Total_price, size) 
     VALUES ('${req.query.orderName}','${req.query.orderEmail}','${element.name}',${element.value},${element.price}, ${element.price * element.value}, '${element.size}')`;

    connection.query(sqlData, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Sucess');
      }
    });

    const sqlUpdateData = `UPDATE newstore SET ${element.size} = ${parseInt(element.qtd[element.qtd.length - 1]) - parseInt(element.value)} Where clotheName = '${element.name}' `;

    connection.query(sqlUpdateData, (err, results) => {
      if (err) {
        console.log(err);
      } else {
        return results;
      }
    });

    const AddSeller = ` UPDATE newStore SET seller = seller + ${element.value} WHERE clotheName = '${element.name}'`;
    connection.query(AddSeller, (err, results) => {
      if (err) {
        return (err);
      }
      return results;
    });

    res.json({ data: req.query });
  });
});

app.get('/data', async (req, res) => {
  const SelectOrder = 'Select * from orders';

  connection.query(SelectOrder, (err, results) => {
    if (err) {
      return res.send(err);
    }

    return res.send(results);
  });
});

app.post('/user', async (req, res) => {

  const selectFirstPost = `Select * from users where email = '${req.query.orderData.email}'`;

  connection.query(selectFirstPost, (err, results) => {
    if (results.length !== 0) {
      const value = JSON.parse(req.query.orderData);
      const SelectUsers = `INSERT INTO users (firstname, lastname, street, zip, birthday, email, senha) 
   VALUES ('${value.fname}', '${value.lname}', '${value.street}', '${value.zipCode}', '${value.Birthday}', '${value.email}',
  AES_ENCRYPT('${value.password}', 'chave'))`;
      connection.query(SelectUsers, (err, results) => {
        if (err) {
          res.send(err);
        } else {
          res.send('Sucess');
        }
      });
    } else {
      res.send('you are already register!')
    }
  });
});

app.get('/user', async (req, res) => {
  const SelectUsersLogin = `Select * from users where senha= AES_ENCRYPT('${req.query.password}', 'chave') and email = '${req.query.email}' `;
  connection.query(SelectUsersLogin, (err, results) => {
    const email = results.map((email) => email.email);
    const name = results.map((el) => el.firstname);
    const id = results.map((el) => el.id);

    if (results.length === 0) {
      res.send('Wrong email or password!');
    } else {
        if (err) {
        res.send(err);
       } else {
        return res.json({
          data: email,
          dataName: name,
          idData: id,
        });
      }
    }
  });
});

app.get('/id', async (req, res) => {
  // console.log(req.query.idCustomer);

  const SelectUsersid = `Select * from users Where id = '${parseInt(req.query.idCustomer)}'`;

  connection.query(SelectUsersid, (err, results) => {
    const resName = results.map((el) => el.firstname);
    const resEmail = results.map((el) => el.email);

    if (err) {
      console.log(err);
    } else {
      return res.json({
        name: resName,
        email: resEmail });
    }
  });
});

app.listen(4000, () => {
  console.log('Product server listening on port 4000');
});
