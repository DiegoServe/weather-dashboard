//Collect User Input and Display in Search History
function addResult(){
    inputCity = document.getElementById("myInput").value;  
    historyList = getInfo();
    var searchCity =$("<div>") 
    searchCity.attr('id',inputCity) 
    searchCity.text(inputCity) 
    searchCity.addClass("h4")

    if (historyList.includes(inputCity) === false){
        $(".history").append(searchCity)
    }
    $(".subtitle").attr("style","display:inline")
    addInfo(inputCity);   
}; 