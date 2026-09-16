import re

with open('app.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. State variable enhancement
old_state = """// Kademeli Sıcaklık (1 - 5)
let currentHeatLevel = 1;

// Her 4 Çevirişte 1 Cesaret Sayacı
let spinsSinceLastDare = 0;"""

new_state = """// Kademeli Sıcaklık (1 - 5): Kesinlikle Level 1'den başlar!
let currentHeatLevel = 1;
let playedDareIndexesByLevel = { 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(), 5: new Set() };
let currentActiveDareIndex = null;

// Her 4 Çevirişte 1 Cesaret Sayacı
let spinsSinceLastDare = 0;"""

assert old_state in content, "old_state not found"
content = content.replace(old_state, new_state, 1)

# 2. triggerThreeMysteryBoxes & onMysteryBoxClick & displayDareResult
old_mystery = """function triggerThreeMysteryBoxes() {
  audio.playHeartbeat();

  // Aktif seviyedeki ve bir üst/alt seviyedeki replikleri seç
  const baseLvlIndex = Math.min(4, Math.max(0, currentHeatLevel - 1));
  const poolCurrent = DARE_LEVELS[baseLvlIndex];
  const poolNext = DARE_LEVELS[Math.min(4, baseLvlIndex + 1)];

  const item1 = getRandomItem(poolCurrent);
  const item2 = getRandomItem(poolCurrent);
  const item3 = getRandomItem(poolNext); // Biri daha sıcak!

  const pool = [item1, item2, item3].sort(() => 0.5 - Math.random());
  currentMysteryBoxes = pool;

  // Kutuların renklerini dinamik değiştir
  const shuffledColors = [...BOX_COLOR_CLASSES].sort(() => 0.5 - Math.random());
  for (let i = 0; i < 3; i++) {
    const boxEl = document.getElementById(`box-${i + 1}`);
    if (boxEl) {
      BOX_COLOR_CLASSES.forEach(c => boxEl.classList.remove(c));
      boxEl.classList.remove('shake');
      boxEl.classList.add(shuffledColors[i]);
    }
  }

  const activeP = PLAYERS[activePlayerIndex];
  document.getElementById('mystery-badge').textContent = `⚡ SANAL CESARET • ${LEVEL_TITLES[baseLvlIndex]}`;
  document.getElementById('mystery-subtitle').textContent = `Sıcaklık seviyesi: ${LEVEL_TITLES[baseLvlIndex]}... Kutulardan birini seç!`;
  document.getElementById('mystery-turn-note').innerHTML = `Sıradaki Oyuncu: <strong>${activeP.name}</strong> • Bir kutu seç!`;
  document.getElementById('mystery-box-modal').classList.remove('hidden');
}

function onMysteryBoxClick(boxIndex) {
  const chosenBoxEl = document.getElementById(`box-${boxIndex + 1}`);
  if (!chosenBoxEl) return;

  chosenBoxEl.classList.add('shake');
  audio.playHeartbeat();

  setTimeout(() => {
    audio.playBoxReveal();
    triggerConfetti();

    document.getElementById('mystery-box-modal').classList.add('hidden');
    chosenBoxEl.classList.remove('shake');

    const result = currentMysteryBoxes[boxIndex];
    displayDareResult(result);
  }, 700);
}

let currentActiveItem = null;
let currentItemType = 'dare';
let currentItemCategory = '';

function displayDareResult(item) {
  currentActiveItem = item;
  currentItemType = 'dare';
  currentItemCategory = item.levelName;

  const badgeEl = document.getElementById('result-level-badge');
  badgeEl.className = 'result-level-badge ' + item.badgeClass;
  badgeEl.textContent = item.levelName;

  const activeP = PLAYERS[activePlayerIndex];
  const targetP = PLAYERS[1 - activePlayerIndex];

  document.getElementById('active-speaker-avatar').textContent = activeP.avatar;
  document.getElementById('active-speaker-text').textContent = `${activeP.name}, ${targetP.name}'e Söylüyor:`;

  const textEl = document.getElementById('result-text');
  if (activeP.gender === 'female') {
    textEl.textContent = item.femaleText;
  } else {
    textEl.textContent = item.maleText;
  }

  document.getElementById('dare-instruction').innerHTML = `🎙️ <strong>${item.desc}</strong>`;

  resetTimer();
  document.getElementById('result-modal').classList.remove('hidden');
}"""

new_mystery = """function triggerThreeMysteryBoxes() {
  audio.playHeartbeat();

  // Aktif seviyedeki cesaretler (Asla birden level 5 gelemez! 1'den başlar, 1'ler bitince 2'ye geçer)
  const baseLvlIndex = Math.min(4, Math.max(0, currentHeatLevel - 1));
  const poolCurrent = DARE_LEVELS[baseLvlIndex];

  if (!playedDareIndexesByLevel[currentHeatLevel]) {
    playedDareIndexesByLevel[currentHeatLevel] = new Set();
  }
  const playedSet = playedDareIndexesByLevel[currentHeatLevel];

  // Henüz oynanmamış cesaretleri topla
  let unplayed = [];
  for (let i = 0; i < poolCurrent.length; i++) {
    if (!playedSet.has(i)) {
      unplayed.push({ item: poolCurrent[i], idx: i });
    }
  }

  // Eğer bu seviyedeki cesaretler bittiyse (1'ler bittikten sonra 2'ye geç)
  if (unplayed.length < 3) {
    if (currentHeatLevel < 5) {
      const prevLvl = currentHeatLevel;
      currentHeatLevel++;
      showLevelToast(`🎉 TEBRİKLER! LEVEL ${prevLvl} TAMAMLANDI! LEVEL ${currentHeatLevel}'E GEÇTİNİZ! 🔥`);
      updateUI();
      return triggerThreeMysteryBoxes();
    } else {
      // Level 5 bittiyse sıfırla, döngüyü sürdür
      playedSet.clear();
      unplayed = poolCurrent.map((item, idx) => ({ item, idx }));
    }
  }

  // Mevcut seviyeden 3 farklı benzersiz cesaret seç
  const shuffled = [...unplayed].sort(() => 0.5 - Math.random());
  currentMysteryBoxes = [shuffled[0], shuffled[1], shuffled[2]];

  // Kutuların renklerini dinamik değiştir
  const shuffledColors = [...BOX_COLOR_CLASSES].sort(() => 0.5 - Math.random());
  for (let i = 0; i < 3; i++) {
    const boxEl = document.getElementById(`box-${i + 1}`);
    if (boxEl) {
      BOX_COLOR_CLASSES.forEach(c => boxEl.classList.remove(c));
      boxEl.classList.remove('shake');
      boxEl.classList.add(shuffledColors[i]);
    }
  }

  const activeP = PLAYERS[activePlayerIndex];
  const badgeEl = document.getElementById('mystery-badge');
  if (badgeEl) badgeEl.textContent = `⚡ SANAL CESARET • LEVEL ${currentHeatLevel} (${LEVEL_TITLES[baseLvlIndex]})`;
  const subtitleEl = document.getElementById('mystery-subtitle');
  if (subtitleEl) subtitleEl.textContent = `Seviye ${currentHeatLevel} • Kutulardan birini seç, partnerine cesurca söyle!`;
  const turnEl = document.getElementById('mystery-turn-note');
  if (turnEl) turnEl.innerHTML = `Sıradaki Oyuncu: <strong>${activeP.name}</strong> • Bir kutu seç!`;
  document.getElementById('mystery-box-modal').classList.remove('hidden');
}

function onMysteryBoxClick(boxIndex) {
  const chosenBoxEl = document.getElementById(`box-${boxIndex + 1}`);
  if (!chosenBoxEl) return;

  chosenBoxEl.classList.add('shake');
  audio.playHeartbeat();

  setTimeout(() => {
    audio.playBoxReveal();
    triggerConfetti();

    document.getElementById('mystery-box-modal').classList.add('hidden');
    chosenBoxEl.classList.remove('shake');

    const selectedEntry = currentMysteryBoxes[boxIndex];
    if (selectedEntry) {
      displayDareResult(selectedEntry.item, selectedEntry.idx);
    }
  }, 700);
}

let currentActiveItem = null;
let currentItemType = 'dare';
let currentItemCategory = '';

function displayDareResult(item, dareIdx) {
  currentActiveItem = item;
  currentItemType = 'dare';
  currentActiveDareIndex = (typeof dareIdx === 'number') ? dareIdx : null;
  currentItemCategory = item.levelName;

  const badgeEl = document.getElementById('result-level-badge');
  badgeEl.className = 'result-level-badge ' + item.badgeClass;
  badgeEl.textContent = item.levelName;

  const activeP = PLAYERS[activePlayerIndex];
  const targetP = PLAYERS[1 - activePlayerIndex];

  document.getElementById('active-speaker-avatar').textContent = activeP.avatar;
  document.getElementById('active-speaker-text').textContent = `${activeP.name}, ${targetP.name}'e Söylüyor:`;

  const textEl = document.getElementById('result-text');
  if (activeP.gender === 'female') {
    textEl.textContent = item.femaleText;
  } else {
    textEl.textContent = item.maleText;
  }

  document.getElementById('dare-instruction').innerHTML = `🎙️ <strong>${item.desc}</strong>`;

  resetTimer();
  document.getElementById('result-modal').classList.remove('hidden');
}"""

assert old_mystery in content, "old_mystery not found"
content = content.replace(old_mystery, new_mystery, 1)

# 3. handleActionSuccess
old_success = """function handleActionSuccess() {
  audio.playSuccess();
  triggerConfetti();

  const activeP = PLAYERS[activePlayerIndex];
  activeP.score += 10;
  completedCount++;

  // Her başarılı cesarette veya birkaç turda sıcaklık seviyesi kademeli artar
  if (currentItemType === 'dare' && currentHeatLevel < 5) {
    currentHeatLevel++;
  }

  logHistoryItem(activeP, currentActiveItem, currentItemType, 'success');
  updateUI();
  closeResultModal();
  switchTurn();
}"""

new_success = """function handleActionSuccess() {
  audio.playSuccess();
  triggerConfetti();

  const activeP = PLAYERS[activePlayerIndex];
  activeP.score += 10;
  completedCount++;

  // Eğer cesaret ise bu seviyede oynandı olarak kaydet
  if (currentItemType === 'dare') {
    if (typeof currentActiveDareIndex === 'number' && currentActiveDareIndex >= 0) {
      if (!playedDareIndexesByLevel[currentHeatLevel]) {
        playedDareIndexesByLevel[currentHeatLevel] = new Set();
      }
      playedDareIndexesByLevel[currentHeatLevel].add(currentActiveDareIndex);
    }

    // 1'ler bittikten sonra 2'ye geçiş kontrolü
    const totalInCurrentLvl = DARE_LEVELS[currentHeatLevel - 1].length;
    if (playedDareIndexesByLevel[currentHeatLevel].size >= totalInCurrentLvl && currentHeatLevel < 5) {
      const prevLvl = currentHeatLevel;
      currentHeatLevel++;
      showLevelToast(`🎉 TEBRİKLER! LEVEL ${prevLvl} BİTTİ, LEVEL ${currentHeatLevel}'E GEÇİLDİ! 🔥`);
    }
  }

  logHistoryItem(activeP, currentActiveItem, currentItemType, 'success');
  updateUI();
  closeResultModal();
  switchTurn();
}"""

assert old_success in content, "old_success not found"
content = content.replace(old_success, new_success, 1)

# 4. handleActionPass
old_pass = """function handleActionPass() {
  audio.playDrinkPenalty();

  const activeP = PLAYERS[activePlayerIndex];
  activeP.drinks += 1;
  completedCount++;

  logHistoryItem(activeP, currentActiveItem, currentItemType, 'pass');
  updateUI();
  closeResultModal();

  // Rastgele bir ceza seç"""

new_pass = """function handleActionPass() {
  audio.playDrinkPenalty();

  const activeP = PLAYERS[activePlayerIndex];
  activeP.drinks += 1;
  completedCount++;

  // Eğer cesaret ise bu seviyede oynandı olarak kaydet
  if (currentItemType === 'dare') {
    if (typeof currentActiveDareIndex === 'number' && currentActiveDareIndex >= 0) {
      if (!playedDareIndexesByLevel[currentHeatLevel]) {
        playedDareIndexesByLevel[currentHeatLevel] = new Set();
      }
      playedDareIndexesByLevel[currentHeatLevel].add(currentActiveDareIndex);
    }

    const totalInCurrentLvl = DARE_LEVELS[currentHeatLevel - 1].length;
    if (playedDareIndexesByLevel[currentHeatLevel].size >= totalInCurrentLvl && currentHeatLevel < 5) {
      const prevLvl = currentHeatLevel;
      currentHeatLevel++;
      showLevelToast(`🎉 LEVEL ${prevLvl} BİTTİ, LEVEL ${currentHeatLevel}'E GEÇİLDİ! 🔥`);
    }
  }

  logHistoryItem(activeP, currentActiveItem, currentItemType, 'pass');
  updateUI();
  closeResultModal();

  // Rastgele bir kışkırtıcı ceza seç"""

assert old_pass in content, "old_pass not found"
content = content.replace(old_pass, new_pass, 1)

# 5. updateUI and showLevelToast
old_update = """  // Sıcaklık barı kaldırıldığı için güvenli kontrol
  const heatTag = document.getElementById('heat-level-tag');
  if (heatTag) heatTag.textContent = LEVEL_TITLES[currentHeatLevel - 1];
  const heatFill = document.getElementById('heat-fill');
  if (heatFill) heatFill.style.width = `${currentHeatLevel * 20}%`;

  document.querySelectorAll('.heat-steps .step-label').forEach((el, idx) => {
    if (idx + 1 <= currentHeatLevel) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });"""

new_update = """  // Level Gösterge Çubuğu (1 - 2 - 3 - 4 - 5)
  for (let lvl = 1; lvl <= 5; lvl++) {
    const pill = document.getElementById(`lvl-btn-${lvl}`);
    if (pill) {
      if (lvl === currentHeatLevel) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    }
  }"""

assert old_update in content, "old_update not found"
content = content.replace(old_update, new_update, 1)

# Add showLevelToast function right before updateUI
old_before_update = """// UI Güncelleme (Puanlar, Cezalar & Sıra)
function updateUI() {"""

new_before_update = """// Level Bildirim Toast'ı
function showLevelToast(msg) {
  let toast = document.getElementById('game-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'game-toast';
    toast.className = 'game-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  audio.playSuccess();
  triggerConfetti();
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// UI Güncelleme (Puanlar, Cezalar & Sıra)
function updateUI() {"""

assert old_before_update in content, "old_before_update not found"
content = content.replace(old_before_update, new_before_update, 1)

# 6. saveGameState & loadGameState
old_storage = """function saveGameState() {
  try {
    const data = {
      players: PLAYERS,
      activePlayerIndex,
      completedCount,
      currentHeatLevel,
      spinsSinceLastDare,
      history: gameHistory.slice(0, 30)
    };
    localStorage.setItem('red_wheel_2_state_v4', JSON.stringify(data));
  } catch (e) {}
}

function loadGameState() {
  try {
    const raw = localStorage.getItem('red_wheel_2_state_v4');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.players && data.players.length === 2) {
        PLAYERS[0].name = data.players[0].name || "Kadın Oyuncu";
        PLAYERS[0].score = data.players[0].score || 0;
        PLAYERS[0].drinks = data.players[0].drinks || 0;

        PLAYERS[1].name = data.players[1].name || "Erkek Oyuncu";
        PLAYERS[1].score = data.players[1].score || 0;
        PLAYERS[1].drinks = data.players[1].drinks || 0;

        document.getElementById('p1-name').textContent = PLAYERS[0].name;
        document.getElementById('p2-name').textContent = PLAYERS[1].name;
      }
      if (typeof data.activePlayerIndex === 'number') activePlayerIndex = data.activePlayerIndex;
      if (typeof data.completedCount === 'number') completedCount = data.completedCount;
      if (typeof data.currentHeatLevel === 'number') currentHeatLevel = data.currentHeatLevel;
      if (typeof data.spinsSinceLastDare === 'number') spinsSinceLastDare = data.spinsSinceLastDare;
      if (Array.isArray(data.history)) {
        gameHistory = data.history;
        renderHistory();
      }
    }
  } catch (e) {}
}"""

new_storage = """function saveGameState() {
  try {
    const serializableDares = {};
    for (let lvl = 1; lvl <= 5; lvl++) {
      serializableDares[lvl] = Array.from(playedDareIndexesByLevel[lvl] || []);
    }
    const data = {
      players: PLAYERS,
      activePlayerIndex,
      completedCount,
      currentHeatLevel,
      spinsSinceLastDare,
      playedDareIndexesByLevel: serializableDares,
      history: gameHistory.slice(0, 30)
    };
    localStorage.setItem('red_wheel_2_state_v5', JSON.stringify(data));
  } catch (e) {}
}

function loadGameState() {
  try {
    const raw = localStorage.getItem('red_wheel_2_state_v5');
    if (raw) {
      const data = JSON.parse(raw);
      if (data.players && data.players.length === 2) {
        PLAYERS[0].name = data.players[0].name || "Kadın Oyuncu";
        PLAYERS[0].score = data.players[0].score || 0;
        PLAYERS[0].drinks = data.players[0].drinks || 0;

        PLAYERS[1].name = data.players[1].name || "Erkek Oyuncu";
        PLAYERS[1].score = data.players[1].score || 0;
        PLAYERS[1].drinks = data.players[1].drinks || 0;

        document.getElementById('p1-name').textContent = PLAYERS[0].name;
        document.getElementById('p2-name').textContent = PLAYERS[1].name;
      }
      if (typeof data.activePlayerIndex === 'number') activePlayerIndex = data.activePlayerIndex;
      if (typeof data.completedCount === 'number') completedCount = data.completedCount;
      if (typeof data.currentHeatLevel === 'number' && data.currentHeatLevel >= 1 && data.currentHeatLevel <= 5) {
        currentHeatLevel = data.currentHeatLevel;
      }
      if (typeof data.spinsSinceLastDare === 'number') spinsSinceLastDare = data.spinsSinceLastDare;
      if (data.playedDareIndexesByLevel) {
        for (let lvl = 1; lvl <= 5; lvl++) {
          if (Array.isArray(data.playedDareIndexesByLevel[lvl])) {
            playedDareIndexesByLevel[lvl] = new Set(data.playedDareIndexesByLevel[lvl]);
          }
        }
      }
      if (Array.isArray(data.history)) {
        gameHistory = data.history;
        renderHistory();
      }
    }
  } catch (e) {}
}"""

assert old_storage in content, "old_storage not found"
content = content.replace(old_storage, new_storage, 1)

# 7. Level buttons event listeners & reset button
old_listeners = """  // Sıcaklık Seviye Seçimi (Kullanıcı manuel olarak da seviyeye tıklayabilir)
  document.querySelectorAll('.heat-steps .step-label').forEach((el) => {
    el.addEventListener('click', () => {
      const lvl = parseInt(el.getAttribute('data-lvl'));
      if (lvl >= 1 && lvl <= 5) {
        currentHeatLevel = lvl;
        updateUI();
      }
    });
  });"""

new_listeners = """  // LEVEL ÇUBUĞU (1 - 2 - 3 - 4 - 5) TIKLAMA DESTEĞİ
  for (let lvl = 1; lvl <= 5; lvl++) {
    const btn = document.getElementById(`lvl-btn-${lvl}`);
    if (btn) {
      btn.addEventListener('click', () => {
        currentHeatLevel = lvl;
        updateUI();
        audio.playTick(450 + lvl * 70);
        showLevelToast(`🔥 LEVEL ${lvl} SEÇİLDİ! (${LEVEL_TITLES[lvl - 1]})`);
      });
    }
  }"""

assert old_listeners in content, "old_listeners not found"
content = content.replace(old_listeners, new_listeners, 1)

# 8. Reset button update
old_reset = """      localStorage.removeItem('red_wheel_2_state_v4');"""
new_reset = """      playedDareIndexesByLevel = { 1: new Set(), 2: new Set(), 3: new Set(), 4: new Set(), 5: new Set() };
      currentActiveDareIndex = null;
      localStorage.removeItem('red_wheel_2_state_v5');"""

assert old_reset in content, "old_reset not found"
content = content.replace(old_reset, new_reset, 1)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("SUCCESS: app.js updated successfully with Level 1-2-3-4-5 sequential system!")
