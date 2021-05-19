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

    var name = document.getElementById("nameFact").value;
    var description = document.getElementById("descriptionFact").value;
    var photo = document.getElementById("editarFotografia").value.length;



    if(name == ''){
        Swal.fire(
            '',
            'O nome tem de estar preenchido',
            'error'
        );
        document.getElementById("nameFact").focus();
        return false;
    }


    if(description == ''){
        Swal.fire(
            '',
            'Por favor, descreva o facto',
            'error'
        );
        document.getElementById("descriptionFact").focus();
        return false;

    }
        
    if(photo == 0){
        Swal.fire(
            '',
            'Por favor, insira uma foto',
            'error'
            );
            document.getElementById("editarFotografia").focus();
            return false;
    }


}