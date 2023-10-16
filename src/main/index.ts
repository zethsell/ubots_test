import { PgConnection } from '@/infra/repos/postgres/helpers'
import { env } from '@/main/config'

PgConnection.getInstance()
  .connect()
  .then(async () => {
    const { app } = await import('@/main/config/app')
    app.listen(env.server.port, () => console.log(`Server running at http://localhost:${env.server.port}`))
  })
  .catch((err) => console.error(err))
