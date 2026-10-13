<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Lost City</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <!-- HOME SCREEN -->
  <section id="homeScreen" class="screen active">

    <nav>
      <div class="logo">THE <span>LOST</span> CITY</div>

      <div class="nav-links">
        <a href="#" onclick="showScreen('homeScreen')">Home</a>
        <a href="#" onclick="showScreen('gameScreen')">Play</a>
        <a href="#" onclick="showScreen('mapScreen')">Map</a>
        <a href="#" onclick="showScreen('leaderboardScreen')">Leaderboard</a>
      </div>

      <button class="login-btn" onclick="loginPlayer()">LOGIN</button>
    </nav>

    <div class="hero">

      <div class="hero-content">
        <p class="warning">⚠ ENTER AT YOUR OWN RISK</p>

        <h1>
          THE<br>
          <span>LOST CITY</span>
        </h1>

        <p class="tagline">
          Some places should stay forgotten.
        </p>

        <p class="description">
          Explore an abandoned city filled with secrets,
          strange sounds and things that should not be there.
        </p>

        <button class="play-btn" onclick="startGame()">
          PLAY NOW →
        </button>
      </div>

      <div class="moon"></div>

      <div class="hero-character">
        🔦
      </div>

    </div>

  </section>


  <!-- GAME SCREEN -->
  <section id="gameScreen" class="screen">

    <header class="game-header">

      <div class="game-logo">
        THE <span>LOST CITY</span>
      </div>

      <button onclick="showScreen('homeScreen')">EXIT</button>

    </header>

    <main class="game-container">

      <div class="game-top">

        <div>
          <p class="level-number">LEVEL 01</p>
          <h2>THE ABANDONED VILLAGE</h2>
        </div>

        <div class="points">
          ⭐ <span id="points">0</span> AP
        </div>

      </div>


      <div class="game-world">

        <div class="fog fog-one"></div>
        <div class="fog fog-two"></div>

        <div class="church">
          ⛪
        </div>

        <div class="tree tree-one">🌲</div>
        <div class="tree tree-two">🌲</div>

        <div class="player">
          🧍
        </div>

        <div class="shadow">
          👤
        </div>

        <div class="location-name">
          ABANDONED VILLAGE
        </div>

      </div>


      <!-- STATS -->

      <div class="stats">

        <div class="stat">
          <span>❤️ HEALTH</span>
          <div class="bar">
            <div id="healthBar" class="health"></div>
          </div>
        </div>

        <div class="stat">
          <span>😨 FEAR</span>
          <div class="bar">
            <div id="fearBar" class="fear"></div>
          </div>
        </div>

      </div>


      <!-- STORY -->

      <div class="story-box">

        <p id="storyText">
          You wake up in the middle of an abandoned village.
          The streets are empty.

          Somewhere in the distance, you hear a bell.

          Then you hear something else...

          Footsteps.

          They stop when you stop.
        </p>

      </div>


      <!-- CHOICES -->

      <div id="choices" class="choices">

        <button onclick="investigate()">
          🔦 Investigate the village
        </button>

        <button onclick="goToChurch()">
          ⛪ Enter the old church
        </button>

        <button onclick="runAway()">
          🏃 Leave the village
        </button>

      </div>


      <!-- INVENTORY -->

      <div class="inventory">

        <h3>🎒 INVENTORY</h3>

        <div id="inventoryItems" class="inventory-items">

          <div class="item">
            🔦
            <small>Flashlight</small>
          </div>

        </div>

      </div>

    </main>

  </section>


  <!-- MAP SCREEN -->

  <section id="mapScreen" class="screen">

    <div class="simple-header">

      <h1>🗺️ CITY MAP</h1>

      <button onclick="showScreen('homeScreen')">
        ← BACK
      </button>

    </div>

    <div class="map">

      <div class="map-location unlocked">
        🏚️
        <span>Abandoned Village</span>
      </div>

      <div class="map-line"></div>

      <div class="map-location locked">
        🌲
        <span>Forbidden Forest</span>
        🔒
      </div>

      <div class="map-line"></div>

      <div class="map-location locked">
        ⛏️
        <span>Old Mine</span>
        🔒
      </div>

      <div class="map-line"></div>

      <div class="map-location locked">
        🏰
        <span>Dark Castle</span>
        🔒
      </div>

    </div>

  </section>


  <!-- LEADERBOARD -->

  <section id="leaderboardScreen" class="screen">

    <div class="simple-header">

      <h1>🏆 LEADERBOARD</h1>

      <button onclick="showScreen('homeScreen')">
        ← BACK
      </button>

    </div>

    <div class="leaderboard">

      <div class="leader first">
        <span>🥇</span>
        <strong>ShadowX</strong>
        <span>12,450 AP</span>
      </div>

      <div class="leader second">
        <span>🥈</span>
        <strong>Raven</strong>
        <span>11,980 AP</span>
      </div>

      <div class="leader third">
        <span>🥉</span>
        <strong>NightWalker</strong>
        <span>10,320 AP</span>
      </div>

      <div class="leader">
        <span>4</span>
        <strong id="playerName">Grace</strong>
        <span id="leaderboardPoints">0 AP</span>
      </div>

    </div>

  </section>


  <!-- GAME OVER -->

  <div id="gameOver" class="modal">

    <div class="modal-content">

      <h2>YOU SURVIVED...</h2>

      <p>
        But something followed you out.
      </p>

      <div class="final-score">
        ⭐ <span id="finalPoints">0</span> AP
      </div>

      <button onclick="startGame()">
        TRY AGAIN
      </button>

    </div>

  </div>


  <script src="script.js"></script>

</body>
</html># html.lost city
My website
