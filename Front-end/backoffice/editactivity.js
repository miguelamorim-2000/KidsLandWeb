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

    var name_act = editForm.name_Request.value;
    var type_act = editForm.type_Request.value;
    var address_act = editForm.address_Location.value;
    var county_act = editForm.county.value;
    var district_act = editForm.district.value;
    var zip_act = editForm.post_code.value;
    var latitude_act = editForm.latitude.value;
    var longitude_act = editForm.longitude.value;

    var date_act = editForm.date_Request.value;
    var time_act = editForm.time_Request.value;

    if(name_act == ''){
        Swal.fire(
            '',
            'O nome tem de estar preenchido',
            'error'
        );
        document.getElementById("name_Request").focus();
        return false;
    }


    if(type_act == ''){
        Swal.fire(
            '',
            'Por favor, indique o tipo de atividade',
            'error'
        );
        document.getElementById("type_Request").focus();
        return false;

    }


    if(date_act == ''){
        Swal.fire(
            '',
            'A data da atividade tem de estar preenchida',
            'error'
            );
            document.getElementById("date_Request").focus();
            return false;
    }


    if(time_act == ''){
        Swal.fire(
            '',
            'A hora da atividade tem de estar preenchida',
            'error'
            );
            document.getElementById("time").focus();
            return false;
    }

    if(address_act == ''){
        Swal.fire(
            '',
            'Por favor, indique a respetiva morada da atividade',
            'error'
        );
        document.getElementById("address_Location").focus();
        return false;
    }

    if(county_act == ''){
        Swal.fire(
            '',
            'Por favor, indique a respetiva localidade da atividade',
            'error'
        );
        document.getElementById("county").focus();
        return false;
    }


    if(district_act == ''){
        Swal.fire(
            '',
            'Por favor, indique o respetivo distrito da atividade',
            'error'
        );
        document.getElementById("district").focus();
        return false;

    } 


    if(zip_act == ''){
        Swal.fire(
            '',
            'Por favor, indique o respetivo email para registo',
            'error'
        );
        document.getElementById("post_code").focus();
        return false;

    } else if (zip_act.toString().length < 8 ){
        Swal.fire(
            '',
            'O código postal deve conter 8 caracteres!',
            'error'
        );
        document.getElementById("post_code").focus();
        return false;

    } else if (zip_act.toString().length > 8 ){
        Swal.fire(
            '',
            'O código postal deve conter 8 caracteres!',
            'error'
        );
        document.getElementById("post_code").focus();
        return false;
    }


    if(latitude_act == ''){
        Swal.fire(
            '',
            'Por favor, indique uma password para registo',
            'error'
        );
        document.getElementById("latitude").focus();
        return false;
    }

    if(longitude_act == ''){
        Swal.fire(
            '',
            'Por favor, insira novamente a nova password',
            'error'
        );
        document.getElementById("longitude").focus();
        return false;

    } 




}
