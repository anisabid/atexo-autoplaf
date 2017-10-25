const _browser = this.browser || this.chrome;
(function ($) {

	var ATX = {
		url : '',
		submit : function(_target){
				var atx_num = $(".form-atx .input-atx").val();
				if(atx_num !== '' && parseInt(atx_num) < 76){
					ATX.url = 'https://atx'+ atx_num +'.local-trust.com';
					$('.form-atx')
						.attr('target', _target)
						.attr('action', ATX.url);


					_browser.tabs.query({ active: true, currentWindow: true }, tabs => {
				      if (_target === '_blanck') {
				        _browser.tabs.create({ url: ATX.url });
				      } else {
				        _browser.tabs.update(tabs[0].id, {
				          url: ATX.url
				        });
				      }
				    });
					return true;
				}else{
					return false;
				}

				
		}	
	};



	$( document ).ready(function() {
	    /*$(".form-atx .input-atx").on("change paste keyup", function() {
		   if($(this).val() !== ''){
		   	$('.form-atx .btn-submit').attr('disabled', 'disabled');
		   } else {

		   }
		});*/

		$(".form-atx").submit(function(event){
			event.preventDefault();
			ATX.submit('_blanck');
			return false;
		});

		$('#btn-submit-current-tab').click(function(event){
			event.preventDefault();
			ATX.submit('_self');
			
		});

		$('#btn-submit-new-tab').click(function(event){
			event.preventDefault();
			ATX.submit('_blanck');
		});


	});


	

})(jQuery);

