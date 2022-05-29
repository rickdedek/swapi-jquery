// Funcion que se ejecuta la presionar el boton
function getPeople() {
    //   const name = "Lukeeskaiworker";
    //   changePeopleName(name);
    const number = $("#input-number").val();
    $.ajax({
      url: "https://swapi.dev/api/people/" + number,
      success: (result) => {
        // ARROW FUNCTION / funcion sin nombre (param) => { return 0 }
        changePeopleName(result.name);
      },
      error: () => {
        alert("People not found");
      },
    });
  }
  // Funcion que hace el cambio de nombre en el span
  function changePeopleName(name) {
    $("#person-name").html(name);
  }