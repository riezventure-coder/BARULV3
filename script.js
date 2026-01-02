const indexData = new Map();

fetch("./data.json")
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      const key = `${item.ip}|${item.slot}|${item.port}`;
      indexData.set(key, item);
    });
    console.log("Index siap:", indexData.size, "data");
  })
  .catch(err => console.error("Gagal load data", err));

function cari() {
  const ip = ipEl.value.trim();
  const slot = slotEl.value.trim();
  const port = portEl.value.trim();

  const key = `${ip}|${slot}|${port}`;
  const hasil = indexData.get(key);

  if (hasil) {
    hasilEl.innerHTML = `
      <b>ID PORT:</b> ${hasil.id_port}<br>
      <b>VLAN:</b> ${hasil.vlan}
    `;
  } else {
    hasilEl.innerHTML = `<span style="color:red">Data tidak ditemukan</span>`;
  }
}

// cache DOM (lebih cepat)
const ipEl = document.getElementById("ip");
const slotEl = document.getElementById("slot");
const portEl = document.getElementById("port");
const hasilEl = document.getElementById("hasil");
