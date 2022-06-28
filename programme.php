<?php
require_once('connect.php');

    $nom = $_POST["first_name"];
    $prenom = $_POST["last_name"];
    $genre= $_POST["company"];
    $email = $_POST["email"];
    $confirmail = $_POST["area_code"];
    $numero = $_POST["phone"];
    $pays = filter_input(INPUT_POST, "subject", FILTER_VALIDATE_INT);
    $niveau = filter_input(INPUT_POST, "subject", FILTER_VALIDATE_INT);
    $thematique = filter_input(INPUT_POST, "subject", FILTER_VALIDATE_INT);
    $campus = filter_input(INPUT_POST, "subject", FILTER_VALIDATE_INT);
    

    
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
        isset($campus))
    {
     
         $insertion = "INSERT into formulaire (nom, prenom, genre, email, confirm_mail, numero_telephone, pays, niveau_etude, thematique_choisie, campus_preféré ) 
         value('$nom','$prenom','$genre','$email' , '$confirmail', '$numero', '$pays', '$niveau', '$thematique', '$campus')";

         if($conn->query($insertion) === TRUE){
             echo "New record created successfully";
         } else {
             echo "Error: " . $insertion . "<br>" . $conn->error;
        }
    }
    else{
        echo('error');
    }


    
    //   else{
    //       echo ($_POST["nom"]. " ," .
    //             $_POST["prenom"] . " ," .  
    //              $_POST["company"] ." ," .   
    //             $_POST["email"]. " ," .
    //             $_POST["area_code"]. " ,"  .
    //             $_POST["phone"]. " ,"  . 
    //             filter_input(INPUT_POST, "subject", FILTER_VALIDATE_INT). " ,"  . 
    //             filter_input(INPUT_POST, "subject", FILTER_VALIDATE_INT). " ,"  . 
    //             filter_input(INPUT_POST, "subject", FILTER_VALIDATE_INT). " ,"  . 
    //             filter_input(INPUT_POST, "subject", FILTER_VALIDATE_INT) 
    //         );
    //   }
       $conn->close();




?>