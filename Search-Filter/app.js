// const search = document.querySelector("#search");

// // Event listener for search input
// search.addEventListener("input", () => {
//     // Get the search query
//     const query = search.value.toLowerCase();
    
//     // Get all table rows
//     const rows = document.querySelectorAll("tbody tr");
    
//     // Loop through each row
//     rows.forEach((row) => {
//         // Get the text content of each cell
//         const cells = Array.from(row.querySelectorAll("td"));
        
//         // Check if any cell contains the search query
//         const containsQuery = cells.some((cell) => {
//             return cell.textContent.toLowerCase().includes(query);
//         });
        
//         // Hide or show the row based on the search query
//         row.style.display = containsQuery ? "" : "none";
//     });
// });


const search = document.querySelector("#search");
search.addEventListener("input", () => {
    const query = search.value.toLocaleLowerCase();
    const table = document.querySelector("#dataTableBody");
    const tr = table.querySelectorAll("tr");

    for( let i = 0; i < tr.length; i++){
        const td = tr[i].querySelectorAll("td")[1];
        

        if(td){
            let textValue = td.textContent.toLocaleLowerCase();
            if(textValue.indexOf(query) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
})





