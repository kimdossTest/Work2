function change_castlist(j){	
	var castlist = document.getElementsByClassName("main_area-2-casting-list");

	for (var i = 0; i < castlist.length; i++) {
		castlist[i].style.opacity = 0;
	};
	castlist[j].style.opacity = 1;
	
}