(function () {
    OWAPresantationView = Backbone.View.extend({
        initialize : function (options) {
            this.delegateEvents(this._commonEvents);
            this._url = 'http://localhost/owa/#presantation/';
            this._page = 0;
            this._pages = ['title' ,'agenda', ''];
        },

        _commonEvents : {
            "mouseover .next_page" : "_showNextButton",
            "mouseout .next_page" : "_hideNextButton",
            "mouseover .previous_page" : "_showPreviousButton",
            "mouseout .previous_page" : "_hidePreviousButton",
            "click .next_page" : "_goNextPage",
            "click .previous_page" : "_goPreviousPage"
        },

        _render : function (id, value) {
            var _template = $('#' + id)[0].innerHTML;
            this._tmpl = _.template(_template);
            return this._tmpl(value);
        },

        showTitle : function (value) {
            this._page = value.page || this._page;
            this.el.empty().append(this._render('title', value));
        },

        showAgenda : function (value) {
            this._page = value.page || this._page;
            this.el.empty().append(this._render('agenda', value));
        },

        _showNextButton : function (event) {
            event.preventDefault();
            $('.next_page').css('opacity', 0.7);
        },

        _hideNextButton : function (event) {
            event.preventDefault();
            $('.next_page').css('opacity', 0);
        },

        _showPreviousButton : function (event) {
            event.preventDefault();
            $('.previous_page').css('opacity', 0.7);
        },

        _hidePreviousButton : function (event) {
            event.preventDefault();
            $('.previous_page').css('opacity', 0);
        },

        _goNextPage : function () {
            var hash = this._pages[++this._page];
            window.location = this._url + hash;
        },

        _goPreviousPage : function () {
             var hash = this._pages[--this._page];
             window.location = this._url + hash;
        }
    });
})();