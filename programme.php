<?php
// connection a la base de donnees
$host = "localhost";
$dbname = "energy-generation";
$username = "root";
$password = "";

$conn = mysqli_connect( $host,
                        $username,
                        $password,
                        $dbname);

if (mysqli_connect_errno()) {
    die("connection error: " .mysqli_connect_error());
}

    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["Email"];
    $confirmail = $_POST["confirmmail"];
    $numero = $_POST["numero"];
    $confirnum = $_POST["phonenum"];
    $pays = $_POST["pays"];
    $niveau = $_POST["niveau"];
    $thematique = $_POST["thematique"];
    $campusprefere = $_POST["campus"];
    

    
    
    if (isset($_POST["name"])and 
     isset($_POST["prenom"]) and  
     isset ($_POST["Email"]) and 
     isset ($_POST["confirmmail"]) and
     isset ($_POST["numero"])and
     isset ($_POST["phonenum"])and
     isset ($_POST["pays"])and
     isset ($_POST["niveau"])and
     isset ($_POST["thematique"])and
     isset ($_POST["campus"]))
     {
     
        $insertion = "insert into formulaire (name, prenom, Email, confirmail, numero, phonenum, pays, niveau, thematique, campus ) 
        value('$nom','$prenom','$Email','$confirmail' , '$numero', '$phonenum', '$pays', '$niveau', '$thematique', '$campus')";

        if($conn->query($insertion) === TRUE){
            echo "New record created successfully";
        } else {
            echo "Error: " . $insertion . "<br>" . $conn->error;
        }
    
     }else{
        echo ($_POST["name"]. " ,"  .  $_POST["prenom"] . " ," .  
        $_POST["Email"] ." ," .   $_POST["confirmail"]. " ,"  .
          $_POST["numero"]. " ,"  .  $_POST["phoinenum"]. " ,"  . 
           $_POST["pays"]. " ,"  .  $_POST["niveau"]. " ,"  . 
            $_POST["thematique"]. " ,"  .  $_POST["campus"]  );
     }
     $conn->close();




?>