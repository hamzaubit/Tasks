/**
 * Created by Hamza-PC on 6/21/2016.
 */
$(document).ready(function ()
{
    $('#user_name').on('keyup',function () {
        //var errorSpanUserName = $('<span style=\'color: red\'> Try again!</span>');
        //var goodSpanUserName = $('<span style=\'color: green\'> You are good to go!</span>');
        var userinput = $('#user_name').val();
        var pattern = new RegExp(/^[a-z][a-z0-9_.-]{4,19}$/);

        if(!pattern.test(userinput)) {
            $('#user_nameDiv').remove("has-success")
            $('#user_nameDiv').addClass("has-error");
            console.log('Not Fine!: UserName '+userinput);
            //$('#user_nameDiv').find('#message').html(errorSpanUserName); For adding DOM element
        }
        else {
            $('#user_nameDiv').removeClass("has-error");
            $('#user_nameDiv').addClass("has-success");
            console.log('Fine!: Email '+userinput);
            //$('#user_nameDiv').find('#message').html(goodSpanUserName); For adding DOM element
        }
    });

    $('#exampleInputEmail1').on('keyup',function () {
        var userinputemail = $('#exampleInputEmail1').val();
        var pattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

        if(!pattern.test(userinputemail))
        {
            $('#email-div').removeClass("has-success")
            $('#email-div').addClass("has-error");
            console.log('Not Fine!: Email');
        }
        else
        {
            $('#email-div').removeClass("has-error");
            $('#email-div').addClass("has-success");
            console.log('Fine!: Email');
        }
    });

    $('#exampleInputPassword1').on('keyup',function () {
        var userinputpassword = $('#exampleInputPassword1').val();
        var pattern = new RegExp(/^([a-zA-Z0-9@*#]{8,15})$/);


        if(!pattern.test(userinputpassword))
        {
            $('#password-div').remove("has-success")
            $('#password-div').addClass("has-error");
            console.log('Not Fine!: Password '+userinputpassword);
        }
        else
        {
            $('#password-div').removeClass("has-error");
            $('#password-div').addClass("has-success");
            console.log('Fine!: Password '+userinputpassword);
        }
    });
    $('#confirmPassword').on('keyup',function () {

        var userinputpassword = $('#exampleInputPassword1').val();
        var userconfirmpassword = $(this).val();

        if(userconfirmpassword == userinputpassword)
        {
            $('#confirm-password').removeClass("has-error");
            $('#confirm-password').addClass("has-success");
            console.log('Fine!: Confirm Password '+userinputpassword+' '+userconfirmpassword);
        }
        else
        {
            $('#confirm-password').remove("has-success")
            $('#confirm-password').addClass("has-error");
            console.log('Not Fine!: Confirm Password ' +userinputpassword+' '+userconfirmpassword);
        }
    });

    $('#confirmPassword').on('keyup',function () {

        var userinputdob = $('#exampleInputDOB1').val();
        var pattern = new RegExp(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);


        if(!pattern.test(userinputdob))
        {
            $('#date-of-birth').removeClass("has-error");
            $('#date-of-birth').addClass("has-success");
            console.log('Fine!: Confirm Password '+userinputdob);
        }
        else
        {
            $('#date-of-birth').remove("has-success")
            $('#date-of-birth').addClass("has-error");
            console.log('Not Fine!: Confirm Password ' +userinputdob);
        }
    });

});