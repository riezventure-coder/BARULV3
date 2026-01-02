const indexData = new Map();

fetch("/data.json")
  .then(res => res.json())
  .then(data => {
    console.log("DATA LOADED:", data);

    data.forEach(item => {
      const key =
        String(item.ip).trim() + "|" +
        String(item.slot).trim() + "|" +
        String(item.port).trim();

      indexData.set(key, item);
    });

    console.log("INDEX SIAP:", indexData.size);
  })
  .catch(err => console.error("FETCH ERROR:", err));

function cari() {
  const ip = document.getElementById("ip").value.trim();
  const slot = document.getElementById("slot").value.trim();
  const port = document.getElementById("port").value.trim();

  const key = ip + "|" + slot + "|" + port;
  console.log("CARI:", key);

  const hasil = indexData.get(key);
  const hasilEl = document.getElementById("hasil");

  if (hasil) {
    hasilEl.innerHTML = `
      <b>ID PORT:</b> ${hasil.id_port}<br>
      <b>VLAN:</b> ${hasil.vlan}
    `;
  } else {
    hasilEl.innerHTML = `<span style="color:red">Data tidak ditemukan</span>`;
  }
}
