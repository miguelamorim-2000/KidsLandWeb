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

    app.post('')

    function validation(){

        var name_colab = collaboratorForm.name.value;
        var nif_colab = collaboratorForm.nif.value;
        var phone_colab = collaboratorForm.phone_number.value;
        var adress_colab = collaboratorForm.adress.value;
        var county_colab = collaboratorForm.county.value;
        var district_colab = collaboratorForm.district.value;
        var zip_colab = collaboratorForm.post_code.value;
        var mail_colab = collaboratorForm.email.value;
        var password_colab = collaboratorForm.password.value;
        var confirmpassword_colab = collaboratorForm.password_confirm.value;


        if(name_colab == ''){
            Swal.fire(
                '',
                'O nome tem de estar preenchido',
                'error'
            );
            collaboratorForm.name.focus()
            return false;
        }

        if(nif_colab == ''){
            Swal.fire(
                '',
                'Por favor, indique o respetivo NIF',
                'error'
            );
            collaboratorForm.nif.focus()
            return false;
        }

        if(phone_colab == ''){
            Swal.fire(
                '',
                'Por favor, indique o respetivo número de telemovel',
                'error'
            );
            collaboratorForm.phone_number.focus()
            return false;
        }

        if(adress_colab == ''){
            Swal.fire(
                '',
                'Por favor, indique a respetiva morada',
                'error'
            );
            collaboratorForm.adress.focus()
            return false;
        }

        if(county_colab == ''){
            Swal.fire(
                '',
                'Por favor, indique a respetiva localidade',
                'error'
            );
            collaboratorForm.county.focus()
            return false;
        }

        if(district_colab == ''){
            Swal.fire(
                '',
                'Por favor, indique o respetivo distrito',
                'error'
            );
            collaboratorForm.district.focus()
            return false;
        }

        if(zip_colab == ''){
            Swal.fire(
                '',
                'Por favor, indique o respetivo código de postal',
                'error'
            );
            collaboratorForm.post_code.focus()
            return false;
        }

        if(mail_colab == ''){
            Swal.fire(
                '',
                'Por favor, indique o respetivo email para registo',
                'error'
            );
            collaboratorForm.email.focus()
            return false;
        }

        if(password_colab == ''){
            Swal.fire(
                '',
                'Por favor, indique uma password para registo',
                'error'
            );
            collaboratorForm.password.focus()
            return false;
        }

        if(confirmpassword_colab == ''){
            Swal.fire(
                '',
                'Por favor, insira novamente a nova password',
                'error'
            );
            collaboratorForm.password_confirm.focus()
            return false;

        } else if ( confirmpassword_colab != password_colab){
            Swal.fire(
                '',
                'As passwords não coincidem, por favor insira de novo!',
                'error'
            );
            collaboratorForm.password_confirm.focus();
            return false;
        }





    }
    