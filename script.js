$(document).ready(function(){
	var bar = $(".material-icons");
	var list = $(".modal_content");
	var close = $(".fa-close");

	bar.click(function(){
		list.fadeIn();
	});
	
	close.click(function(){
		list.fadeOut();
	})
	list.click(function(){
		list.fadeOut();
	})
	
	
	//Upload Image
	function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
	$("#imageUpload").change(function() {
		readURL(this);
	});
});

