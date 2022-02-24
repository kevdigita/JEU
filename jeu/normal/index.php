<center>
    <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
<link rel="stylesheet" href="../../css/bootstrap.css">
<link rel="stylesheet" href="../../css/bootstrap.min.css">

<link rel="stylesheet" href="../../css/style.css">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<table id="TD">
<button class="alerte alert.info" id="btn" class="btn"></button>
    <figcaption class="alert alert-success info" id="fig"> <br> 
    NEW GAME BEGIN  </figcaption>
<?php
$num=1;
for($j=1;$j<=10;$j++)
{?><tr>
<?php
for($i=1;$i<=10;$i++)
{?>

<td id='<?=$num?>'
onclick="dep('<?=$num?>');"
<?php

if($num>10 && $num<91)
{
    $terre=rand(1,8);
    if($terre==1)
    {
        ?>

class='rock'

<?php
    }
    else if($terre==2)
    {
        ?>

class='mer'

<?php
    }    else if($terre==3)
    {
        ?>

class='feu'

<?php
    }
    else if($terre==4)
    {
        ?>

class='abr'

<?php
    }
    else 
    {
        ?>

class='grey'

<?php
    }

}
elseif($num>0 && $num<11)
{?>

class='red'

<?php
}
else 
{
    ?>

class='blue'

<?php
}

?>

><?php 

if(($num>0 && $num<11)||($num>90) )
{
  
$role=rand(1,5)
  ?>
  <button
  santer="30"
  deplacer='u'
  class="<?php
if($role==1)
{
    echo 'rock';
}
elseif($role==2)
{
    echo 'mer';
}elseif($role==3)
{
    echo 'feu';
}
elseif($role==4)
{
    echo 'abr';
}
elseif($role==5)
{
    echo 'grey';
}
?>"
id='bt<?=$num?>'>


</button><?php
}
?>





</td>



<?php
$num++;
}
?>
</tr>
<?php
}
?>
<tr>
<td class="no"><button class="no"></button></td>
<td class="no"><button class="no"></button></td>
<td class="no"><button class="no"></button></td>
<td class="no"><button class="no"></button></td>
<td class="no"><button class="no"></button></td>
<td class="no"><button class="no"></button></td>
<td class="no"><button class="no"></button></td>
<td class="no"><button class="no"></button></td>
<td class="no"><button class="no"></button></td>
<td class="no"><button class="no"></button></td>

</tr>
</table>
<br>



<table>
 <tr>
          <td id="dee" class="dee1"></td>
    </tr></table>
<br>
<table id='f'>
   
    <tr>
         <td > <input class="btn btn-danger" type="number" id="eqr">
         <a class="btn btn-danger"id='r' onclick="lancer('r')">LANCER</a> </td>

    <td > <input class="btn btn-primary" type="number" id="eqb"> 
    <a  class="btn btn-primary"id='b' onclick="lancer('b')">LANCER</a> </td>
   
  
    </tr>
<tr>
   
<th id='imr'></th>
        <th id="imb"></th>
</tr>

</table>

<script src="jquery.js"></script><script src="jeu.js"></script>
<script src="script.js"></script>

    
</body>
</html>
</center>