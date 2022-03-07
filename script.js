function getWeather() {
    var city = $('#city').val()
    $.ajax({
        url: { CURRENT_WEATHER_API },
        type: "get",
        success: function(data) {
            $(city_name).html(data.name);
            $(temp).html(+data.main.temp + "&deg;C");
            $(main).html(data.weather[0].main)
            $(desc).html(data.weather[0].description)
        }

    })

    // me
    // $.ajax({
    //     url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=5103d69bb8ef78059397045586ea6ea7&units=metric",
    //     type: "get",
    //     success: function(data) {
    //         for (let i = 0; i <= data.list.length; i++) {
    //            html(console.log(data.list[i].dt_txt));
    //         }
    //         for (let i = 0; i <= data.list.length; i++) {
    //             $(mpp).html(console.log(data.list[i].main.temp));
    //         }
    //     }

    // })


    console.log(city)
        // document.querySelector("#city").addEventListener("keypress", function(event)){
        //     if(event.keycode == "13") {
        //        getWheather();
        //     }

    // getbg(city)
    DataTable(city)
    console.log(city)


}

// function getbg(city) {
//     document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + city + "')"
// }
$('#table').hide()

function DataTable(city) {


    var spinner = new jQuerySpinner({
        parentId: 'div_loading'
    });

    spinner.show();


    $.ajax({
        url: { WEATHER_FORCAST_API },
        type: "get",

        success: function(data) {



            for (i = 0; i < data.list.length; i++) {
                var tr = "<tr class='text-center'>";

                var td0 = "<td>" + data.list[i]["dt_txt"] + "</td>";
                var td1 = "<td>" + data.list[i]["weather"][0]["main"] + "</td>";
                var td2 = "<td>" + data.list[i]["main"]["temp"] + "</td>";
                var td3 = "<td>" + data.list[i]["main"]["humidity"] + "</td>";
                var td4 = "<td>" + data.list[i]["main"]["pressure"] + "</td> </tr>";


                // var td5 = "<td>" + value[i]['strPresenatge'] + "</td></tr>";


                var final = $("#weathertable").append(tr + td0 + td1 + td2 + td3 + td4);

                // console.log(data.list[i]["dt_txt"]);
                // console.log(data.list[i]["main"]["temp"]);
                // //console.log(data.list[i].dt_txt);

                console.log(final)

            }
            $('#table').show()
            $('#weathertable').DataTable().destroy();
            $('#weathertable').DataTable({
                dom: 'Bfrtp',
                buttons: [
                    'pdf'
                ]
            });

            spinner.hide();

        }

    })








}