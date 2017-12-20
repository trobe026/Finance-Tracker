$( window ).on("load", function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAWpm-nj646LY_o3T0fm3azfGLFJ3B7W7A",
    authDomain: "finance-tracker-2d7a1.firebaseapp.com",
    databaseURL: "https://finance-tracker-2d7a1.firebaseio.com",
    projectId: "finance-tracker-2d7a1",
    storageBucket: "finance-tracker-2d7a1.appspot.com",
    messagingSenderId: "707240628315"
  };

    firebase.initializeApp(config);

    var ref = firebase.database().ref();

    $('#btn1').click(function() {
      var test = $('#item1').val().trim();
      var test2 = $('#item2').val().trim();

      var finances = {
        MonthlyIncome: test,
        YearlyIncome: test2
      };

      ref.push(finances);

      $('#item1').val("");
      $('#item2').val("");

    });

    ref.on('child_added', function(childSnapshot) {
      var test = childSnapshot.val().MonthlyIncome;
      var test2 = childSnapshot.val().YearlyIncome;
      $('#result').append("Monthly Income: $" + test + "Yearly Income: $" + test2);

      $("#clear").click(function() {
        childSnapshot.ref.remove();
        $('#result').html('');


      });

    });





  // function test(a, b) {
  //   a * b;
  //   return;
  // }


  // $('button').click(function() {
  //   var a = $("#num1").val().trim();
  //   var b = $("#num2").val().trim();
  //   var sum = a * b;
  //   $('#result').html(sum);
  //   console.log('test');
  //   console.log(a);
  //   console.log(b);
  // });

    // var result = $('#result');
    // a * b;
    // return result;
    // result.html(result);











// end of on load
});
