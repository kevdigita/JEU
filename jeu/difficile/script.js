
mask=document.getElementById('f');
mask.style.display='none';
m='';
function ordidep()
{
    tente=0
    do{
nb=0
t=[]
for(i=1;i<=100;i++)
{
    if(document.getElementById(i).getAttribute('class')=='red')
    {
        t[nb]=i;
        nb++;
    }

}
  id= t[Math.floor(Math.random() * t.length)];

  cll=document.getElementById('bt'+id).getAttribute('class')
  if(cll=='rock')
      {  
          document.getElementById('btn').setAttribute('class',cll);
          document.getElementById('fig').innerText="MINEUR- CAPABLE DE DETRUIRE UN ROCHER";
  
      }
  else if(cll=='mer')
  {
      document.getElementById('btn').setAttribute('class',cll);
      document.getElementById('fig').innerHTML="ARCHITECTE- CAPABLE DE CONSTRUIRE UN POND ";
      
  }else if(cll=='feu')
  {  document.getElementById('btn').setAttribute('class',cll);
      document.getElementById('fig').innerHTML="POMPIER- CAPABLE D'ETEINDRE LES FLAMMES ";
  }else if(cll=='abr')
  {  document.getElementById('btn').setAttribute('class',cll);
      document.getElementById('fig').innerHTML="FORESTIER- CAPABLE DE RASER UNE FORET";
  }
  else
  {
      document.getElementById('btn').setAttribute('class',cll);
      document.getElementById('fig').innerHTML="SOLDAT";
  }
      sup();
      
      
   m=id;  if((id==1)||(id==11)||(id==21)||(id==31)||(id==41)||(id==51)||(id==61)||(id==71)||(id==81)||(id==91))
   {
   if(document.getElementById('bt'+id).getAttribute('deplacer')=='d')
   {
          N=[parseInt(id)+1,parseInt(id)-10,parseInt(id)+10]; 
   }
   else
   {
       N=[parseInt(id)+1,parseInt(id)+10]; 
   }
    
   
   }
   else if((id==10)||(id==20)||(id==30)||(id==40)||(id==50)||(id==60)||(id==70)||(id==80)||(id==90)||(id==100))
   { 
       if(document.getElementById('bt'+id).getAttribute('deplacer')=='d')
   {
       N=[parseInt(id)-1,parseInt(id)-10,parseInt(id)+10];
   }
   else
   {
       N=[parseInt(id)-1,parseInt(id)+10];
   }
   }
   else
   {   if(document.getElementById('bt'+id).getAttribute('deplacer')=='d')
   {
       N=[parseInt(id)-1,parseInt(id)+1,parseInt(id)-10,parseInt(id)+10];
   }
   else
   {
       N=[parseInt(id)-1,parseInt(id)+1,parseInt(id)+10];   
   }
  }
 
  col=(document.getElementById(id).getAttribute('class'))
  
   for(i=0;i<N.length;i++)
       {
  if(N[i]>0)
  {
  
  
  if((document.getElementById(N[i]).getAttribute('class')=='grey') )
  {
  
      document.getElementById(N[i]).setAttribute('class','blanc');
     
  
  }
  
  else if((document.getElementById(N[i]).getAttribute('class')=='rock')&& 
  (document.getElementById('bt'+id).getAttribute('class')=='rock'))
  {
  
      document.getElementById(N[i]).setAttribute('class','blanc');
  }
  else if((document.getElementById(N[i]).getAttribute('class')=='feu')&& 
  (document.getElementById('bt'+id).getAttribute('class')=='feu'))
  {
  
      document.getElementById(N[i]).setAttribute('class','blanc');
  }
  else if((document.getElementById(N[i]).getAttribute('class')=='mer')&& 
  (document.getElementById('bt'+id).getAttribute('class')=='mer'))
  {
  
      document.getElementById(N[i]).setAttribute('class','blanc');
  }
  else if((document.getElementById(N[i]).getAttribute('class')=='abr')&& 
  (document.getElementById('bt'+id).getAttribute('class')=='abr'))
  {
  
      document.getElementById(N[i]).setAttribute('class','blanc');
  }
  
  
  
  
   else if(col=='red' && document.getElementById(N[i]).getAttribute('class')=='blue')
  
  {
      
      document.getElementById(N[i]).setAttribute('class','jaune');
  
  }
  else if
  (col=='blue' && document.getElementById(N[i]).getAttribute('class')=='red')
  
  {
      document.getElementById(N[i]).setAttribute('class','violet');
  
  }
  else if(col== document.getElementById(N[i]).getAttribute('class'))
  {
  
  }
  else if(document.getElementById(N[i]).getAttribute('class')!=document.getElementById('bt'+id).getAttribute('class'))
  {
      danger=document.getElementById(N[i]).getAttribute('class');
  danger=danger+"-mini";
  document.getElementById(N[i]).setAttribute('class',danger);
      
  }
        }
  }
  nb=0;
  tb=[]
for(i=1;i<=100;i++)
{
    if(
        (document.getElementById(i).getAttribute('class')=='blanc')||
    (document.getElementById(i).getAttribute('class')=='jaune')||
    (document.getElementById(i).getAttribute('class')=='rock-mini'&& document.getElementById(m).getAttribute('class')=='rock')||
   ( document.getElementById(i).getAttribute('class')=='mer-mini'&& document.getElementById(m).getAttribute('class')=='mer')||
    (document.getElementById(i).getAttribute('class')=='feu-mini'&& document.getElementById(m).getAttribute('class')=='feu')||
    (document.getElementById(i).getAttribute('class')=='abr-mini'&& document.getElementById(m).getAttribute('class')=='abr')
    )

    {
        tb[nb]=i;
        nb++;
    }

}
id= tb[Math.floor(Math.random() * tb.length)];
tente++;

}while((id===undefined )&& (tente<=100));
if(tente>=100)
{for(i=1;i<=100;i++)
    {
        if(
            (document.getElementById(i).getAttribute('class')=='blanc')||
        (document.getElementById(i).getAttribute('class')=='jaune')||
        (document.getElementById(i).getAttribute('class')=='rock-mini')||
       ( document.getElementById(i).getAttribute('class')=='mer-mini')||
        (document.getElementById(i).getAttribute('class')=='feu-mini')||
        (document.getElementById(i).getAttribute('class')=='abr-mini')
        )
    
        {
            tb[nb]=i;
            nb++;
        }
    
    }
    id= tb[Math.floor(Math.random() * tb.length)];

}






if(document.getElementById(id).getAttribute('class')=='blanc')
{ 
document.getElementById(id).setAttribute('class',document.getElementById(m).getAttribute('class'))
document.getElementById(id).innerHTML=document.getElementById(m).innerHTML;
document.getElementById(m).innerHTML='';
document.getElementById(m).setAttribute('class','grey');

document.getElementById('bt'+m).setAttribute('id','bt'+id);

sup()
}
else if   (document.getElementById(id).getAttribute('class')=='jaune')
{
 sup();
      alert('fight');
     mask=document.getElementById('TD');
  mask.style.display='none';
  
  mask=document.getElementById('f');
  mask.style.display='block';
   if(document.getElementById(m).getAttribute('class')=="red")
  {
      jeu(id,m,'r');
  }
  sup();
}
else
{

mo=   document.getElementById('fig').innerHTML;
   taf=mo.split(" ");
  
      if(document.getElementById(id).getAttribute('class')=='rock-mini')
      {
          document.getElementById('fig').innerHTML=taf[0] + "A ETE ECRASER PAR UN ROCHER";
      }
  else  if(document.getElementById(id).getAttribute('class')=='feu-mini')
  {
      document.getElementById('fig').innerHTML=taf[0] + "A ETE BRULER PAR LE FEU";
  }
  else if(document.getElementById(id).getAttribute('class')=='mer-mini')
  {
      document.getElementById('fig').innerHTML=taf[0] + "S'EST NOYER DANS UN FLEUVE";
  }
  if(document.getElementById(id).getAttribute('class')=='abr-mini')
  {
      document.getElementById('fig').innerHTML=taf[0] + "S'EST PERDU DANS LA FORET";
  }
      document.getElementById(m).innerHTML='';
  
  
  
      document.getElementById(m).setAttribute('class',"grey");
      sup();

}
    
}      




  
    
  
  
function dep(id)
{
    
    if(document.getElementById(id).getAttribute('class')!="red")
    {

 
if(document.getElementById(id).getAttribute('class')=="blanc")
  {
    document.getElementById(id).setAttribute('class',document.getElementById(m).getAttribute('class'))
    document.getElementById(id).innerHTML=document.getElementById(m).innerHTML;
    document.getElementById(m).innerHTML='';
    document.getElementById(m).setAttribute('class','grey');

    document.getElementById('bt'+m).setAttribute('id','bt'+id);

  sup()

  ordidep();
  }
  
  else  if((document.getElementById(id).getAttribute('class')=="jaune")
    || (document.getElementById(id).getAttribute('class')=="violet")
    
    )


{   sup();
    alert('fight');
   mask=document.getElementById('TD');
mask.style.display='none';

mask=document.getElementById('f');
mask.style.display='block';

if(document.getElementById(m).getAttribute('class')=="blue")
{jeu(m,id,'b');
}


sup();
}
  
  else  if((document.getElementById(id).getAttribute('class')=="red")
    || (document.getElementById(id).getAttribute('class')=="blue")
    
    )

{
    cll=document.getElementById('bt'+id).getAttribute('class')
if(cll=='rock')
    {  
        document.getElementById('btn').setAttribute('class',cll);
        document.getElementById('fig').innerText="MINEUR- CAPABLE DE DETRUIRE UN ROCHER";

    }
else if(cll=='mer')
{
    document.getElementById('btn').setAttribute('class',cll);
    document.getElementById('fig').innerHTML="ARCHITECTE- CAPABLE DE CONSTRUIRE UN POND ";
    
}else if(cll=='feu')
{  document.getElementById('btn').setAttribute('class',cll);
    document.getElementById('fig').innerHTML="POMPIER- CAPABLE D'ETEINDRE LES FLAMMES ";
}else if(cll=='abr')
{  document.getElementById('btn').setAttribute('class',cll);
    document.getElementById('fig').innerHTML="FORESTIER- CAPABLE DE RASER UNE FORET";
}
else
{
    document.getElementById('btn').setAttribute('class',cll);
    document.getElementById('fig').innerHTML="SOLDAT ";
}
    sup();
    
    
 m=id;
 if((id==1)||(id==11)||(id==21)||(id==31)||(id==41)||(id==51)||(id==61)||(id==71)||(id==81)||(id==91))
 {
 if(document.getElementById('bt'+id).getAttribute('deplacer')=='d')
 {
        N=[parseInt(id)+1,parseInt(id)-10,parseInt(id)+10]; 
 }
 else
 {
     N=[parseInt(id)+1,parseInt(id)-10]; 
 }
  
 
 }
 else if((id==10)||(id==20)||(id==30)||(id==40)||(id==50)||(id==60)||(id==70)||(id==80)||(id==90)||(id==100))
 { 
     if(document.getElementById('bt'+id).getAttribute('deplacer')=='d')
 {
     N=[parseInt(id)-1,parseInt(id)-10,parseInt(id)+10];
 }
 else
 {
     N=[parseInt(id)-1,parseInt(id)-10];
 }
 }
 else
 {   if(document.getElementById('bt'+id).getAttribute('deplacer')=='d')
 {
     N=[parseInt(id)-1,parseInt(id)+1,parseInt(id)-10,parseInt(id)+10];
 }
 else
 {
     N=[parseInt(id)-1,parseInt(id)+1,parseInt(id)-10];   
 }
   
 }
 
 col=(document.getElementById(id).getAttribute('class'))
 
  for(i=0;i<N.length;i++)
      {
 if(N[i]>0)
 {
 
 
 if((document.getElementById(N[i]).getAttribute('class')=='grey') )
 {
 
     document.getElementById(N[i]).setAttribute('class','blanc');
    
 
 }
 
 else if((document.getElementById(N[i]).getAttribute('class')=='rock')&& 
 (document.getElementById('bt'+id).getAttribute('class')=='rock'))
 {
 
     document.getElementById(N[i]).setAttribute('class','blanc');
 }
 else if((document.getElementById(N[i]).getAttribute('class')=='feu')&& 
 (document.getElementById('bt'+id).getAttribute('class')=='feu'))
 {
 
     document.getElementById(N[i]).setAttribute('class','blanc');
 }
 else if((document.getElementById(N[i]).getAttribute('class')=='mer')&& 
 (document.getElementById('bt'+id).getAttribute('class')=='mer'))
 {
 
     document.getElementById(N[i]).setAttribute('class','blanc');
 }
 else if((document.getElementById(N[i]).getAttribute('class')=='abr')&& 
 (document.getElementById('bt'+id).getAttribute('class')=='abr'))
 {
 
     document.getElementById(N[i]).setAttribute('class','blanc');
 }
 
 
 
 
  else if(col=='red' && document.getElementById(N[i]).getAttribute('class')=='blue')
 
 {
     
     document.getElementById(N[i]).setAttribute('class','jaune');
 
 }
 else if
 (col=='blue' && document.getElementById(N[i]).getAttribute('class')=='red')
 
 {
     document.getElementById(N[i]).setAttribute('class','violet');
 
 }
 else if(col== document.getElementById(N[i]).getAttribute('class'))
 {
 
 }
 else if(document.getElementById(N[i]).getAttribute('class')!=document.getElementById('bt'+id).getAttribute('class'))
 {
     danger=document.getElementById(N[i]).getAttribute('class');
 danger=danger+"-mini";
 document.getElementById(N[i]).setAttribute('class',danger);
     
 }
 }
     }
 nb=Math.floor(Math.random()*(14 - 1)) +1;
 if(nb<=4)
 {
 NB=Math.floor(Math.random()*(100 - 1)) +1;
 document.getElementById(NB).innerHTML=""
 if(nb==1)
 {
 
     document.getElementById(NB).setAttribute('class','rock');
     document.getElementById('fig').innerHTML=" EBOULEMENT";
 
 }
 if(nb==2)
 {
     document.getElementById(NB).setAttribute('class','mer');
     document.getElementById('fig').innerHTML=" INONDATION";
 }
 if(nb==3)
 {
     document.getElementById(NB).setAttribute('class','feu');
     document.getElementById('fig').innerHTML=" INCENDIE";
 }
 if(nb==4)
 {
     document.getElementById(NB).setAttribute('class','abr');
     document.getElementById('fig').innerHTML=" TRENBLEMMENT DE TERRE DES  ARBRES QUI TOMBES ";
 }
 
 alert(document.getElementById('fig').innerHTML);
 sup()
 }
    
 }
 
 else if(document.getElementById(id).getAttribute('class')=="grey")
   {
     document.getElementById('btn').setAttribute('class','btn');
     document.getElementById('fig').innerHTML=" CECI EST UN CHEMIN LIBRE";
 
   }
   else if(document.getElementById(id).getAttribute('class')=="feu")
   {
     document.getElementById('btn').setAttribute('class','btn');
     document.getElementById('fig').innerHTML="CECI EST UN BRASIER-APPELER LES POMPIERS";
     sup();
 
   }
   else if(document.getElementById(id).getAttribute('class')=="rock")
   {
     document.getElementById('btn').setAttribute('class','btn');
     document.getElementById('fig').innerHTML="CECI EST UN ROCHER-APPELER LES MINEURS";
     sup();
 
   }
   else if(document.getElementById(id).getAttribute('class')=="mer")
   {
     document.getElementById('btn').setAttribute('class','btn');
     document.getElementById('fig').innerHTML="CECI EST UN flEUVE-APPELER LES ARCHITECTES";
     sup();
 
   }
   else if(document.getElementById(id).getAttribute('class')=="abr")
   {
     document.getElementById('btn').setAttribute('class','btn');
     document.getElementById('fig').innerHTML="CECI EST UNE FORET-APPELER LES FORESTIERS";
     sup();
 
   }
 else 
 {
  mo=   document.getElementById('fig').innerHTML;
  taf=mo.split(" ");
 
     if(document.getElementById(id).getAttribute('class')=='rock-mini')
     {
         document.getElementById('fig').innerHTML=taf[0] + " A ETE ECRASER PAR UN ROCHER";
     }
 else  if(document.getElementById(id).getAttribute('class')=='feu-mini')
 {
     document.getElementById('fig').innerHTML=taf[0] + " A ETE BRULER PAR LE FEU";
 }
 else if(document.getElementById(id).getAttribute('class')=='mer-mini')
 {
     document.getElementById('fig').innerHTML=taf[0] + " S'EST NOYER DANS UN FLEUVE";
 }
 if(document.getElementById(id).getAttribute('class')=='abr-mini')
 {
     document.getElementById('fig').innerHTML=taf[0] + " S'EST PERDU DANS LA FORET";
 }
     document.getElementById(m).innerHTML='';
 
 
 
     document.getElementById(m).setAttribute('class',"grey");
     sup();
     
     
 }
     }
     else
     {
     document.getElementById('fig').innerHTML="ERREUR DE CHOIX"
 
     }
 }
 function sup(id)
 {
 vr='false'
 vb='false'
     for(i=1;i<=100;i++)
     {
         
         if(document.getElementById(i).getAttribute('class')=="blanc")
         {
        
 
     document.getElementById(i).setAttribute('class','grey');
 
 
         }
         if(document.getElementById(i).getAttribute('class')=="violet")
 {
 
     document.getElementById(i).setAttribute('class','red');
 
 }
 if(document.getElementById(i).getAttribute('class')=="jaune")
 {
 
     document.getElementById(i).setAttribute('class','blue');
 
 }
 if(document.getElementById(i).getAttribute('class')=="rock-mini")
 {
 
     document.getElementById(i).setAttribute('class','rock');
 
 }
 if(document.getElementById(i).getAttribute('class')=="mer-mini")
 {
 
     document.getElementById(i).setAttribute('class','mer');
 
 }
 if(document.getElementById(i).getAttribute('class')=="feu-mini")
 {
 
     document.getElementById(i).setAttribute('class','feu');
 
 }
 if(document.getElementById(i).getAttribute('class')=="abr-mini")
 {
 
     document.getElementById(i).setAttribute('class','abr');
 
 }
 if(document.getElementById(i).getAttribute('class')=="red")
 {
 if(i>90 )
 {
     document.getElementById('bt'+i).setAttribute('deplacer','d')
 }
 
 
 vr='true';
 
 
 }
 if(document.getElementById(i).getAttribute('class')=="blue")
 {
     if(i<=10 )
 {
     document.getElementById('bt'+i).setAttribute('deplacer','d')
 }
     vb='true';
 }
 
 
 
     }
 if(vr=='false'|| vb=='false')
 {
 window.location.replace('../../index.php?vr='+vr+"&vb="+vb);
 
 }
 
 
 }
 