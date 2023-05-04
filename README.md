<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    </head>
<body>
   <script>
let numbers = []; 
        for (let i = 0; i < 31; i += 1) {
            numbers[i] = Math.floor(Math.random()*100); 
          };
let table = document.createElement("table");
let line, cell, number;
for (let l = 0; l < 5; l ++) {
  line = document.createElement("tr");
  for (let j = 0; j < 6; j ++) {
    cell = document.createElement("td");
    number = numbers[l * 6 + j];
    cell.textContent = number;
    if (number >= 50) {
      cell.style.backgroundColor = "orange";
    }
    line.appendChild(cell);
  }
  table.appendChild(line);
}
document.body.appendChild(table)
   </script>
</body>
</html>
