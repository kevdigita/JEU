$('#eqr').attr('disabled', true);
$('#eqb').attr('disabled', true);

bl="",ro=''
function jeu(idb,idr,l)
{
    bl=idb;
    ro=idr;
rouge=document.getElementById('bt'+idr).getAttribute('class')
blue=document.getElementById('bt'+idb).getAttribute('class')
document.getElementById('imr').setAttribute('class',rouge);
document.getElementById('imb').setAttribute('class',blue);
rouge=document.getElementById('bt'+idr).getAttribute('santer')
blue=document.getElementById('bt'+idb).getAttribute('santer')
document.getElementById('eqr').value=rouge;
document.getElementById('eqb').value=blue;
if(l=="r")
{
    mask=document.getElementById('b');
mask.style.display='none';
mask=document.getElementById('r');
mask.style.display='block';
lancer(l);
}
if(l=='b')
{

 mask=document.getElementById('r');
 mask.style.display='none';
 mask=document.getElementById('b');
 mask.style.display='block';

}

}
function vie(t,choi)
{
    document.getElementById('dee').setAttribute('class','dee'+choi);
if(t=="r")
{
    s=document.getElementById('bt'+bl).getAttribute('santer')
    s-= parseInt(choi),
    document.getElementById('bt'+bl).setAttribute('santer',s);
    
    document.getElementById('eqb').value=s;

    mask=document.getElementById('r');
    mask.style.display='none';
    mask=document.getElementById('b');
    mask.style.display='block';
if(s<=0)
{
    document.getElementById(bl).innerHTML=''
    document.getElementById(bl).setAttribute('class','grey')
    mask=document.getElementById('TD');
    mask.style.display='block';
    
    mask=document.getElementById('f');
    mask.style.display='none';
    sup()

}
 
}
else
{
    s=document.getElementById('bt'+ro).getAttribute('santer')
    s-= parseInt(choi),
    document.getElementById('bt'+ro).setAttribute('santer',s);
    
    document.getElementById('eqr').value=s;
    mask=document.getElementById('b');
    mask.style.display='none';
    mask=document.getElementById('r');
    mask.style.display='block';
if(s<=0)
{
    document.getElementById(ro).innerHTML='';
    document.getElementById(ro).setAttribute('class','grey')

    mask=document.getElementById('TD');
    mask.style.display='block';
    
    mask=document.getElementById('f');
    mask.style.display='none';
    
sup()
}
else
{
    lancer('r');
}
}




}

function lancer(t)
{
 
    if(t=='r')
    {
           n=[parseInt(1),parseInt(2),parseInt(3),parseInt(4),parseInt(5),parseInt(6),parseInt(4),parseInt(5),parseInt(6)];
    }
    else
    {
        n=[parseInt(1),parseInt(2),parseInt(3),parseInt(4),parseInt(5),parseInt(6)]   
    }
 

    choix = n[Math.floor(Math.random() * n.length)];
document.getElementById('dee').setAttribute('class','dee');
setTimeout(vie(t,choix),6000)

}