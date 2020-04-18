# Monev-In PPS

## Registering User

Untuk register gunakan aplikasi third-party seperti Postman, Insomnia, dll dan lakukan post request ke link yang diberikan

- Mahasiswa
    - post : http://127.0.0.1:3333/users/register/mhs
        - value: [first_name, last_name, nim, email, password]
        
- Promotor
    - post : http://127.0.0.1:3333/users/register/promotor
        - value: [first_name, last_name, nik, email, password]


## Adonis Fullstack Applicatinon 
This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
