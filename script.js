var data = [
    "Suhadak Safalas","Achmad Ammar","Rindiani Awanda Putri","Muzadi Ramli","Nur rochmad"

];


function tampil() {
    var tabel = document.getElementById("tabel");
    tabel.innerHTML = "<tr><th>No</th><th>Nama</th><th>Action</th></tr>";
    for (let i = 0; i < data.length; i++) {
        var btnEdit = "<button class='btn btn-warning' href='#' onclick='edit(" + i + ")'>Edit</button>";
        var btnHapus = "<button class='btn btn-danger' href='#' onclick='hapus(" + i + ")'>Hapus</button>";
        j = i + 1;
        tabel.innerHTML += "<tr><td>" + j + "</td><td>" + data[i] + "</td><td>" + btnEdit + " " + btnHapus + "</tr>";
    }
}

function tambah() {
    var input = document.querySelector("input[name=jurusan]");
    data.push(input.value);
    tampil();
    input.value = "";
}

function edit(id) {
    var baru = prompt("Edit", data[id]);
    data[id] = baru;
    tampil();
}

function hapus(id) {
    data.pop(id);
    tampil();
}

tampil();
