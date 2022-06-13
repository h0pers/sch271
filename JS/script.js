function chek_account() {
	let login = prompt("Ведіть логін вчителя", '');
	let password = prompt("Ведіть пароль",'');
	if (login != "login") {
		alert("Невірний пароль чи логін, спробуй ще раз!");
		chek_account();
	}
	if (password != "admin") {
		alert("Невірний пароль чи логін, спробуй ще раз!");
		chek_account();
	}
}
chek_account();