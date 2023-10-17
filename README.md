# ubots_test

To install dependencies:

```bash
bun install
```

Set ENV vars ( for this project I left a test db )
```
SERVER_PORT=5555

DB_TYPE="postgres"
DB_HOST="suleiman.db.elephantsql.com"
DB_PORT="5432"
DB_USER="lpvxnvph"
DB_PASS="B2miURNvv46qdDUxzmNPePbXtW1X1kf1"
DB_NAME="lpvxnvph"

REDIS_HOST="localhost"
REDIS_PORT="6379"
REDIS_PASS=""
```

To Run migrations

```bash
bun run migration:run
```

To run dev:

```bash
bun run dev
```

To run production:

```bash
bun run build
bun run start
```

To run queue work:

```bash
bun run queue:work
```

Routes:

```
LIST USERS => GET => api/users
CREATE USER => POST => api/users
----------------------------------------------------------------
CREATE TICKET => POST => api/tickets
CLOSE TICKET => POST => api/close-ticket/:id
```

*the insomnia file is on api root*

***This project was created using bun v1.0.6.***
