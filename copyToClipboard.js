function copyToClipboard() {
  let textArea = document.createElement("textarea");
  textArea.value = document.querySelector("#border-radius").style["cssText"];

  if(!textArea.value){
    return;
  }

  document.body.appendChild(textArea);
  textArea.focus()
  textArea.select();

  try {
    const success=document.execCommand('copy');
    alert(success?"copied":"Error")
  }catch(e){
    console.log(e);
  } finally {
    document.body.removeChild(textArea);
  }


  // if (document.selection) {
  //   alert("insie")
  //   var range = document.body.createTextRange();
  //   range.moveToElementText(document.getElementById("border-radius"));
  //   range.select().createTextRange();
  //   document.execCommand("copy");
  // } else if (window.getSelection) {
  //   alert("insie 1")
  //   var range = document.createRange();
  //   range.selectNode(document.getElementById("border-radius"));
  //   alert(range)
  //   window.getSelection().addRange(range);
  //   console.log(document.execCommand("copy"));
  //   alert("Text has been copied, now paste in the text-area")
  // }
}