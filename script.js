function typewriter() {
    const typewriterText = document.querySelector('.typewriter-text');
    const text = "I'm sorry, I know I've disappointed you. It doesn't help that we're itna door, but me hiding things makes it a 100x worse.This is no fair to you.  I promise you I'm gonna be better. I love you, Surya. "; // Replace with your desired text
    const delay = 100; // Adjust the delay between letters (in milliseconds)
  
    let i = 0;
  
    const typewriterInterval = setInterval(() => {
      typewriterText.textContent += text.charAt(i);
      i++;
  
      if (i === text.length) {
        clearInterval(typewriterInterval);
      }
    }, delay);
  }
  
  typewriter();