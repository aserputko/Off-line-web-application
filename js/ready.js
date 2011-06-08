$(document).ready(function () {
	
    var readyController = Backbone.Controller.extend({
		
        initialize : function () {
			alert('Ok')
        },

        routes: {
            "": "offLineWebApplication",
            "off-line-web-application": "offLineWebApplication",
            "offline-web-application/:page": "offLineWebApplication",
            "offline-web-application/:page/:id": "offLineWebApplication"
        },

        offLineWebApplication : function (page, id) {
            var page = page || false;
            var id = id || false;
            var options = {
                page : page,
                id   : id
            };
            var presantation = new OWAPresantationController(options);
        }
    });
    
    var ready = new readyController();
    Backbone.history.start();
});
