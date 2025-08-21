// Send Mail Function ==========================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.

(function () {
  emailjs.init({
    publicKey: "e4JKS13OuLSvVFVV3",
  });
})();

function sendMail(message,name) {
  document.getElementById("loadingMain").classList.add("active");
  emailjs
    .send("service_di2mw9k", "template_mmztq2r", {
      title: `Message form ${name}`,
      message: message,
      cc: "hiteshgupta2010@gmail.com,sales@marketingfundas.com,qms.prakashsingh@gmail.com,sumitweebinnovation@gmail.com",
      reply_to: "",
    })
    .then(
      () => {
        console.log("Message Sended");

        document.getElementById("loadingMain").classList.remove("active");
        window.location.href = `/thankyou.html`;
      },

      (error) => {
        console.log(error);
        document.getElementById("loadingMain").classList.remove("active");
        alert("Something Went Wrong !!");
      }
    );
}
function sendMailthanks(message,name) {
  document.getElementById("loadingMain").classList.add("active");
  emailjs
    .send("service_di2mw9k", "template_mmztq2r", {
      title: `Message form Lead ${name}`,
      message: message,
      cc: "hiteshgupta2010@gmail.com,sales@marketingfundas.com,qms.prakashsingh@gmail.com,sumitweebinnovation@gmail.com",
      reply_to: "",
    })
    .then(
      () => {
        console.log("Message Sended");

        document.getElementById("loadingMain").classList.remove("active");
        window.location.href = `/thanks.html`;
      },

      (error) => {
        console.log(error);
        document.getElementById("loadingMain").classList.remove("active");
        alert("Something Went Wrong !!");
      }
    );
}






window.onload = function () {
  // When the user scrolls down 50px from the top of the document, resize the header's font size
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.background = "#2b83dc";
    } else {
      document.getElementById("header").style.background = "transparent";
    }
  }

  $("#icons-6").owlCarousel({
    loop: true,
    // margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 3,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 6,
      },
    },
  });

  $("#icons-4").owlCarousel({
    loop: true,
    // margin: 10,
    nav: false,
    // dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    // margin: 10,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  const menulink = document.querySelector(".menulink");
  const menutoggle = document.querySelector(".toggle");
  menutoggle.onclick = function () {
    console.log("click");

    menutoggle.classList.toggle("active");

    if (menulink.style.right === "0px") {
      menulink.style.right = "-550px";
    } else {
      menulink.style.right = "0px";
    }
  };

  document.getElementById("formsumbit_1").addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log("started");

    const name = document.getElementById("name_1").value;
    const email = document.getElementById("email_1").value;
    const phone = document.getElementById("phone_1").value;
    const message = document.getElementById("message_1").value;

    sendMail(
      `Thank You for Contacting Us \n \n Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Message: ${message} \n \n Thankyou \n Marketing Fundas`,name
    );
  });


  // <<<====================2-form===============================>>>>>


  document.getElementById("formsumbit_2").addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log("started");

    const name = document.getElementById("name_2").value;
    const email = document.getElementById("email_2").value;
    const phone = document.getElementById("phone_2").value;
    const message = document.getElementById("message_2").value;

    sendMail(
      `Thank You for Contacting Us \n \n Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Message: ${message} \n \n Thankyou \n Marketing Fundas`,name
    );
  });
};
document.getElementById("formsumbit_3").addEventListener("submit", (e) => {
  e.preventDefault();

  
  const name = document.getElementById("name_3").value;
  const email = document.getElementById("email_3").value;
  const phone = document.getElementById("phone_3").value;
  const city = document.getElementById("city_3").value;
  const message = document.getElementById("message_3").value;
  
  
  sendMailthanks(
    `Thank You for Contacting Us \n \n Name: ${name} \n Email: ${email} \n Phone: ${phone} \n City:${city}\n Message: ${message} \n \n Thankyou \n Marketing Fundas`,name
  );
});

document.getElementById("formsumbit_4").addEventListener("submit", (e) => {
  e.preventDefault();

  
  const name = document.getElementById("name_4").value;
  const email = document.getElementById("email_4").value;
  const phone = document.getElementById("phone_4").value;
  const message = document.getElementById("message_4").value;
  
  
  sendMailthanks(
    `Thank You for Contacting Us \n \n Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Message: ${message} \n \n Thankyou \n Marketing Fundas`,name
  );
});
// console.log(submit);




// window.onload = function () {
  // console.log("listinger");

  // document.getElementById("formsumbit_1").addEventListener("submit", (e) => {
  //   e.preventDefault();

  //   // console.log("started");

  //   const name = document.getElementById("name_1").value;
  //   const email = document.getElementById("email_1").value;
  //   const phone = document.getElementById("phone_1").value;
  //   const message = document.getElementById("message_1").value;

  //   sendMail(
  //     `Thank You for Contacting Us \n \n Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Message: ${message} \n \n Thankyou \n Marketing Fandas`,name
  //   );
  // });
// };
