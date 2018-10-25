$(document).ready(function(){
    $("#id").focusout(function(){

            var id = $("#id").val();
 
            var urlStr = "http://localhost:8080/contacts/1000";
         
            $.ajax({
                url : urlStr,
                type : "get",
                dataType : "json",
                success : function(data){
                    console.log(data);

                    $("#id").val(data.id);
                    $("#name").val(data.name);
                    $("#phone").val(data.phone);
                    $("#email").val(data.email);
                    $("#gender").val(data.gender);
                    $("#birthday").val(data.birthday);
                },
                error : function(erro){
                    console.log(erro);
                }
            });
    });
    
});
