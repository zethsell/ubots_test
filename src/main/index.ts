import {PgConnection} from "@/infra/repos/postgres/helpers/index.js";
import {env} from "@/main/config/index.js";

PgConnection.getInstance().connect()
    .then(async (a) => {
        const {app} = await import("@/main/config/app.js")
        app.listen(env.server.port, () => console.log(`Server running at http://localhost:${env.server.port}`))
    })
    .catch(err => console.error(err))