// Requiring the module
const reader = require('xlsx')
// Reading our test file 
const file = reader.readFile('dummy.xlsx');
const sheets = file.SheetNames   //Here we will get no of sheets
console.log(sheets)
for (let i = 0; i < sheets.length; i++) {                 
    const temp = reader.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]])
        //console.log(temp);
    //temp.forEach((res) => { data.push(res) })
    console.log(temp);

    temp.sort((a, b) => a.Marks - b.Marks);
    var filterdData = [];
    filterdData.push(temp[0]);
    filterdData.push(temp[temp.length - 1]);
}
// Printing data 
console.log(filterdData);