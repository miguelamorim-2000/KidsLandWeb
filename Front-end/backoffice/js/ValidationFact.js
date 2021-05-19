    //dependencies
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');
    var app = express();
    
    
    //middleware
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(validator());
    
    app.post('')
    
 function validation(){   
    var description =  document.getElementById("descriptionFact").value;
    var name  =  document.getElementById("nameFact").value;
    var photo = document.getElementById("editarFotografia").value.length;

    if (name == ''){
        Swal.fire('','Por favor, associe um nome ','error');
        document.getElementById("descriptionFact").focus();
        return false;
    }
    

    if (description == ''){
        Swal.fire('','Por favor, preencha o campo com a Descrição','error');
        document.getElementById("nameFact").focus();
        return false;
    }

    if(photo == 0){
        Swal.fire('','Por favor, carregue uma imagem para ilustrar o respetivo Facto','error');
        document.getElementById("editarFotografia").focus();
        return false;
    }


    

    

    


}