const express = require('express')
const path = require('path');

const app = express()

const PORT = 3000

const users = [
  {
    id: 1,
    name: "Amit Kumar",
    email: "amit.kumar@example.com",
    age: 28
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@example.com",
    age: 25
  },
  {
    id: 3,
    name: "Ravi Verma",
    email: "ravi.verma@example.com",
    age: 30
  },
  {
    id: 4,
    name: "Sneha Gupta",
    email: "sneha.gupta@example.com",
    age: 22
  },
  {
    id: 5,
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    age: 35
  },
  {
    id: 6,
    name: "Nisha Yadav",
    email: "nisha.yadav@example.com",
    age: 29
  },
  {
    id: 7,
    name: "Karan Singh",
    email: "karan.singh@example.com",
    age: 33
  },
  {
    id: 8,
    name: "Deepika Jain",
    email: "deepika.jain@example.com",
    age: 24
  },
  {
    id: 9,
    name: "Manish Tiwari",
    email: "manish.tiwari@example.com",
    age: 31
  },
  {
    id: 10,
    name: "Anjali Desai",
    email: "anjali.desai@example.com",
    age: 27
  }
];


app.get('/', (req, res) =>{
    res.send("Welcome to Express Js")
})

app.get('/home', (req, res) =>{
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/users', (req, res) =>{
    res.send(users)
})

app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    let user = users.find( user => user.id == id)
    if(user){
      res.status(200).send(user);
    }
    else{
      res.status(404).send({"message" : "Record not found" })
    }
})

// Search by email or id
app.get('/search', (req, res) => {
  const { email, id } = req.query;

  // Convert id to number if it exists
  const user = users.find(u =>
    (email && u.email === email) || (id && u.id === parseInt(id))
  );

  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(PORT, () =>{
    console.log(`application is running on http://localhost:${PORT}`)
})