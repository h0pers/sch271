function chek_account() {
	let login = prompt("Ведіть логін до документобміну", '');
	let password = prompt("Ведіть пароль",'');
	if (login != "documents of school") {
		alert("Невірний пароль чи логін, спробуй ще раз!");
		chek_account();
	}
	if (password != "documents of school") {
		alert("Невірний пароль чи логін, спробуй ще раз!");
		chek_account();
	}
}
chek_account();