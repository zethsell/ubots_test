# ubots_test

To install dependencies:

```bash
bun install
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
