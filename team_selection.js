/*var lions = document.getElementById("lions")

if (lions) {
        lions.addEventListener("select", () => {
            console.log("lions have been selected");
        })
};*/

window.addEventListener('click', function() {
    const lions = document.querySelector('button#lions');
    //const eagles = document.querySelector('button#eagles');
    //const chiefs = document.querySelector('button#chiefs');
    //const giants = document.querySelector('button#giants');
    //const bills = document.querySelector('button#bills');
    //const falcons = document.querySelector('button#falcons');

        if(lions){
            //lions.style.backgroundColor = 'yellow';
            console.log("LIONS WORKED");
        };
        /*if (eagles){
            console.log("EAGLES WORKED");
        };
        if(chiefs){
            console.log("CHIEFS WORKED");
        };
        if(giants){
            console.log("GIANTS WORKED");
        };
        if(bills){
            console.log("BILLS WORKED");
        };
        if(falcons){
            console.log("FALCONS WORKED");
        };*/

}); //This is firing on every click. Might need to make every team in its own div
