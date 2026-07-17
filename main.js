const loginForm = document.getElementById('login-form');
const terminalOutput = document.getElementById('terminal-output');
const mainContent = document.getElementById('main-content');
const error = document.getElementById('error');
const keySound = document.getElementById('keySound');
const errorSound = document.getElementById('errorSound');

const users = {
  "ADMIN#1_011612_7352": "1029384756Ks",
  "ADMIN#2_121911_4650": "13579753Cc",
  "VEIWER#1_071015_7692": "0192837465Ls"
};

// Simulate terminal boot
function typeWriter(text, element, delay = 50, callback) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, delay);
    } else if (callback) {
      callback();
    }
  }
  typing();
}

// Boot sequence
setTimeout(() => {
  terminalOutput.innerHTML = '';
  typeWriter('Access Point: [SCP-Terminal: ██-Node-4]', terminalOutput, 40, () => {
    setTimeout(() => {
      terminalOutput.innerHTML = '';
      typeWriter('Status: Awaiting Authentication...', terminalOutput, 40, () => {
        loginForm.style.display = 'block';
      });
    }, 1000);
  });
}, 1000);

// Sound on key press
document.getElementById('username').addEventListener('keydown', playKeySound);
document.getElementById('password').addEventListener('keydown', playKeySound);

function playKeySound(e) {
  if (e.key.length === 1) {
    keySound.currentTime = 0;
    keySound.play();
  }
}

// Login validation
function checkPassword() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;

  if (users[username] && users[username] === password) {
    document.getElementById('login-screen').style.display = 'none';
    mainContent.style.display = 'block';
  } else {
    errorSound.play();
    error.classList.add('show');
    setTimeout(() => error.classList.remove('show'), 1500);
  }
}
