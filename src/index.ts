import config from "./core/config";
import app from "./core/server";

app.listen(config.port, () => console.log(`Server on port ${config.port}`));
