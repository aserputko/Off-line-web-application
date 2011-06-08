(function () {
    OWAPresantationController = Backbone.Controller.extend({
        initialize : function (options) {
            this._page = options.page;
            this._id = options.id;
            this._model = new OWAPresantationModel();
            this._view = new OWAPresantationView({
                el : $('#home')
            });
            this._resolution = true;

            for (var method in this) {
                if (method === this._page) {
                    this[method]();
                    this._resolution = false;
                }
            }
            if (this._resolution) {
                this._page === false ? alert('index') : alert(404)
            }
        },

        title : function () {
            var data = this._model.getTitle();
            this._view.showTitle(data)
        },

        agenda : function () {
            var data = this._model.getAgenda();
            this._view.showAgenda(this._model.getAgenda())
        }
    });
})();