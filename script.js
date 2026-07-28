window.addEventListener("load", function(){

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";
        document.getElementById("content").style.display="block";

    },1500);

});
// ================= PRODUCTS =================

const container = document.getElementById("product-container");


if (container && typeof productList !== "undefined") {


    productList.forEach(product => {


        container.innerHTML += `

        <div class="card">


            <div class="image-box">

                <img src="${product.image}" alt="${product.name}">

            </div>


            <div class="card-content">


                <h3>${product.name}</h3>


                <p>${product.price}</p>


                <a href="product2.html">

                    <button>
                        View Details
                    </button>

                </a>


            </div>


        </div>

        `;


    });


}




// ================= CHECKOUT =================


const checkoutForm = document.getElementById("checkoutForm");


if(checkoutForm){


checkoutForm.addEventListener("submit", function(e){


    e.preventDefault();


    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const governorate = document.getElementById("governorate").value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const notes = document.getElementById("notes").value;



    const message = `🛍️ New Order - OZGE

Name: ${name}
Phone: ${phone}
Governorate: ${governorate}
City: ${city}
Address: ${address}
Notes: ${notes}`;



    const whatsappNumber = "201023444928";


    const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;



    window.location.href = whatsappURL;


});


}