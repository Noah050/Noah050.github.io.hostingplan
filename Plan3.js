var uname = document.querySelector("#uname");
function checkUser(uname) {
    var letters = /^[A-Z a-z]+$/;
    if (uname.value == "") {
        alert("Please Enter A Username")
        return false;
    } else {
        if (uname.value.match(letters)) {
            
        } else {
            alert("Only Alphabet Characters For Username")
            return false;
        }
    }
    
}
var pass = document.querySelector("#pass");
function checkPass(pass) {
    var letters = /^[A-Z a-z 0-9]+$/;
    if (pass.value == "") {
        alert("Please Enter A Password")
        return false;
    } else {
        if (pass.value.match(letters)) {
            
        } else {
            alert("Only Alphabet and Numerical Characters For Password")
            return false;
        }
    }
    
}
var phone = document.querySelector("#phone");
function checkPhone(phone) {
   var letters = /^[0-9]{3}-[0-9]{3}-[0-9]{4}/; 
   if (phone.value == "") {
       alert("Enter A Phone Number");
       return false;
   } else {
       if (phone.value.match(letters)) {

       } else {
           alert("123-456-7890 For Phone Number");
           return false;
       }
   }

}
class Plan {
    constructor(name, price, space, transfer, pages, discountMonths) {
        this.name = name;  
        this.price = price;
        this.space = space; 
        this.transfer = transfer;
        this.pages = pages;
        this.discountMonths = discountMonths;
    }
        calcAnnual(percentIfDisc) {
            var bestPrice = this.price;
            var currDate = new Date();
            console.log("Current Date " +currDate);
            var thisMo = currDate.getMonth();
            console.log("This Month " +thisMo);
            for (var i = 0; i < this.discountMonths.length; i++) {
                console.log(this.discountMonths.length);

                if (this.discountMonths[i] === thisMo) {
                bestPrice = this.price * percentIfDisc;
                break;}
                
                }
               return bestPrice * 12;
            
        }
    }
    
    var p1 = new Plan("Basic", 3.99, 100, 1000, 10, [0,7])
    var p2 = new Plan("Proffesional", 5.99, 500, 5000, 50, [0,7, 11])
    var p3 = new Plan("Ultimate", 9.99, 2000, 20000, 500, [0,7]);
    var annualPrice = p3.calcAnnual(.8);
    document.querySelector("#price").innerHTML = ("Price after discount: $" + Math.round(annualPrice));
    document.querySelector("#price2").innerHTML = ("Price without discount: $" + (Math.round(annualPrice)) * 1.25);
    