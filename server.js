const express = require('express');
const connectDB = require('./Config/db.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/crops', require('./routes/crop.js'));
app.use('/api/soils', require('./routes/soilRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
