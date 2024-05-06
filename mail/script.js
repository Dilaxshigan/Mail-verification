function sendOTP() {
    // Get the email input element
    const email = document.getElementById('email');
    // Get the element for OTP verification
    const otpverify = document.getElementsByClassName('otpverify')[0];

     // Generate a random OTP
    let otp_val = Math.floor(Math.random() * 10000);

     // Create the email body with the OTP
    let emailbody = `<h2> Your OTP is </h2>${otp_val}`;

    // Send the email with the OTP
    Email.send({
        SecureToken : "48fd2fb2-23d0-4c67-8fb5-0c20af225123 ",
        To : email.value, // check that email is valid
        From : "aritharandilaxshigan@gmail.com",
        Subject : "Get OTP Verification",
        Body : emailbody, //Ensure the email body is correctly formatted
    }).then(
      message => {
         // Check the response from the email sending service
        if(message === "OK"){
             // Notify the user that the OTP has been sent
            alert("OTP sent to your email " + email.value);

            // Display the OTP verification input
            otpverify.style.display = "flex";
            // Get the OTP input element and the verification button
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            // Add event listener to the verification button
            otp_btn.addEventListener('click', () => {
                if (otp_inp.value == otp_val){
                    // Verify the OTP entered by the user
                    alert("Email address verified...");
                    otpverify.style.display = "none";
                    email.value = "";
                    otp_inp.value = "";
                }else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );
}
