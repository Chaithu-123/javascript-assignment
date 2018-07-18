$('#myModal').on('show.bs.modal', function(e) {
    var modaltitle = $(e.relatedTarget).data('modal');
    $(e.currentTarget).find('input[name="modaltitle"]').val(modaltitle);
});


$('#myModal').on('show.bs.modal', function(e) {
    var modalbody = $(e.relatedTarget).data('modal');
    $(e.currentTarget).find('input[name="modalbody"]').val(modalbody);
});

$(document).ready(function() {

    getmovie();

    //     $('#myModal').modal('show');
});

// post request

$("#save").click(function() {
    let modaltitle = $("#myModal input[id='myModalLabel']").val();
    let modalbody = $("#myModal input[id='myModalbody']").val();
    let moviesdata = [];
    $.post("http://localhost:3000/MovieData/", {
            Name: modaltitle,
            Desc: modalbody,
            Movies: JSON.stringify(moviesdata)
        },
        function(data, status) {
            $("#container").append(`<div class="card" id="card_cont">
    <header class="container" id="title_cont">
      <h2> ` + data.Name + ` </h2>
    </header>
    <div class="container" id="body_cont">
     ` + data.Desc + `
    </div>    
  </div>`);
        });
    alert("Data: " + data + "\nStatus: " + status);
});

// get response from json server

let getmovie = () => {
    $.getJSON("http://localhost:3000/MovieData/",
        function(data, status) {
            console.log(data);
            createcollections(data);

        });
}
let createcollections = (data) => {
    $("#container").html('');
    for (let i of data) {
        $("#container").append(`
  <div class="card" id="card_cont" >
    <header class="container" id="title_cont">
      <h2> ` + i.Name + ` </h2>
    </header>
    <div class="container" id="body_cont">
     ` + i.Desc + `
    </div>    
  </div>`);
    }
}


// comedy
$("#actionsave").click(function() {
    let modaltitle = $("#myModal input[id='actionsave']").val();
    let modalbody = $("#myModal input[id='actionsave']").val();
    $.post("http://localhost:3000/ActionMovies/", {
            title: modaltitle,
            body: modalbody
        },
        function(data, status) {
            $("#container").append(`
  <div class="card" id="card_cont" >
    <header class="container" id="title_cont">
      <h2> ` + modaltitle + ` </h2>
    </header>
    <div class="container" id="body_cont">
     ` + modalbody + `
    </div>    
  </div>`);
        });
    alert("Data: " + data + "\nStatus: " + status);
});
// bio
$("#save").click(function() {
    let modaltitle = $("#myModal input[id='myModalLabel']").val();
    let modalbody = $("#myModal input[id='myModalbody']").val();
    $.post("http://localhost:3000/MovieData/", {
            title: modaltitle,
            body: modalbody
        },
        function(data, status) {
            $("#container").append(`
  <div class="card" id="card_cont" >
    <header class="container" id="title_cont">
      <h2> ` + modaltitle + ` </h2>
    </header>
    <div class="container" id="body_cont">
     ` + modalbody + `
    </div>    
  </div>`);
        });
    alert("Data: " + data + "\nStatus: " + status);
});