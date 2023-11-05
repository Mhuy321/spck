//mua hang




const valuen1 = document.getElementById("n1")
const valueten1 = document.getElementById("ten1")
const valueEmail2 = document.getElementById("Email2")
const valuePw1 = document.getElementById("pw1")
const valuenl1 = document.getElementById("nl1")




var btn1 = document.getElementById("btn-sub")
btn1?.addEventListener("click", mua)



function mua(event1){
     event1.preventDefault();
     
      
     var valueten1 = document.getElementById("ten1").value
     var valueEmail2 = "tranhuyminh013@gmail.com"
     var valuePw1 = document.getElementById("pw1").value
     var valuenl1 = document.getElementById("nl1").value
 
     console.log(valueten1)
     console.log(valueEmail2)
     console.log(valuePw1)
     console.log(valuenl1)
     alert("Mua hàng thành thành công");
     const mailtoLink = `mailto:${valueEmail2}?subject=Mua hang&body=Tên người mua là: ${valueten1}`;
     window.location.href = mailtoLink;
     window.location.href="merry.html";
}
    
