function vytvorTrojuhelnik() {
    const cislo = document.getElementById("number").value;
    let vystup = "";
    for (let i = 0; i < cislo.length; i++) {
      vystup += cislo.substring(0, cislo.length - i) + "\n";
    }
    document.getElementById("vystup").textContent = vystup;
  }
  