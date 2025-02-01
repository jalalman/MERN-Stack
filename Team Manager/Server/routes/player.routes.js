const PlayerController = require("../controllers/player.controller");

module.exports = (app) => {
    app.post("/api/players", PlayerController.createPlayer);
    app.get("/api/players", PlayerController.getAllPlayers);
    app.get("/api/players/:id", PlayerController.getPlayer);
    app.put("/api/players/:id/edit", PlayerController.updatePlayer);
    app.delete("/api/players/:id/delete", PlayerController.deletePlayer);
};