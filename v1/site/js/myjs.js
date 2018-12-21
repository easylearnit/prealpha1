//(c) esli ti ykrades u mena eto ja teba ubju
 var iframe  = document.getElementById("iframe");
 var input = document.getElementById("inp");
 function 
 menu(a)
 {
     switch (a) 
	 {
	  	 case 0:
	  	 iframe.src="doc/404.html";
		 input.value=" Тема 1 | задание 1  ";
	  	 break;
	  	 case 1:
	  	 iframe.src="doc/p(1).html";
		 input.value=" Тема 1 | задание 2  ";
	  	 break;
	  	 case 2:
	  	 iframe.src="doc/404.html";
		 input.value=" Тема 1 | задание 3  ";
		 rand();
	  	 break;
	  	 case 3:
	  	 iframe.src="doc/404.html";
		 input.value=" Тема 2 | задание 1  ";
	  	 break;
	  	 case 4:
	  	 iframe.src="doc/404.html";
		 input.value=" Тема 2 | задание 2  ";
	  	 break;
	  	 case 5:
	  	 iframe.src="doc/404.html";
		 input.value=" Тема 2 | задание 3  ";
	  	 break;
	  	 case 6:
	  	 iframe.src="doc/404.html";
		 input.value=" Тема 3 | задание 1  ";
	  	 break;
	  	 case 7:
	  	 iframe.src="doc/404.html";
		 input.value=" Тема 3 | задание 2  ";
	  	 break;
	  	 case 8:
	  	 iframe.src="doc/404.html";
		 input.value=" Тема 3 | задание 3  ";
	  	 break;
		 case 9:
	  	 iframe.src="doc/404.html";
		 input.value="    все задания       ";
	  	 break;
   }
 }
 var body = document.getElementById("body1");
 function
 night(m)
 {
   //if(m==1)
   //{
    //  body.style.backgroundColor = "#1B1116";
	//  input.style.backgroundColor = "#1B1116";
   //}
  // else
  // {
//	   body.style.backgroundColor = "#F9F8F6";
//	   input.style.backgroundColor = "#F9F8F6";
  // }
  alert("Эта функция в данный момент отключена\nВы можите активировать функицию вручную\nnight2(1)");
 }
 function
 night2(m)
 {
   if(m==1)
   {
      body.style.backgroundColor = "#1B1116";
	  input.style.backgroundColor = "#1B1116";
   }
   else
  {
	   body.style.backgroundColor = "#F9F8F6";
	   input.style.backgroundColor = "#F9F8F6";
  }
 }