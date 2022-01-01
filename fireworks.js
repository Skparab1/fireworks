
      const canvas = document.querySelector('.myCanvas');
      const width = canvas.width = window.innerWidth;
      const height = canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(0,0,0)';
      ctx.fillStyle = 'rgb(255, 0, 0)';

      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.fill();

      setTimeout(() => {ctx.lineTo(x,y+400-(y/10))}, startingdelay+100*1);
      setTimeout(() => {ctx.lineTo(x,y+400-(2*y/10))}, startingdelay+100*2);
      setTimeout(() => {ctx.lineTo(x,y+400-(3*y/10))}, startingdelay+100*3);
      setTimeout(() => {ctx.lineTo(x,y+400-(4*y/10))}, startingdelay+100*4);
      setTimeout(() => {ctx.lineTo(x,y+400-(5*y/10))}, startingdelay+100*5);
      setTimeout(() => {ctx.lineTo(x,y+400-(6*y/10))}, startingdelay+100*6);
      setTimeout(() => {ctx.lineTo(x,y+400-(7*y/10))}, startingdelay+100*7);
      setTimeout(() => {ctx.lineTo(x,y+400-(8*y/10))}, startingdelay+100*8);
      setTimeout(() => {ctx.lineTo(x,y+400-(9*y/10))}, startingdelay+100*9);
      setTimeout(() => {ctx.lineTo(x,400)}, startingdelay+100*10);
