document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('form-msg');
  
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        msg.textContent = "Thank you for your message!";
        form.reset();
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle logic (already in your file)
    const toggle = document.getElementById('dark-toggle');
    const body = document.body;
  
    if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
    }
  
    if (toggle) {
      toggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const theme = body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
      });
    }
  
    // Dynamic About Page
    const aboutContainer = document.getElementById('about-container');
    if (aboutContainer) {
      const aboutPost = {
        title: "Welcome to My Blog!",
        paragraphs: [
          "Hey there! I'm really glad you stopped by. This blog is a space where I share my thoughts, projects, tutorials, and lessons learned as I explore the world of web development, technology, creativity, and more.",
          "I started this blog as a way to document my journey and help others who might be walking a similar path. Whether you're just starting out in coding, looking for inspiration, or just browsing around for something interesting to read — you're in the right place.",
          "I believe in learning by doing, sharing what you learn, and always staying curious. Most of the content you'll find here is hand-coded with HTML, CSS, and JavaScript — no fancy frameworks, just raw, fun web development.",
          "When I’m not working on projects or writing posts, I enjoy reading, sketching ideas, and experimenting with new technologies.",
          "Thanks again for visiting. I hope you find something useful, inspiring, or just plain cool here. Feel free to connect via the <a href='contact.html'>Contact</a> page if you want to reach out.",
          "Happy coding!"
        ]
      };
  
      const article = document.createElement('article');
      article.className = "about-post";
  
      const title = document.createElement('h2');
      title.textContent = aboutPost.title;
      article.appendChild(title);
  
      aboutPost.paragraphs.forEach(text => {
        const p = document.createElement('p');
        p.innerHTML = text;
        article.appendChild(p);
      });
  
      aboutContainer.appendChild(article);
    }
  
    // Contact form logic
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('form-msg');
    if (form && msg) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        msg.textContent = "Thank you for your message!";
        form.reset();
      });
    }
  });
  