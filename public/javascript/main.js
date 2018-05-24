
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$('html').on('click', '.octo' , function(){
    alert('octogoodness');
});

// $(document).on('click', function(){
//     alert('abc');
// })