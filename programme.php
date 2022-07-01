<?php
require_once('connect.php');

    $nom = $_POST["first_name"];
    $prenom = $_POST["last_name"];
    $genre= $_POST["subject1"];
    $email = $_POST["email"];
    $confirmail = $_POST["area_code"];
    $numero = $_POST["phone"];
    $area = $_POST["area"];
    $pays =  $_POST["subject2"];
    $niveau = $_POST["subject3"];
    $thematique = $_POST["subject4"];
    $campus = $_POST["subject5"];
  //var_dump($_POST);
  //die();
    if (
        isset ($nom)and
        isset ($prenom)and
        isset ($genre)and
        isset ($email)and
        isset ($confirmail)and
        isset ($numero)and
       isset ($pays)and
        isset ($niveau)and
        isset ($thematique)and
        isset($campus)
        )
    {
     $sql ="INSERT INTO formulaire (nom,prenom,genre,email,confirm_mail,area, numero_telephone,pays,niveau_etude,thematique_choisie,campus_pref)VALUE(?,?,?,?,?,?,?,?,?,?,?)";

    }
        
    $stmt = mysqli_stmt_init($conn);

    if ( ! mysqli_stmt_prepare($stmt, $sql)) {
     
        die(mysqli_error($conn));
       
    }

    mysqli_stmt_bind_param($stmt, "sssssiissss",
                       $nom,
                       $prenom,
                       $genre,
                       $email,
                       $confirmail,
                       $area,
                       $numero,
                       $pays,
                       $niveau,
                       $thematique ,
                       $campus);

mysqli_stmt_execute($stmt);

echo "Record saved.";
 


       $conn->close();




?>