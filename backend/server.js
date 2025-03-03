// server/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');
const authRoutes = require('./routes/auth');

const patientsRouter = require('./routes/patientRoute');
const doctorsRouter = require('./routes/doctorRoute');
const appoinmentsRouter = require('./routes/appointmentRoute')
const inventorysRouter = require('./routes/inventoryRoute')


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(config.mongoURI, { useNewUrlParser: true, 
                                    useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

app.use('/patients', patientsRouter);
app.use('/doctors', doctorsRouter);
app.use('/appointments', appoinmentsRouter)
app.use('/inventory', inventorysRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
