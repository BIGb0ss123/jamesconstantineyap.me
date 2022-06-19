let table = document.querySelector('#testTable');
let button = document.querySelector('#button');
function selectNode(node){
  let range  =  document.createRange();
  range.selectNodeContents(node)
  let select =  window.getSelection()
  select.removeAllRanges()
  select.addRange(range)
}
button.addEventListener('click',function(){
  selectNode(table);
  document.execCommand('copy')
  
})
