var name ="「您的瀏覽器被(4)病毒嚴重損壞」 我們檢測到您記憶體為28.1%受損，因為從最近的成人網站（4）有害的病毒。它會損害你的手機的SIM卡，並會破壞你的通訊錄，照片，數據，應用程序等。 如果你現在不清除病毒，它會導致您的記憶體嚴重損壞。按照修手機的說明。 步驟1:點擊該按鈕並安裝谷歌播放更新（免費）！ 步驟2:打開應用程序，並修復您的手機。";
var age = 18;
var isBoy = true;
var fruits = ["apple", "banana", "peach"];

alert(name);
alert(age);
alert(isBoy);
alert(fruits[2]);

function addition(num){ 
	return num + 10;
}
var age = 28;
var trueage= addition(age); alert(trueage);

var age2 = 25;
var trueage2= addition(age2); alert(trueage2);

function test(){
	a = 123;
	var b = 456;
	if(a == 123)
		var c = 789;
}

document.getElementById("byid").innerHTML = "我來自id";
document.getElementById("byid").style.color = "blue";

document.getElementsByClassName("byclass")[0].innerHTML = "我來自class";
document.getElementsByClassName("byclass")[0].style.fontSize = "30px";

document.getElementsByTagName("div")[2].innerHTML = "我來自Tag";
document.getElementsByTagName ("div")[2].style.fontFamily = "微軟正黑體";

document.getElementsByTagName("p")[0].innerHTML = "您的瀏覽器被(4)病毒嚴重損壞。我們檢測到您記憶體為28.1%受損，因為從最近的成人網站（4）有害的病毒。它會損害你的手機的SIM卡，並會破壞你的通訊錄，照片，數據，應用程序等。 如果你現在不清除病毒，它會導致您的記憶體嚴重損壞。按照修手機的說明。 步驟1:點擊該按鈕並安裝谷歌播放更新（免費）！ 步驟2:打開應用程序，並修復您的手機。";
document.getElementsByTagName("p")[0].style.color = "red";

