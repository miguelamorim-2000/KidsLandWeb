//depedencies
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var app = express();

//middleware
app.use(bodyParser.urlencoded);
{
    extended: false;
}

app.use(validator());

app.post('');

function provalidation(){

    var zip_profile = formProfile.personalZip.value;
    var phone_profile = formProfile.personalPhone.value;

    

    if(phone_profile == ''){
        Swal.fire(
            '',
            'Por favor, indique o respetivo número de telemovel',
            'error'
        );
        formProfile.phone_number.focus()
        return false;

    } else if (phone_profile.toString().length < 9 ){
        Swal.fire(
            '',
            'O numero de telemovel deve contar 9 digitos!',
            'error'
        );
        formProfile.phone_number.focus()
        return false;

    } else if (phone_profile.toString().length > 9 ){
        Swal.fire(
            '',
            'O numero de telemovel deve contar 9 digitos!',
            'error'
        );
        formProfile.phone_number.focus();
        return false;
    } 



    if(zip_profile == ''){
        Swal.fire(
            '',
            'Por favor, indique o respetivo código de postal',
            'error'
        );
        formProfile.post_code.focus()
        return false;

    } else if (zip_profile.toString().length < 8 ){
        Swal.fire(
            '',
            'O código postal deve conter 8 caracteres!',
            'error'
        );
        formProfile.post_code.focus()
        return false;

    } else if (zip_profile.toString().length > 8 ){
        Swal.fire(
            '',
            'O código postal deve conter 8 caracteres!',
            'error'
        );
        formProfile.post_code.focus();
        return false;
    } else {
        return true;
    }






}
