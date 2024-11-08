const input = document.getElementById("DepositWithdrawInput");
const inputButton = document.getElementById("DepositWithdrawBtn");
input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        inputButton.click();
    }
});


function deleteAllSaves() {
    if(window.confirm("Are you sure you wanted to delete every saved content?")) {
        console.log("deleting saves...");
        let savedContent = ['historyTable', 'histories', 'chartData', 'inhandMoney', 'accountMoney', 'totalMoney'];
        savedContent.forEach((item) => {
            localStorage.removeItem(item);
        })
        location.reload();
    };
}