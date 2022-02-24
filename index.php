<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/bootstrap.css">
<link rel="stylesheet" href="css/bootstrap.min.css">

<link rel="stylesheet" href="css/style.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body><center>
<?php 
if(isset($_GET['cpu']))
{    ?>
   
    <h1>NIVEAU DE DIFFICULTER</h1>
    <div class="container">
    <div>
    <br>
    <a class="btn btn-info"  href="index.php"> RETOUR
   

</a>     <br>    <br>    <br>
&emsp;
<br>
<br>
 
<a class="btn btn-primary"  href="jeu/facile/index.php"> FACILE
<br>

</a>    
&emsp;
<a class="btn btn-warning" href="jeu/normal/index.php">NORMAL
<br>

</a>
&emsp;
<a class="btn btn-danger" href="jeu/difficile/index.php">DIFFICILE 
<br>

</a>
</div>
</div>   <?php 
}
else
{


if (isset($_GET['vr']) && isset($_GET['vb']))
{
if($_GET['vr']=='true')
{
?>
<div class="alert alert-danger">
<h1>GRAND GAGNANT ROUGE</h1>

<img src="icon/WINRED.jpeg" alt="" height="200" width="200">
</div> <br> <br> <br>
<?php
}
else if($_GET['vb']=='true')
{
?>
<div class="alert alert-primary">
<h1 >GRAND GAGNANT BLEU</h1>

<img src="icon/WINBLUE.jpeg" alt="" height="200" width="200">
</div> <br> <br> <br>
<?php
}

}
    ?>
   
    <h1>MODE DE JEU</h1>
    <div class="container">
        <div>
        <br>
<br>
<br>
     
<a class="btn btn-primary"  href="index.php?cpu"> CONTRE CPU
<br>
<img src="icon/cpu.png" alt="" height="40" width="50">

</a>    
&emsp;
<a class="btn btn-danger" href="joueur/index.php">2 JOUEURS 
    <br>
<img src="icon/multi.png" alt="" height="40" width="50">
</a>
   </div>
</div>   <?php 
}?>
</center>
</body>
</html>