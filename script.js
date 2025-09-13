function beforesubmit(){
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    console.log("inputdate-->",inputdate.value);

    let formattedDate = new Date(inputdate.value).toLocaleDateString("en-IN");
    console.log("formattedDate-->",formattedDate);
    outputdate.value = formattedDate;
    console.log("outputdate-->",outputdate.value);
}