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
    var description =  factForm.description.value;
    var name  =  factForm.name.value;
    var photo = document.getElementById("editPhoto");


    



    

    if (description == ''){
        Swal.fire('','Preencha o campo com a Descrição','error');
        factForm.locality.focus();
        return false;
    }

    if(photo.files.length == 0){
        Swal.fire('','Carregue uma imagem para o Facto','error');
        factForm.locality.focus();
        return false;
    }

    if (name == ''){
        Swal.fire('','Preencha o campo com o Nome','error');
        factForm.district.focus();
        return false;
    }
    

    

    

    


}