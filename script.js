$('#img1').click(function () {
    var imageSourceVal = $(this).attr('src');
    $('#mainImage').attr('src',imageSourceVal);
});
$('#img2').click(function () {
    var imageSourceVal = $(this).attr('src');
    $('#mainImage').attr('src',imageSourceVal);
});
$('#img3').click(function () {
    var imageSourceVal = $(this).attr('src');
    $('#mainImage').attr('src',imageSourceVal);
});$('#img4').click(function () {
    var imageSourceVal = $(this).attr('src');
    $('#mainImage').attr('src',imageSourceVal);
});


// function qwerty(){
//     var newHeadingElement = document.createElement('h1');
//     var newParagraphElement = document.createElement('p');
//     newHeadingElement.innerHTML = 'This is a Heading';
//     newParagraphElement.innerHTML = 'This is a Paragraph';
//     document.getElementById('div').appendChild(newHeadingElement);
//     document.getElementById('div').appendChild(newParagraphElement);
// }
//
// document.getElementById('btn').onclick = function () {
//     var newHeadingElement = document.createElement('h1');
//     var newParagraphElement = document.createElement('p');
//     newHeadingElement.innerHTML = 'This is a Heading';
//     newParagraphElement.innerHTML = 'This is a Paragraph';
//     document.getElementById('div').appendChild(newHeadingElement);
//     document.getElementById('div').appendChild(newParagraphElement);
// }


// $('#firstName').keyup(function () {
//     var firstNameValue = $('#firstName').val();
//     $('#res1').text(firstNameValue);
// });
// $('#lastName').keyup(function () {
//     var lastNameValue = $('#lastName').val();
//     $('#res2').html(lastNameValue);
// });
// $('#lastName').blur(function () {
//     var firstNameValue = $('#firstName').val();
//     var lastNameValue = $('#lastName').val();
//     var fullNameValue = firstNameValue+' '+lastNameValue;
//     $('#res3').text(fullNameValue);
// });