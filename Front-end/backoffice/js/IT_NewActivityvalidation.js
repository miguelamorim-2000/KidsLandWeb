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



function itvalidation(){

    var name_act = factForm.nameActivity.value;
    var type_act = factForm.type.value;
    var address_act = document.getElementById("address").value;
    var county_act = document.getElementById("county").value;
    var district_act = document.getElementById("district").value;
    var zip_act = document.getElementById("postcode").value;
    var latitude_act = document.getElementById("latitude").value;
    var longitude_act = document.getElementById("longitude").value;

    var date_act = document.getElementById("date_Request").value;
    var time_act = document.getElementById("time").value;

    var photo_act = document.getElementById("editarFotografia").value.length;

    if(name_act == ''){
        Swal.fire(
            '',
            'O nome tem de estar preenchido',
            'error'
        );
        factForm.nameActivity.focus();
        return false;
    }


    if(type_act == ''){
        Swal.fire(
            '',
            'Por favor, indique o tipo de atividade',
            'error'
        );
        factForm.type.focus();
        return false;

    }

    if(photo_act == 0){
        Swal.fire(
            '',
            'Por favor, insira uma foto da atividade',
            'error'
        );
        document.getElementById("editarFotografia").focus();
        return false;
    }


    if(date_act == ''){
        Swal.fire(
            '',
            'A data da atividade tem de estar preenchida',
            'error'
            );
            factForm.date_Request.focus();
            return false;
    }


    if(time_act == ''){
        Swal.fire(
            '',
            'A hora da atividade tem de estar preenchida',
            'error'
            );
            factForm.time.focus();
            return false;
    }

    if(address_act == ''){
        Swal.fire(
            '',
            'Por favor, indique a respetiva morada da atividade',
            'error'
        );
        factForm.address.focus();
        return false;
    }

    if(county_act == ''){
        Swal.fire(
            '',
            'Por favor, indique a respetiva localidade da atividade',
            'error'
        );
        factForm.county.focus();
        return false;
    }


    if(district_act == ''){
        Swal.fire(
            '',
            'Por favor, indique o respetivo distrito da atividade',
            'error'
        );
        factForm.district.focus();
        return false;

    } 


    if(zip_act == ''){
        Swal.fire(
            '',
            'Por favor, indique o respetivo email para registo',
            'error'
        );
        factForm.postcode.focus();
        return false;

    } else if (zip_act.toString().length < 8 ){
        Swal.fire(
            '',
            'O código postal deve conter 8 caracteres!',
            'error'
        );
        factForm.postcode.focus();
        return false;

    } else if (zip_act.toString().length > 8 ){
        Swal.fire(
            '',
            'O código postal deve conter 8 caracteres!',
            'error'
        );
        factForm.postcode.focus();
        return false;
    }


    if(latitude_act == ''){
        Swal.fire(
            '',
            'Por favor, indique uma password para registo',
            'error'
        );
        factForm.latitude.focus();
        return false;
    }

    if(longitude_act == ''){
        Swal.fire(
            '',
            'Por favor, insira novamente a nova password',
            'error'
        );
        factForm.longitude.focus();
        return false;

    } 




}
