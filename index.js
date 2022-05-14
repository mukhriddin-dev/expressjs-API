const express = require('express');
const path = require('path');
const app = express();


const superadmin = require('./API/superadmin.js');
const section = require('./API/sections.js');
const staff = require('./API/staff')
const rooms = require('./API/rooms');

app.set('view engine', 'ejs');


// adminlar
app.get('/api/admin', (req, res) => {
    res.json(superadmin)
})

// bo'limlar
app.get('/api/sections', (req, res) => {
    res.json(section)
})

// hodimlar

app.get('/api/staff', (req, res) => {
    res.json(staff)
})

// honalar

app.get('/api/rooms', (req, res) => {
    res.json(rooms)
})







app.listen(3000, () => console.log('SERVER 3000 portda ishlamoqda. . . '));