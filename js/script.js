// Put filename on upload button
const file = document.getElementById("pdf");
file.onchange = function () {
    if (file.files.length > 0) {
        document.getElementById('filename').innerHTML = file.files[0].name;
    }
};

// Insert dummy info in table
const date = "19/02/2019";
const number = 688878120;
const value = 2949;
const account = 1325289349;

function uploadFile() {
    document.getElementById('date').innerHTML = date;
    document.getElementById('number').innerHTML = number;
    document.getElementById('value').innerHTML = value;
    document.getElementById('account').innerHTML = account;
}