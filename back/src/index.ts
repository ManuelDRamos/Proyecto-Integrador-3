import "reflect-metadata";
import server from "./server";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/dataSource";


AppDataSource.initialize()
    .then(res => {
        console.log("Database connected")
        server.listen(PORT, () => {
            console.log(`Server Listening on http://localhost:PORT:${PORT}`);
        });

    })





