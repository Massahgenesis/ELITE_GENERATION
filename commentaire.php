<?php
require_once('connect.php');
            
   
?>
<?php error_reporting (E_ALL ^ E_NOTICE);?>


<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>blog</title>
	<link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"> 
	<link rel="stylesheet" href="css/blog.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
		integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
		crossorigin="anonymous" referrerpolicy="no-referrer" />
	<!-- CSS only -->

        <form  method="POST">

       <input type="text" name="pseudo" placeholder="votre pseudo"><br>
      <textarea name="commentaire" placeholder="entrer votre commentaire ..."></textarea><br>
      <button type=submit onclick="cha"> Send</button>
		</form> 
		  <button><a href="blog.html">Back</a> </button>

		<?php
		  $pseudo = $_POST["pseudo"];
		  $commentaire = $_POST["commentaire"];
		
		  if (isset($pseudo,$commentaire)){
 
		   $sql= "INSERT INTO commentaire (pseudo,commentaire)VALUE(?,?)"; 
			
		  }
		  $stmt = mysqli_stmt_init($conn);

		  if ( ! mysqli_stmt_prepare($stmt, $sql)) {
		   
			  die(mysqli_error($conn));
			  $conn->close();
		  }
		  
		  mysqli_stmt_bind_param($stmt, "ss",
								 $pseudo,
								 $commentaire);
		  
		  mysqli_stmt_execute($stmt);
	
	
         
 
		?>

	<!-- ======================================= debut du footer avec les section ==============================-->

	

		<!--===================================== debut de la section ils croient en nous =======================-->
  
		<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>
