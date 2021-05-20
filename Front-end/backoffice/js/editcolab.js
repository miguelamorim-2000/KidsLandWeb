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



function editvalidation(){

    var name = editForm.name.value;
    var nif = editForm.nif.value;
    var address = editForm.address.value;
    var county = editForm.county.value;
    var district = editForm.district.value;
    var zip = editForm.post_code.value;
    var phone = editForm.phone_number.value;


    if(name == ''){
        Swal.fire(
            '',
            'O nome tem de estar preenchido',
            'error'
        );
        document.getElementById("name_Request").focus();
        return false;
    }


    if(nif == ''){
        Swal.fire(
            '',
            'Por favor, indique o nif do colaborador',
            'error'
        );
        document.getElementById("nif").focus();
        return false;

    } else if (nif.toString().length < 9){
        Swal.fire(
            '',
            'O nif deve conter 9 digitos!',
            'error'
            );
            document.getElementById("nif").focus();
            return false;
    } else if (nif.toString().length > 9){
        Swal.fire(
            '',
            'O nif deve conter 9 digitos!',
            'error'
            );
            document.getElementById("nif").focus();
            return false;


        }
        
    if(address == ''){
        Swal.fire(
            '',
            'Indique a morada do colaborador',
            'error'
            );
            document.getElementById("address").focus();
            return false;
    }


    if(name == ''){
        Swal.fire(
            '',
            'O nome tem de estar preenchido',
            'error'
        );
        document.getElementById("name").focus();
        return false;
    }

    if(county == ''){
        Swal.fire(
            '',
            'Por favor, indique a respetiva localidade do colaborador',
            'error'
        );
        document.getElementById("county").focus();
        return false;
    }


    if(district == ''){
        Swal.fire(
            '',
            'Por favor, indique o respetivo distrito do colaborador',
            'error'
        );
        document.getElementById("district").focus();
        return false;

    } 


    if(zip == ''){
        Swal.fire(
            '',
            'Por favor, indique o respetivo email para registo',
            'error'
        );
        document.getElementById("post_code").focus();
        return false;

    } else if (zip.toString().length < 8 ){
        Swal.fire(
            '',
            'O código postal deve conter 8 caracteres!',
            'error'
        );
        document.getElementById("post_code").focus();
        return false;

    } else if (zip.toString().length > 8 ){
        Swal.fire(
            '',
            'O código postal deve conter 8 caracteres!',
            'error'
        );
        document.getElementById("post_code").focus();
        return false;
    }

    if(phone == ''){
        Swal.fire(
            '',
            'Por favor, indique o respetivo nº telefónico',
            'error'
        );
        document.getElementById("phone_number").focus();
        return false;

    } else if (phone.toString().length < 9 ){
        Swal.fire(
            '',
            'O nº de telefone deve conter 9 caracteres!',
            'error'
        );
        document.getElementById("phone_number").focus();
        return false;

    } else if (phone.toString().length > 9 ){
        Swal.fire(
            '',
            'O nº de telefone deve conter 9 caracteres!',
            'error'
        );
        document.getElementById("phone_number").focus();
        return false;
    }



}