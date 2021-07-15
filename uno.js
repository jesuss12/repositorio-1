<HTML>

<HEAD>

<TITLE>Ejemplos de Javascript</TITLE>

<script language=»JavaScript»>

function calc(form) {

form.result.value=eval(form.expr.value); }

</script>

</HEAD>

<BODY bgcolor=»white»>

<form>

<table border=3 cellspacing=2 width=350>

<tr align=center><th align=right>Equasion:</th> <td><input type=text name=expr size=15></td> <td rowspan=2><input type=button value=» Calculate » onclick=»calc(this.form)»></td></tr>

<tr align=center><th align=right>Answer:</th> <td><input type=text name=result size=15></td></tr>

</table>

</form>

</body>

</html>
