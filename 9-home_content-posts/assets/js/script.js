window.onload = () => {
    var btn = document.getElementById("create-account-button");
    var btn_add_post = document.getElementById("add-post");
    var close_modal = document.getElementById("close-modal");
    var close_register = document.getElementById("close-register");
    var overlay = document.getElementById("overlay");

    if (btn) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            var popup = document.getElementById("register-popup");
            popup.style.display = "block";
            overlay.style.display = "block";
        })

    }

    if (close_register) {
        close_register.addEventListener("click", () => {
            var popup = document.getElementById("register-popup");
            popup.style.display = "none";
            overlay.style.display = "none";
        })

    }

    if (btn_add_post) {

        btn_add_post.addEventListener("click", () => {
            var modal = document.getElementById("modal-post");
            modal.style.display = "block"
            overlay.style.display = "block"
        })
    }
    if (close_modal) {
        close_modal.addEventListener("click", () => {
            var modal = document.getElementById("modal-post");
            modal.style.display = "none"
            overlay.style.display = "none"
        })

    }


}