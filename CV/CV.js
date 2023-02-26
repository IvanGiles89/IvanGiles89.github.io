const dark = () => {
	document.body.style.backgroundColor = '#121212';
	document.body.style.color = '#3A98B9';
	var a=document.getElementsByClassName('separador-superior');
	for (var i=0; i<a.length; i++) a[i].style.backgroundColor='#121212';

	var a=document.getElementsByClassName('separador-izquierdo');
	for (var i=0; i<a.length; i++) a[i].style.backgroundColor='#121212';

	var a=document.getElementsByClassName('centro');
	for (var i=0; i<a.length; i++) a[i].style.backgroundColor='#121212';

	var a=document.getElementsByClassName('lista');
	for (var i=0; i<a.length; i++) a[i].style.color='#3A98B9';
}


document.getElementById('modo-oscuro').addEventListener('click', function() {
	dark();
	document.getElementById
})

const light = () => {
	document.body.style.backgroundColor = 'white';
	document.body.style.color = '#171719';
	var a=document.getElementsByClassName('separador-superior');
	for (var i=0; i<a.length; i++) a[i].style.backgroundColor='white';

	var a=document.getElementsByClassName('separador-izquierdo');
	for (var i=0; i<a.length; i++) a[i].style.backgroundColor='white';

	var a=document.getElementsByClassName('centro');
	for (var i=0; i<a.length; i++) a[i].style.backgroundColor='white';

	var a=document.getElementsByClassName('lista');
	for (var i=0; i<a.length; i++) a[i].style.color='#121212';
}

document.getElementById('modo-claro').addEventListener('click', function() {
	light();
})