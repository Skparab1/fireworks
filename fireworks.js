
      const canvas = document.querySelector('.myCanvas');
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(0,0,0)';
      ctx.fillStyle = 'rgb(255, 0, 0)';

      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.fill();
