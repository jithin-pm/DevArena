require('dotenv').config();

const express = require('express');

const cors = require('cors');

const devArenaServer = express();

devArenaServer.use(cors());

devArenaServer.use(express.json()); 

const router = require('./Routes/Router');

devArenaServer.use(router);

require('./DB/connection');

const PORT = 4000;

devArenaServer.listen(PORT, (error) => {
    if (error) {
        console.error("Error starting server:", error);
    } else {
        console.log(`Server is up and running on port: ${PORT}`);
    }
});
