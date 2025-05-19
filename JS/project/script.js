document.getElementById("btn").addEventListener("click", fetchData);
const result = document.getElementById("result");

function fetchData() {
  const inp = document.getElementById("inp").value.toLowerCase();
  fetch(`https://hp-api.onrender.com/api/characters`)
    .then((res) => res.json())
    .then((data) => displayData(data, inp))
    .catch((err) => console.log(err));
}

function displayData(data, name) {
  result.innerHTML = "";

  const found = data.find((char) => char.name.toLowerCase().includes(name));

  if (found) {
    result.innerHTML = `
      <div>
        <h2>${found.name}</h2> </br>

        <img src="${
          found.image || "https://via.placeholder.com/150"
        }" width="150"> </br>
        <p><strong>House:</strong> ${found.house || "Unknown"}</p> </br>
        <p><strong>Actor:</strong> ${found.actor || "Unknown"}</p> </br>
      </div>
    `;
  } else {
    result.innerHTML = `<p>No character found with that name.</p>`;
  }
}
