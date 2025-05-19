const list = document.getElementById("creator_list");
techCreators.forEach((person) => {
  const li = document.createElement("li");
  li.innerText = `NAME : ${person.name}  \nCREATED : ${person.creations} \nFROM : ${person.country}`;
  list.appendChild(li);
});
