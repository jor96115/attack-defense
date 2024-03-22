document.addEventListener('DOMContentLoaded', function() {
    // 網頁載入時顯示About頁面
    showSection('about');

    // 訪客人數統計
    var visitorCount = document.getElementById('visitor-count');
    var count = parseInt(localStorage.getItem('visitorCount')) || 0;
    count = 0 ;
    count++; // 增加訪客次數
    localStorage.setItem('visitorCount', count); // 儲存新的訪客次數
    visitorCount.innerText = count;
  });
  
  // JavaScript to handle showing and hiding sections
  function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }
    document.getElementById(sectionId).style.display = 'block';
  }

  function postMessage() {
    var messageInput = document.getElementById('message-input');
    var messagesDiv = document.getElementById('messages');
    
    if (messageInput.value.trim() !== "") { // 確保輸入不是空白
      // 創建一個新的留言元素
      var messageDiv = document.createElement('div');
      messageDiv.innerText = messageInput.value;
      messagesDiv.appendChild(messageDiv); // 將留言添加到留言板
      messageInput.value = ''; // 清空輸入框
    } else {
      alert("請輸入留言內容"); // 如果沒有輸入，顯示提示
    }
  }
  