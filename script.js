var player_pos = document.querySelector("#player").getBoundingClientRect();

var pos_x = player_pos.left
var pos_y = player_pos.top;

document.addEventListener("keypress", (event) => {
    var player = document.querySelector("#player");
    if (event.key == 'd') {
        pos_x += 50;
    }
    if (event.key == 'a') {
        pos_x -= 50;
    }
    if (event.key == 'w') {
        pos_y -= 50;
    }
    if (event.key == 's') {
        pos_y += 50;
    }
    player.style.left = `${pos_x}px`;
    player.style.top = `${pos_y}px`;
});