/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var weatherServices = (function(){
    var key = "1e814ac735e96f5f43d4f96a4adf9a58";
    
    return {
        getDataByCityName : function(){
            var url = "http://api.openweathermap.org/data/2.5/forecast?q=";
            var cityName = document.getElementById('cityToSearch').value;
            axios.get(url+cityName+"&APPID="+key).then(function (response){
                alert("Data received");
                console.log(response.date);
                return response.data;
                
            });
        }
    };
}
)();
