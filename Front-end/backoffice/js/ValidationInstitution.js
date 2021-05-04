    //dependencies
    /*var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');
    var app = express();
    */
    /*
    //middleware
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(validator());
    
    app.post('')
    */
 function validation(){   
     
    //candidates
    if(document.getElementById("candidatesList").value == 0 ) {  
        Swal.fire('', 'Indique o Candidato em Questão', 'error').then(function(){ institutionForm.candidatesList.focus()});
        return false & institutionForm.candidatesList.focus(); 
    }
    
    
    //personal data
    var name =  institutionForm.name.value;
    var nif = institutionForm.nif.value;
    var district = institutionForm.district.value;
    var address = institutionForm.address.value;
    var phone_number = institutionForm.phone_number.value;
    var county = institutionForm.county.value;
    var post_code = institutionForm.post_code.value;
    
    
    if (name == ''){
        Swal.fire(
                      '',
                      'Campo "Nome" em falta!',
                      'error'
                    );
        return false;
    } 

    if (nif == ''){
         Swal.fire(
                      '',
                      'Campo "NIF" em falta',
                      'error'
                    );
                    institutionForm.nif.focus();
        return false;
    }
    
   /* if (nif < 9 || nif > 9 ){
         Swal.fire(
                      '',
                      'Campo "NIF" incorreto! O NIF deve ter 9 digitos',
                      'error'
                    );
                    institutionForm.nif.focus();
        return false;
    } */

    if (address == ''){
         Swal.fire(
                      '',
                      'Campo "Morada" em falta!',
                      'error'
                    );
                    institutionForm.address.focus();
        return false;
    }    

    if (county == ''){
         Swal.fire(
                      '',
                      'Campo "Localidade" em falta!',
                      'error'
                    );
                    institutionForm.county.focus();
        return false;
    }

    if (district == ''){
         Swal.fire(
                      '',
                      'Campo "Distrito" em falta!',
                      'error'
                    );
                    institutionForm.district.focus();
        return false;
    }

    if (post_code == ''){
         Swal.fire(
                      '',
                      'Campo "código-postal" em falta!',
                      'error'
                    );
                    institutionForm.post_code.focus();
        return false;
    }
    
    if ( post_code.length < 8 || post_code.length > 8){
         Swal.fire(
                      '',
                      'Campo "código-postal" incorreto! O código-postal deve ter 7 digitos',
                      'error'
                    );
                    institutionForm.post_code.focus();
        return false;
    }

    if (phone_number == ''){
         Swal.fire(
                      '',
                      'Campo "número de telemóvel" em falta!',
                      'error'
                    );
                    institutionForm.phone_number.focus();
        return false;
    }
    
    if (phone_number.length < 9 || phone_number.length > 9){
         Swal.fire(
                      '',
                      'Campo "número de telemóvel" incorreto! O nº de telemóvel deve ter 9 digitos',
                      'error'
                    );
                    institutionForm.phone_number.focus();
        return false;
    }
    


    
    
    
    //login data
    var email  =  institutionForm.email.value;
    var password = institutionForm.password.value;
    var password_confirm  = institutionForm.password_confirm.value;



    if (email == ''){
         Swal.fire(
                      '',
                      'Campo "email" em falta!',
                      'error'
                    );
                    institutionForm.email.focus();
        return false;
        institutionForm.email.focus();
        
    }

    if (password == ''){
         Swal.fire(
                      '',
                      'Campo "password" em falta!',
                      'error'
                    );
                    institutionForm.password.focus();
        return false;
    }    

    if (password_confirm == ''){
         Swal.fire(
                      '',
                      'Por favor repita a password!',
                      'error'
                    );
                    institutionForm.password_confirm.focus();
        return false;
    }
    
    if (password_confirm != password){
         Swal.fire(
                      '',
                      'As passwords não coincidem!',
                      'error'
                    );
                    institutionForm.password_confirm.focus();
        return false;
    }

}