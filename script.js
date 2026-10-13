// ========================================
// THE LOST CITY
// Main Game JavaScript
// ========================================


// PLAYER DATA

let player = {
  name: "Grace",
  points: 0,
  health: 100,
  fear: 20,
  inventory: ["Flashlight"],
  level: 1
};


// ========================================
// LOAD SAVED GAME
// ========================================

const savedGame = localStorage.getItem("lostCitySave");

if (savedGame) {
  player = JSON.parse(savedGame);
}


// ========================================
// SAVE GAME
// ========================================

function saveGame() {

  localStorage.setItem(
    "lostCitySave",
    JSON.stringify(player)
  );

}


// ========================================
// SCREEN NAVIGATION
// ========================================

function showScreen(screenId) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(screenId).classList.add("active");

  updateUI();

}


// ========================================
// START GAME
// ========================================

function startGame() {

  player.health = 100;
  player.fear = 20;

  document.getElementById("gameOver")
    .classList.remove("show");

  showScreen("gameScreen");

  updateStory(
    `You wake up in the middle of an abandoned village.

The streets are empty.

Somewhere in the distance, you hear a bell.

Then you hear something else...

Footsteps.

They stop when you stop.

You raise your flashlight.

Something moves between the houses.`
  );

  updateChoices([
    ["🔦 Investigate the village", investigate],
    ["⛪ Enter the old church", goToChurch],
    ["🏃 Leave the village", runAway]
  ]);

}


// ========================================
// STORY TEXT
// ========================================

function updateStory(text) {

  document.getElementById("storyText").textContent = text;

}


// ========================================
// CHOICES
// ========================================

function updateChoices(options) {

  const container =
    document.getElementById("choices");

  container.innerHTML = "";

  options.forEach(option => {

    const button =
      document.createElement("button");

    button.textContent = option[0];

    button.onclick = option[1];

    container.appendChild(button);

  });

}


// ========================================
// INVESTIGATE
// ========================================

function investigate() {

  addPoints(100);

  increaseFear(15);

  updateStory(
    `You walk slowly through the village.

Your flashlight flickers.

You notice something scratched into the wall:

"DO NOT TRUST THE CHURCH."

Suddenly...

KNOCK.

KNOCK.

KNOCK.

The sound comes from inside the house beside you.`
  );

  updateChoices([
    ["🚪 Open the door", openDoor],
    ["🔦 Look through the window", windowLook],
    ["🏃 Walk away", walkAway]
  ]);

}


// ========================================
// OPEN DOOR
// ========================================

function openDoor() {

  increaseFear(25);

  addPoints(150);

  addItem("Rusty Key");

  updateStory(
    `The door slowly opens.

The room is completely dark.

You shine your flashlight inside.

Nothing.

Then your flashlight points toward the floor.

There are wet footprints.

They lead toward you.

But there is nobody in the room.

You find a rusty key on the floor.`
  );

  updateChoices([
    ["⛪ Go to the church", goToChurch],
    ["🏚️ Search the house", searchHouse]
  ]);

}


// ========================================
// WINDOW
// ========================================

function windowLook() {

  increaseFear(20);

  updateStory(
    `You look through the window.

At first, you see nothing.

Then...

A face appears behind you in the reflection.

You turn around.

Nobody is there.

When you look back at the window,
the face is gone.`
  );

  updateChoices([
    ["⛪ Run to the church", goToChurch],
    ["🏃 Run away", runAway]
  ]);

}


// ========================================
// WALK AWAY
// ========================================

function walkAway() {

  increaseFear(5);

  addPoints(50);

  updateStory(
    `You decide not to open the door.

You walk away.

For a few seconds, everything is quiet.

Then you hear a whisper behind you:

"Why did you leave me?"

You don't turn around.`
  );

  updateChoices([
    ["⛪ Go to the church", goToChurch],
    ["🏃 Keep running", runAway]
  ]);

}


// ========================================
// SEARCH HOUSE
// ========================================

function searchHouse() {

  addPoints(200);

  addItem("Old Photograph");

  updateStory(
    `You search the abandoned house.

You find an old photograph.

It shows the village from many years ago.

There are dozens of people in the picture.

But one person has been scratched out.

On the back of the photograph:

"HE WAS NEVER HUMAN."`
  );

  updateChoices([
    ["⛪ Go to the church", goToChurch],
    ["🏃 Leave the house", runAway]
  ]);

}


// ========================================
// CHURCH
// ========================================

function goToChurch() {

  increaseFear(20);

  addPoints(250);

  updateStory(
    `You approach the old church.

The doors are already open.

A bell rings above you.

You step inside.

The doors slam shut behind you.

Your flashlight goes out.

...

A voice whispers:

"YOU SHOULDN'T HAVE COME BACK."`
  );

  updateChoices([
    ["🔦 Turn the flashlight back on", turnFlashlightOn],
    ["🚪 Try the door", tryDoor],
    ["🕯️ Follow the voice", followVoice]
  ]);

}


// ========================================
// FLASHLIGHT
// ========================================

function turnFlashlightOn() {

  increaseFear(10);

  addPoints(150);

  updateStory(
    `Your flashlight comes back on.

For one second, you see a tall figure standing
at the end of the church.

You blink.

It's gone.

But there is now a message written on the wall:

"THE CITY REMEMBERS YOU."`
  );

  updateChoices([
    ["🔎 Investigate the message", investigateMessage],
    ["🚪 Try to escape", tryDoor]
  ]);

}


// ========================================
// DOOR
// ========================================

function tryDoor() {

  increaseFear(15);

  updateStory(
    `You pull the church door.

It doesn't move.

You pull harder.

Nothing.

Then someone knocks from the other side.

Three times.

KNOCK.

KNOCK.

KNOCK.

You hear a voice:

"Let me in."`
  );

  updateChoices([
    ["🚪 Open the door", badDoor],
    ["🔦 Step away", turnFlashlightOn]
  ]);

}


// ========================================
// BAD DOOR
// ========================================

function badDoor() {

  player.health -= 25;

  increaseFear(30);

  updateStory(
    `You open the door.

There is nobody outside.

You step forward.

The door slams behind you.

You turn around.

The church is gone.

You are standing in the middle of the forest.`
  );

  updateChoices([
    ["🌲 Enter the forest", forestEnding]
  ]);

}


// ========================================
// FOLLOW VOICE
// ========================================

function followVoice() {

  increaseFear(35);

  player.health -= 10;

  updateStory(
    `You follow the voice beneath the church.

You find a staircase.

The stairs seem to go down forever.

At the bottom is a locked metal door.

Something scratches from the other side.

Then you hear your own voice:

"Don't open it."`
  );

  addItem("Mysterious Symbol");

  updateChoices([
    ["🔑 Search for a key", investigateMessage],
    ["🏃 Go back upstairs", turnFlashlightOn]
  ]);

}


// ========================================
// MESSAGE
// ========================================

function investigateMessage() {

  addPoints(300);

  addItem("Ancient Symbol");

  updateStory(
    `You touch the strange symbol.

The entire church shakes.

For a moment, you see another version of the village.

It is full of people.

They are all staring directly at you.

Then everything disappears.

You have discovered something important.

The city isn't abandoned.

It is waiting.`
  );

  updateChoices([
    ["🚪 Continue deeper", forestEnding]
  ]);

}


// ========================================
// FOREST
// ========================================

function forestEnding() {

  player.level = 2;

  addPoints(500);

  saveGame();

  updateStory(
    `LEVEL COMPLETE.

You survived the abandoned village.

But the forest is waiting.

You can hear something moving between the trees.

LEVEL 2 UNLOCKED:

THE FORBIDDEN FOREST`
  );

  updateChoices([
    ["🌲 Enter the Forbidden Forest", unlockForest],
    ["🗺️ View the map", () => showScreen("mapScreen")]
  ]);

}


// ========================================
// UNLOCK FOREST
// ========================================

function unlockForest() {

  addPoints(1000);

  updateStory(
    `THE FORBIDDEN FOREST

The trees are unnaturally quiet.

There are no birds.

No insects.

No wind.

Then you hear a branch snap behind you.

You turn around.

Nothing.

A voice whispers:

"Grace..."

It knows your name.`
  );

  updateChoices([
    ["🔦 Investigate", investigateForest],
    ["🏃 Run deeper into the forest", runForest]
  ]);

}


// ========================================
// FOREST INVESTIGATION
// ========================================

function investigateForest() {

  increaseFear(25);

  addPoints(250);

  updateStory(
    `You shine your flashlight between the trees.

You see a small red door standing by itself.

There is no building around it.

Just the door.

Something is written above it:

"LEVEL 3"`
  );

  updateChoices([
    ["🚪 Open the door", openForestDoor],
    ["🏃 Leave it alone", runForest]
  ]);

}


// ========================================
// FOREST DOOR
// ========================================

function openForestDoor() {

  increaseFear(30);

  addPoints(500);

  updateStory(
    `You open the red door.

Instead of another room...

You see yourself.

Standing on the other side.

Your other self smiles.

Then it whispers:

"Finally."`
  );

  updateChoices([
    ["👤 Step through", finalChoice],
    ["🏃 Run", runForest]
  ]);

}


// ========================================
// RUN
// ========================================

function runForest() {

  increaseFear(10);

  updateStory(
    `You run.

Branches hit your face.

You don't stop.

Behind you, something is running too.

But whatever it is...

It isn't breathing.`
  );

  updateChoices([
    ["🔦 Turn around", finalChoice]
  ]);

}


// ========================================
// FINAL CHOICE
// ========================================

function finalChoice() {

  addPoints(750);

  updateStory(
    `You turn around.

Nothing.

The forest is completely silent.

Then your flashlight flickers.

A face appears for half a second.

GAME DEMO COMPLETE.

But this is only the beginning...`
  );

  updateChoices([
    ["🏆 View leaderboard", () => showScreen("leaderboardScreen")],
    ["🗺️ View map", () => showScreen("mapScreen")],
    ["🔄 Play again", startGame]
  ]);

  saveGame();

}


// ========================================
// RUN AWAY
// ========================================

function runAway() {

  player.health -= 5;

  addPoints(50);

  updateStory(
    `You run as fast as you can.

You reach the edge of the village.

You think you're safe.

Then you hear footsteps behind you.

You don't look back.

Something whispers:

"See you tomorrow."`
  );

  updateChoices([
    ["🔦 Turn around", finalChoice],
    ["🏃 Keep running", forestEnding]
  ]);

}


// ========================================
// POINTS
// ========================================

function addPoints(amount) {

  player.points += amount;

  updateUI();

  saveGame();

}


// ========================================
// FEAR
// ========================================

function increaseFear(amount) {

  player.fear += amount;

  if (player.fear > 100) {
    player.fear = 100;
  }

  updateUI();

  if (player.fear >= 100) {
    player.health -= 20;

    player.fear = 70;

    updateStory(
      `Your breathing becomes heavy.

The darkness closes around you.

You feel like something is standing directly behind you.

You don't dare turn around.`
    );
  }

}


// ========================================
// INVENTORY
// ========================================

function addItem(item) {

  if (!player.inventory.includes(item)) {

    player.inventory.push(item);

    updateInventory();

  }

}


// ========================================
// UPDATE INVENTORY
// ========================================

function updateInventory() {

  const container =
    document.getElementById("inventoryItems");

  container.innerHTML = "";

  player.inventory.forEach(item => {

    let icon = "📦";

    if (item === "Flashlight") icon = "🔦";
    if (item === "Rusty Key") icon = "🔑";
    if (item === "Old Photograph") icon = "📷";
    if (item === "Mysterious Symbol") icon = "☠️";
    if (item === "Ancient Symbol") icon = "🔮";

    const element =
      document.createElement("div");

    element.className = "item";

    element.innerHTML = `
      ${icon}
      <small>${item}</small>
    `;

    container.appendChild(element);

  });

}


// ========================================
// UPDATE UI
// ========================================

function updateUI() {

  const points =
    document.getElementById("points");

  const healthBar =
    document.getElementById("healthBar");

  const fearBar =
    document.getElementById("fearBar");

  const leaderboardPoints =
    document.getElementById("leaderboardPoints");

  if (points) {
    points.textContent = player.points;
  }

  if (healthBar) {
    healthBar.style.width =
      player.health + "%";
  }

  if (fearBar) {
    fearBar.style.width =
      player.fear + "%";
  }

  if (leaderboardPoints) {
    leaderboardPoints.textContent =
      player.points + " AP";
  }

  updateInventory();

}


// ========================================
// LOGIN
// ========================================

function loginPlayer() {

  const name =
    prompt("Enter your player name:");

  if (name && name.trim() !== "") {

    player.name = name.trim();

    document.getElementById("playerName")
      .textContent = player.name;

    saveGame();

    alert(
      `Welcome to The Lost City, ${player.name}.`
    );

  }

}


// ========================================
// INITIALIZE
// ========================================

updateUI();

document.getElementById("playerName")
  .textContent = player.name;Titan