(function($){
	jQuery.fn.Placeholder = function(){
		var inputs = $(this).find(":text,[type=email],:password,textarea");
		inputs.each(function(){
			if($(this).data('label')){
				var labelName = $(this).data('label');
			} else {
				var labelName = ($(this).attr('name')) ? $(this).attr('name') : $(this).attr('type');
			}
			$(this).wrap('<div class="placeholderWrapper" style="position:relative;"></div>').parent().prepend('<label style="cursor: text;padding-left:3px;padding-top:1px;position:absolute;text-transform:uppercase;z-index:3;">'+labelName+'</label>');

			$(this).focus(function(){
				$(this).prev().hide();
			});
			$(this).blur(function(){
				if(!$(this).val()) {
					$(this).prev().show();
				}
			});
			$(this).prev().click(function(){
				$(this).hide().next().focus();
			});
		});
	};
})(jQuery);