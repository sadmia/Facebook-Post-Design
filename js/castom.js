"use strict";


// Data Base Site

let profileName = "MD Mehedi Hasan";


// *******************************************************

let body = document.getElementById("Body");

let profile_Name = document.querySelectorAll('#Profile_Name');

for (let i = 0; i < profile_Name.length; i++ ) {
	profile_Name[i].innerHTML = profileName;
}


let comment_BTN = document.querySelector("#Comment-btn");
let comment_Box = document.querySelector('.comment-input-aria')
comment_BTN.addEventListener("click", function() {

	comment_Box.classList.add("display_block");

})

comment_BTN.addEventListener("dblclick", function() {

	comment_Box.classList.remove("display_block");

})


let public_icon = document.getElementById("public_icon");
let publicIconHover = document.getElementById("PublicIconHover");
public_icon.addEventListener("click", function() {

	publicIconHover.style.display = "block";
	three_dot_btn_show.style.display = "none";

})
let PublicIconHover_close = document.getElementById("PublicIconHover-close");
PublicIconHover_close.addEventListener("click", function() {

	PublicIconHover.style.display = "none";

}) 

let Public_Icon_Div = document.getElementById("Public-Icon-Div");
let PID_Select_Border = document.getElementById("PID_Select_Border");
let PID_Select_Div = document.getElementById("PID_Select_Div");
let Select_Icon_Name = document.getElementById("Select-Icon_Name");
Public_Icon_Div.addEventListener("click", function() {

	Public_Icon_Div.style.backgroundColor = "#EAF3FF";
	PID_Select_Border.style.borderColor = "#0571ED";
	PID_Select_Div.style.display = "block";
	public_icon.classList.remove("fa-user-friends");
	public_icon.classList.remove("fa-lock");
	public_icon.classList.add("fa-globe-americas");
	Select_Icon_Name.innerHTML = "Public";
	PublicIconHover.style.display = "none";

	Friends_Icon_Div.style.backgroundColor = "#fff";
	FsID_Select_Border.style.borderColor = "#3339";
	FsD_Select_Div.style.display = "none";

	only_ME_Icon_Div.style.backgroundColor = "#fff";
	lID_Select_Border.style.borderColor = "#3339";
	lD_Select_Div.style.display = "none";

})

let Friends_Icon_Div = document.getElementById("Friends-Icon-Div");
let FsID_Select_Border = document.getElementById("FsID_Select_Border");
let FsD_Select_Div = document.getElementById("FsD_Select_Div");
Friends_Icon_Div.addEventListener("click", function() {

	Public_Icon_Div.style.backgroundColor = "#fff";
	PID_Select_Border.style.borderColor = "#3339";
	PID_Select_Div.style.display = "none";

	only_ME_Icon_Div.style.backgroundColor = "#fff";
	lID_Select_Border.style.borderColor = "#3339";
	lD_Select_Div.style.display = "none";

	Friends_Icon_Div.style.backgroundColor = "#EAF3FF";
	FsID_Select_Border.style.borderColor = "#0571ED";
	FsD_Select_Div.style.display = "block";
	public_icon.classList.remove("fa-globe-americas");
	public_icon.classList.remove("fa-lock");
	public_icon.classList.add("fa-user-friends");
	Select_Icon_Name.innerHTML = "Friends";
	PublicIconHover.style.display = "none";

})


let only_ME_Icon_Div = document.getElementById("only_ME-Icon-Div");
let lID_Select_Border = document.getElementById("lID_Select_Border");
let lD_Select_Div = document.getElementById("lD_Select_Div");
only_ME_Icon_Div.addEventListener("click", function() {

	Public_Icon_Div.style.backgroundColor = "#fff";
	PID_Select_Border.style.borderColor = "#3339";
	PID_Select_Div.style.display = "none";

	Friends_Icon_Div.style.backgroundColor = "#fff";
	FsID_Select_Border.style.borderColor = "#3339";
	FsD_Select_Div.style.display = "none";

	only_ME_Icon_Div.style.backgroundColor = "#EAF3FF";
	lID_Select_Border.style.borderColor = "#0571ED";
	lD_Select_Div.style.display = "block";
	public_icon.classList.remove("fa-globe-americas");
	public_icon.classList.remove("fa-user-friends");
	public_icon.classList.add("fa-lock");
	Select_Icon_Name.innerHTML = "Only me";
	PublicIconHover.style.display = "none";

})



// Like Button
let like_lite_button = document.getElementById("like_lite_button");
let like_dark_button = document.getElementById("like_dark_button");
let like_gif_img = document.querySelector(".like-gif-img");
like_lite_button.addEventListener("click", function() {

	like_lite_button.style.display = "none";
	like_dark_button.style.display = "block";

})

like_dark_button.addEventListener("click", function() {

	like_lite_button.style.display = "block";
	like_dark_button.style.display = "none";

})
like_gif_img.addEventListener("click", function() {

	like_lite_button.style.display = "none";
	like_dark_button.style.display = "block";

})

let love_gif_img = document.querySelector(".love-gif-img img");
let Like_Button = document.getElementById("Like-Button");
love_gif_img.addEventListener("click", function() {



})

let three_dot_btn_click = document.getElementById("three-dot-btn-click");
let three_dot_btn_click2 = document.getElementById("three-dot-btn-click2");
let three_dot_btn_show = document.getElementById("three-dot-btn-show");


three_dot_btn_click.addEventListener("click", function() {

	three_dot_btn_show.style.display = "none";
	share_btn_btn_show.style.display = "none";
	three_dot_btn_click.style.display = "none";
	three_dot_btn_click2.style.display = "block";

})

three_dot_btn_click2.addEventListener("click", function() {

	three_dot_btn_show.style.display = "block";
	three_dot_btn_click2.style.display = "none";
	three_dot_btn_click.style.display = "block";
	three_dot_btn_click.style.display = "block";

})

let pin_Post_Button = document.getElementById("Pin_Post_Button");
let save_Post_Button = document.getElementById("Save_Post_Button");

pin_Post_Button.addEventListener("click", function() {
	three_dot_btn_show.style.display = "none";
})
save_Post_Button.addEventListener("click", function() {
	three_dot_btn_show.style.display = "none";
})

let edit_Audicnce = document.getElementById("Edit_Audicnce");
edit_Audicnce.addEventListener("click", function() {
	publicIconHover.style.display = "block";
	three_dot_btn_show.style.display = "none";
})

let turn_off_notifications = document.getElementById("Turn_off_notifications");
turn_off_notifications.addEventListener("click", function() {

	three_dot_btn_show.style.display = "none";
	alert("Notification tarned on");

})


let share_btn_click = document.querySelector(".share-btn");
let share_btn_click2 = document.querySelector(".share-btn2");
let share_btn_btn_show = document.getElementById("share-btn-btn-show");
share_btn_click.addEventListener("click", function() {

	share_btn_btn_show.style.display = "block";
	three_dot_btn_show.style.display = "none";
	share_btn_click.style.display = "none";
	share_btn_click2.style.display = "block";

})
share_btn_click2.addEventListener("click", function() {

	share_btn_btn_show.style.display = "none";
	share_btn_click.style.display = "block";
	share_btn_click2.style.display = "none";

})