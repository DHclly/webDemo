text.oninput=function(){
  text.setCustomValidity("");
};
text.oninvalid=function(){
  text.setCustomValidity("请不要输入火星的手机号好吗？");
};