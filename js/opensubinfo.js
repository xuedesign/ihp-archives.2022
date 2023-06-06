// 獲取所有的「open」連結元素
var openLinks = document.querySelectorAll('a[data-id^="summary"]');

// 為每個連結添加點擊事件處理程式
openLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // 獲取要顯示/隱藏的目標元素
    var targetId = link.getAttribute('data-id');
    var targetElement = document.getElementById(targetId);
    var iconElement = link.querySelector('i.fa-solid');

    // 切換目標元素的顯示狀態
    if (targetElement.classList.contains('trhidden')) {
      targetElement.classList.remove('trhidden');
      iconElement.classList.replace('fa-square-plus', 'fa-square-minus');
    } else {
      targetElement.classList.add('trhidden');
      iconElement.classList.replace('fa-square-minus', 'fa-square-plus');
    }
  });
});
