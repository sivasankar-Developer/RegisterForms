// Generate a random CAPTCHA code
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  }
  
  // Render CAPTCHA on canvas
  function renderCaptcha() {
    const canvas = document.getElementById('captchaCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 50;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    const captchaCode = generateCaptcha();
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';
    ctx.fillText(captchaCode, 30, 35);
  
    // Store the code for validation
    canvas.setAttribute('data-code', captchaCode);
  }
  
  // Verify CAPTCHA input
  function verifyCaptcha() {
    const input = document.getElementById('captchaInput').value.trim();
    const captchaCode = document.getElementById('captchaCanvas').getAttribute('data-code');
    const status = document.getElementById('captchaStatus');
  
    if (input === captchaCode) {
      status.style.color = 'green';
      status.textContent = 'CAPTCHA Verified!';
    } else {
      status.style.color = 'red';
      status.textContent = 'Incorrect CAPTCHA. Try again!';
    }
  }
  
  // Event listeners
  document.getElementById('refreshCaptcha').addEventListener('click', renderCaptcha);
  document.getElementById('verifyCaptcha').addEventListener('click', verifyCaptcha);
  
  // Initialize CAPTCHA on page load
  renderCaptcha();
  