$(function () {//->문서가 다 로딩된 다음
	//메모 추가 버튼 클릭시 화면에 메모를 보여주기 : createBtn
	$("#createBtn").click(function() {
		new Memo().create();
	});
});
function Memo(){
	this.$note = null;
}
//create()
Memo.prototype.create = function () {
	console.log("create");
	var $note = $(
		`<div class="memo-note">
			<div class="memo-bar">
				<span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
				<span class="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
				<span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
			</div>
			<div class="memo-edit">
				<textarea class="memo-edit-area"></textarea>
			</div>
		</div>`
	);
	$note.appendTo($(".memo-area"));
	
	this.$note = $note;
	this.drag();//여기서 this는 메모 객체.
	
	var that = this;
	
	$note.find(".glyphicon-chevron-up").click(function() {
		//this.display();//이벤트 함수안에서 this는 이벤트가 발생한 대상 객체. 스팬태그가 된다.
		that.display();//그래서 함수 밖에서 변수에 메모객체 담아준다.
//		console.dir(this);
//		console.dir(that);
	});
	$note.find(".glyphicon-pushpin").click(function() {
		that.fix();
	});
	$note.find(".glyphicon-trash").click(function() {
		that.del();
	});
};
//drag()
Memo.prototype.drag= function () {
	this.$note.draggable();
};
//display()
Memo.prototype.display= function () {
//	console.log("display");
	this.$note.toggleClass("h20");
};
//fix()
Memo.prototype.fix = function () {
//	console.log("fix");
	this.$note.find(".glyphicon-pushpin").toggleClass("choice");
	if(this.$note.find(".glyphicon-pushpin").hasClass("choice")){
		this.$note.draggable("disable");
	}else{
		this.$note.draggable("enable");
	}
};
//del()
Memo.prototype.del= function () {
//	console.log("del");
	this.$note.remove();
};