function toggleGif(imageName, event) {
    var gifContainer = document.getElementById('gifContainer');
    var gifSrc = 'pic/' + imageName + '.gif';
  
    // 判断当前GIF是否显示
    var isGifVisible = gifContainer.style.display === 'block';
  
    // 设置GIF的位置为鼠标点击位置
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    gifContainer.style.left = mouseX + 'px';
    gifContainer.style.top = mouseY + 'px';
  
    // 如果GIF可见，隐藏；如果不可见，显示
    gifContainer.style.display = isGifVisible ? 'none' : 'block';
  
    // 如果GIF可见，清空容器内容
    if (isGifVisible) {
      gifContainer.innerHTML = '';
    } else {
      // 如果GIF不可见，添加GIF图片到容器
      gifContainer.innerHTML = '<img src="' + gifSrc + '" alt="GIF Image">';
    }
  }
  