
function Suscripcion(){
    const { value: email } = Swal.fire({
        title: "Introduce tu E-mail",
        input: "email",
        inputPlaceholder: "Introduce tu E-mail",
    });
    if (email) {
        Swal.fire(`Entered email: ${email}`);
    }
};