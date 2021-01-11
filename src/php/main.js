$(".btnedit").click( e =>{
    displayData();
})

function displayData(e) {
    let id = 0;
    const td = $("#tbody tr td");
    let textvalues = [];

    for (const value of td){
        console.log(value);
    }
}

