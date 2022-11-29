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

//add event listener to search history item
$(".history").on('click', function(event){
    event.preventDefault();
    $(".subtitle").attr("style","display:inline")
     document.getElementById("myInput").value =  event.target.id;
    getResult(); 
});

//add event listner to search button
document.getElementById("searchBtn").addEventListener('click', addResult);
document.getElementById("searchBtn").addEventListener('click', getResult);