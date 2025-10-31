document.getElementById("joinForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Nama dan email harus diisi!");
        return;
    }

    alert(`Terima kasih sudah bergabung dengan RRQ Nation, ${name}! 👑`);
    document.getElementById("joinForm").reset();
});
