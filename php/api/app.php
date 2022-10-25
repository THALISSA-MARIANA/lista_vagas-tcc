<?php
    require_once 'headers.php';
    $con = new mysqli('localhost','root','','vagas');

    if($_SERVER['REQUEST_METHOD'] === 'GET'){
        if(isset($_GET['id'])){
            $id = $con->real_escape_string($_GET['id']);
            $sql = $con->query("select * from vagas where id = '$id'");
            $data = $sql->fetch_assoc();
        }else{
            $data = array();
            
            $sql = $con->query("select * from lista_vagas");
            while($d = $sql->fetch_assoc()){
                $data[] = $d;
            }
            /*
            $query = mysqli_query($con,"select * from clientes");
            while($d = mysqli_fetch_assoc($query)){
                $data[] = $d;
            }
            {
                ["id":1,"nome":"Raphael"],
                ["id":2,"nome":"Jose"]
            }
            */
        }
        exit(json_encode($data));//json_encode( $arr, JSON_NUMERIC_CHECK );
    }
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $data  = json_decode(file_get_contents("php://input"));
        $sql = $con->query("insert into lista_vagas (vagas,) values ('".$data->lista_vagas."')");   
        if($sql){
            $data->id = $con->insert_id;
            exit(json_encode($data));

        }else{
            exit(json_decode(array('status' => 'Não funcionou')));
        }
    }
    if($_SERVER['REQUEST_METHOD'] === 'PUT'){
        if(isset($_GET['id'])){
            $id = $con->real_escape_string($_GET['id']);
            $data = json_decode(file_get_contents("php://input"));
            $sql = $con->query("update lista_vagas set 
            vagas = '".$data->vagas."', 
             where id = '$id'");
            if($sql){
                exit(json_encode(array('status'=> 'successo')));
            }else{
                exit(json_encode(array('status'=> 'Deu ruim')));
            }
        }
    }
    if($_SERVER['REQUEST_METHOD'] === 'DELETE'){
        if(isset($_GET['id'])){
            $id = $con->real_escape_string($_GET['id']);
            $sql = $con->query("delete from vagas where id = '$id'");
        
            if($sql){
                exit(json_encode(array('status' => 'successo')));
            }else{
                exit(json_encode(array('status' => 'Deu ruim')));
            }
        }
    }
?>