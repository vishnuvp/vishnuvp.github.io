$(document).ready(function(){
	$.getJSON("http://0.0.0.0:8000/links.json", function(data){
	dataArray = data.links;
    $.each(data.links,function(index, value) {
    	var title = value['title'];
    	var link = value['link'];
    	var date = value['date'];
    	var codeString = '<li><a target="_blank" href="'+link+'">'+title+'</a><span class="reading-list-date">'+date+'</span></li>';
		$("#links-wrapper").append(codeString);
    });
});
});
