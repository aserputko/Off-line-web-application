(function () {
    OWAPresantationModel = function () {
        var mock = {
            title : {
                data : '18/05/2011',
                name : 'Andrii Serputko',
                topic : 'OFF-LINE WEB APPLICATION',
                shortTopic : 'OWA',
                page: 0
            },
            agenda : {
                title : 'Agenda',
                text : [
                    'First',
                    'Second',
                    '...',
                    'last'
                ],
                page : 1
            }
        };

        var data = localStorage.getItem('OWAPresantationModel');
        if (data) {
            this._items = JSON.parse(data);
        } else {
            localStorage.setItem('OWAPresantationModel', JSON.stringify(mock));
            this._items = JSON.parse(localStorage.getItem('OWAPresantationModel'));
        }
    };

    _.extend(OWAPresantationModel.prototype, {
        getTitle : function () {
            return this._items.title;
        },

        getAgenda : function () {
             return this._items.agenda;
        }
    });
})();