//(c) esli ti ykrades u mena eto ja teba ubju
 var i = 1;
 var iframe1 = document.getElementById("iframe1");
 var li1 = document.getElementById("li1");
 var li2 = document.getElementById("li2");
 var li3 = document.getElementById("li3");
 var button1 = document.getElementById("button1");
 var button2 = document.getElementById("button2");
 var text1 = document.getElementById("text1");
 function 
 enter()
 {
	 switch (i)
	 {
		 case 1:
		 li1.style.backgroundColor = "#f90";
		 li2.style.backgroundColor = "#f90";
		 li3.style.backgroundColor = "#666";
		 text1.innerHTML = "Загрузка<br> 1)переходим на официальный сайт getpaint.net<br> 2)открываем страницу “download” (getpaint.net/download.html)<br> 3)нажимаем на изображение “download now dot pnd”(dotpdn.com/downloads/pdn.html)<br> 4)нажимаем на“paint.net 4.1.5”<br> 5)файл загружаться<br>";
		 i++;
		 break;
		 case 2:
		 li1.style.backgroundColor = "#f90";
		 li2.style.backgroundColor = "#f90";
		 li3.style.backgroundColor = "#f90";
		 text1.innerHTML = "Установка<br>1)распаковываем архив<br>2)открываем распакованный файл<br>3)нажимаем “да”<br>4)ждём…<br>5)6)Выбираем язык (нижний, левый угол)<br>7)нажимаем “далее”<br>8)нажмимаем “я принимаю”, затем“далее”<br>9) если выбрали настраиваемую установку, то вы можите:<br>вкл./выкл. использование по умолчанию, как редактор для файлов JPEG, PNG, BMP<br>вкл./выкл. использование по умолчанию, как редактор для файлов TGA<br>вкл./выкл. авто-добавления ярлыка на рабочий стол<br>вкл./выкл. авто-проверку наличия обновлений<br>вкл./выкл. авто-проверку наличия бета-версий<br>дожидаемся завершения установки, затем нажимаем “далее”<br>выбираем папку для установки программы, нажимаем далее 2 раза<br>10)нажимаем копать“готово”<br>Поздравляю, программа установлена";
		 i++;
		 break;
	 }
 }
 function
 back()
 {
	 switch (i)
	 {
		 case 3:
		 li1.style.backgroundColor = "#f90";
		 li2.style.backgroundColor = "#f90";
		 li3.style.backgroundColor = "#666";
		 text1.innerHTML = "Загрузка 1)переходим на официальный сайт getpaint.net<br> 2)открываем страницу “download” (getpaint.net/download.html)<br> 3)нажимаем на изображение “download now dot pnd”(dotpdn.com/downloads/pdn.html)<br> 4)нажимаем на“paint.net 4.1.5”<br> 5)файл загружаться<br>";
		 i--;
		 break;
		 case 2:
		 li1.style.backgroundColor = "#f90";
		 li2.style.backgroundColor = "#666";
		 li3.style.backgroundColor = "#666";
		 text1.innerHTML = "1";
		 i--;
		 break;
	 }
 }
