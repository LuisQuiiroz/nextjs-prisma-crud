## Instalar los paquetes necesarios para levantar el proyecto

```
npm install
```

## Conexión a la base de datos, modificando el archivo: schema.prisma

Es el mismo archivo donde se añade el esquema de las tablas necesarias para el proyecto

```
datasource db {
  provider  = "postgresql"
  url       = env("POSTGRES_PRISMA_URL") // uses connection pooling
  directUrl = env("POSTGRES_URL_NON_POOLING") // uses a direct connection
}
```

Variables .env dadas por vercel al utilizar postgreSQL y prisma
Es necesario ponerlas en el archivo .env del proyecto

## Crear la base de datos postgreSQL usando prisma y vercel

Con este comando se crea la base de datos de postgreSQL en vercel

```
npx prisma migrate dev
```

## Leer la tabla y generar el cliente con postgreSQL

```
npx prisma generate
```

Ya se puede usar el proyecto con una base de datos propia... alojada en vercel

```
npm run dev
```

## Subir el proyecto a vercel

```
npm install vercel -g
```

Es necesario hacer login

```
vercel login
```

Para guardar y subir el repositorio a vercel

```
vercel
```
