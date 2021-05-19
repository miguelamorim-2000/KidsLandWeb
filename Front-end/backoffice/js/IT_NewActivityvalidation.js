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
/*
document.getElementById("editarFotografia").addEventListener("change", validateFile)

function validateFile(){
    const allowedExtensions = ['jpg','png'],
    sizeLimit = 1000000;

    const { name:filename, size: fileSize } = this.file[0];
    

    const fileExtension = fileName.split(".").pop();


    if (!allowedExtensions.includes(fileExtension)){
        alert ("file type not allowed");
        this.value = null;
    }else if(fileSize > sizeLimit){
        alert ("file size too large")
        this.value = null;
    }
}
*/
function itvalidation(){

    var name_act = factForm.nameActivity.value;
    var type_act = factForm.type.value;
    var address_act = factForm.address.value;
    var county_act = factForm.county.value;
    var district_act = factForm.district.value;
    var zip_act = factForm.postcode.value;
    var latitude_act = factForm.latitude.value;
    var longitude_act = factForm.longitude.value;

    
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
