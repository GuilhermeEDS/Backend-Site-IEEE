const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const app = express();
const PORTA = 8080;

app.use(express.json());
app.use(cors());

app.listen(PORTA, () => {
  console.log(`Iniciou na porta ${PORTA}`);
});