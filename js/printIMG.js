function printNewWindow(imgSrc) {
   let oWin = window.open('', 'pringwindow', 'menubar=no,location=no,resizable=yes,scrollbars=no,status=no,width=1000,height=660')
   oWin.document.fn = function() {
       if (oWin) {
           oWin.print()
           oWin.close()
       }
   }
   let html = '<div style="height: 100%;width: 100%;">' + `<img src="${imgSrc}" onload="fn()" style="max-height:100%;max-width: 100%;" />` + '</div>'
   oWin.document.open()
   oWin.document.write(html)
   oWin.document.close()
}