var Weclome = document.querySelector('#welcomeName');
var Weclomename = JSON.parse(localStorage.getItem('uName'));
Weclome.innerHTML=`welcome ${Weclomename}`