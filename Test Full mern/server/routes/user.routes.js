
const UserController = require("../controllers/user.controller");

module.exports = app => {
    app.post("/api/users/new", UserController.createUser);
    app.get("/api/users", UserController.getAllUsers);
    app.get("/api/users/:id", UserController.getOneUser);
    app.put("/api/users/update/:id", UserController.updateUser);
    app.delete("/api/users/delete/:id", UserController.deleteUser);
}
