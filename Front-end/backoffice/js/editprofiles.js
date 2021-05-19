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

    var name = document.getElementById("name").value;
    var birth_date = document.getElementById("birth_date").value;
    var phone_number = document.getElementById("phone_number").value;



    if(name == ''){
        Swal.fire(
            '',
            'O nome tem de estar preenchido',
            'error'
        );
        document.getElementById("name").focus();
        return false;
    }


    if(birth_date == ''){
        Swal.fire(
            '',
            'Por favor, insira a data de nascimento',
            'error'
        );
        document.getElementById("birth_date").focus();
        return false;

    }
        
    if(phone_number == ''){
        Swal.fire(
            '',
            'Por favor, insira o nº do tutor responsável',
            'error'
            );
            document.getElementById("phone_number").focus();
            return false;

    } else if (phone_number.toString().length < 9 ){
        Swal.fire(
            '',
            'O nº de telefone deve ter 9 digitos!',
            'error'
        );
        document.getElementById("phone_number").focus();
            return false;

    } else if (phone_number.toString().length > 9 ){
        Swal.fire(
            '',
            'O nº de telefone deve ter 9 digitos!',
            'error'
        );
        document.getElementById("phone_number").focus();
            return false;

        }
}