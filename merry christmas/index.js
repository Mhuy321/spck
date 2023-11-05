const valuen = document.getElementById("n")
const valueten = document.getElementById("ten")
const valueEmail = document.getElementById("Email")
const valuePw = document.getElementById("pw")
const valuenl = document.getElementById("nl")

var btn = document.getElementById("btn-submit")
btn?.addEventListener("click",getValue)

function getValue(event){
     event.preventDefault();

    var valueten = document.getElementById("ten").value
    var valueEmail = "tranhuyminh013@gmail.com"
    var valuePw = document.getElementById("pw").value
    var valuenl = document.getElementById("nl").value


    
    console.log(valueten)
    console.log(valueEmail)
    console.log(valuePw)
    console.log(valuenl)
     alert("Đóng góp thành thành công");
     const mailtoLink = `mailto:${valueEmail}?subject=Lời chúc&body=Tên người đóng góp là: ${valueten}`;
     window.location.href = mailtoLink;
     window.location.href="merry.html";
}


    
    
    