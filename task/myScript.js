/**
 * Created by Hamza-PC on 7/1/2016.
 */
$(document).ready()
{
    console.log("Document ready!");

    signin('#signin');
    signup('#signup');
    reset('#reset');

};

var findEmail = $('.form-div').find('#email');
var findPassword = $('.form-div').find('#password');
var findConPassword = $('.form-div').find('#confirmPassword');
var buttonUpdate = $('.form-div').find("input[type=submit]");

function signin(id) {
    $(id).on('mouseenter',function () {
        console.log('Enter');
        
        findEmail.slideDown();
        findPassword.slideDown();
        findConPassword.slideDown();

        buttonUpdate.val("Sign in");
    });
}
function signup(id) {
    $(id).on('mouseenter',function () {
        console.log("Enter");

        findEmail.slideDown();
        findPassword.slideDown();
        findConPassword.slideUp();

        buttonUpdate.val("Sign up");
    });
}
function reset(id) {
    $(id).on('mouseenter',function () {
        console.log("Enter");

        findConPassword.slideUp();
        findPassword.slideUp();

        buttonUpdate.val("Reset password");
    });
}
