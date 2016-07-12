/*Получает то что пишут в комментарий, записывает следующим на 
страничку и обнуляет значение поля ввода*/
function eventTarget(event){
	var $newCom=$(".inputCom1").val(),
	$comment_text=$("<p>").text($newCom);
	
	if($newCom!=""){
		$comment_text.hide();//скрыли перед тем как записать
		$(".comment").append($comment_text);
		$comment_text.fadeIn();//показали плавно
	};
	$(".inputCom1").val("");
};
/*Слушает нижатие на кнопку или Enter и запускает функцию*/
var main= function() {
	$("button").on("click", eventTarget );
	$(".inputCom1").on("keypress", function() {
		if(event.keyCode===13){
			eventTarget();
		}
	});
};
/*запускает функцию после генерации DOM*/
$(document).ready(main);