window.onload = function(){
    var samosaCount=localStorage.getItem('samosaCount')?localStorage.getItem('samosaCount'):0;
    var pakodaCount=localStorage.getItem('pakodaCount')?localStorage.getItem('pakodaCount'):0;
    document.getElementById("samosa").value = samosaCount;
    document.getElementById('pakoda').value=pakodaCount;
  }
function samosaCall(){
 let samosacount=localStorage.getItem('samosaCount')?localStorage.getItem('samosaCount'):0;
  samosacount++;
  localStorage.setItem('samosaCount',samosacount.toString());
  document.getElementById('samosa').value=samosacount;
 
}

function pakodaCall(){
 let pakodaCount=localStorage.getItem('pakodaCount')?localStorage.getItem('pakodaCount'):0;
 pakodaCount++;
 localStorage.setItem('pakodaCount',pakodaCount.toString());
 document.getElementById('pakoda').value=pakodaCount;

}
