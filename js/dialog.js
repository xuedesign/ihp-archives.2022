var Dialog = (function() {
  var showDelay = 500,
      hideDelay = 500,
      dialogAnimation;
  
  function wait(func, timeout) {
    window.clearTimeout(dialogAnimation);
    
    dialogAnimation = window.setTimeout(func, timeout);
  }
  
  function addClass(dialog, className) {
    dialog.classList.add(className);
  }
  
  function removeClass(dialog, className) {
    dialog.classList.remove(className);
  }
  
  var d = {
    show: function(id) {
      var dialog = document.getElementById(id);
      
      addClass(dialog, 'dialog-hide')
      dialog.setAttribute('aria-hidden', 'false');
      dialog.setAttribute('open', 'open');
      
      wait(function() {
        addClass(dialog, 'dialog-open');
      }, showDelay);
    },
    hide: function(id) {
      var dialog = document.getElementById(id);
      
      removeClass(dialog, 'dialog-open');
      dialog.removeAttribute('open');
      dialog.setAttribute('aria-hidden', 'true');
    }
  };
  
  return d;
})();


document.getElementById('showdialog').onclick = function() {
  Dialog.show('mydialog');
};

document.getElementById('hidedialog').onclick = function() {
  Dialog.hide('mydialog');
};