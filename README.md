# 🎬 CineRuka – Movie Theater Reservation Backend

![Status](https://img.shields.io/badge/status-in_development-yellow)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Express](https://img.shields.io/badge/Express.js-Framework-lightgrey)
![MERN](https://img.shields.io/badge/Stack-MERN-informational)

---

> 🎓 **Personal project** built to simulate the reservation system of a movie theater.  
> Developed using Object-Oriented Programming and RESTful API design.

---

## 🚀 Technologies Used

- **Node.js** & **Express**  
- JavaScript (ES Modules)  
- MVC-style structure  
- Object-Oriented Programming  
- Postman for testing endpoints

---

## 📁 Project Structure

```

/server
├── index.js
├── server
|   ├──src
│   |   ├── controllers
│   │   │   ├── entradaController.js
│   │   │   └── salaController.js
│   │   └── domain
│   │   │   ├── asientoSala.js
│   │   │   ├── asiento.js
│   │   │   ├── entrada.js
│   │   │   ├── funcion.js
│   │   │   ├── pelicula.js
│   │   │   └── sala.js

````

---

## 📌 Current Features

### ✅ `GET /sala/:id/funcion`

Returns the list of available movie functions (title + schedule) for a given theater room.
Each function includes a seat matrix, where every seat contains its location, status, and price.cy.

### ✅ `POST /entrada`

Reserves a seat (mocked client + mocked function) based on row and column from the request body.

**Example request body:**
```json
{
  "idFuncion": "1",
  "fila": 2,
  "columna": 3
}
````

✔️ Validates if the seat is already taken
✔️ Returns a JSON with the created `Entrada` (ticket)

---

## 🧪 Development Status

* ✅ Functional domain and controller layers
* ✅ Data mocked in memory (Sala, Película, Función)
* ⚠️ No database yet (MongoDB soon)
* ⚠️ No frontend yet (React planned)
* ✅ Full reservation logic per seat
---

## 🧠 What’s next?

* Integrate MongoDB + Mongoose
* Build a React frontend
* Add user's wallet
* Create purchase orders and candy bar features 🍿
* Deploy the full app

---

## 👨‍💻 About Me

Hi! I'm Lucas, a 22-year-old software engineering student at UTN (Argentina).
I'm focusing on backend and fullstack development, and I’m passionate about AI, software architecture, and team management.

📫 **Open to collaboration, feedback, or job opportunities!**

---

## 📎 Useful Links

* [LinkedIn] www.linkedin.com/in/lucas-g-aponte
* [GitHub Repository] https://github.com/LucasAponte

---

## 🏷️ Tags

`#NodeJS` `#Backend` `#FullStack` `#CineRuka` `#ExpressJS` `#OOP` `#UTN` `#PersonalProject`




