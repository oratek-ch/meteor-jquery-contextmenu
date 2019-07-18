Package.describe({
	name: 'oratekch:jquery-contextmenu',
	summary: 'JQuery ContextMenu by Rodney Rehm',
	version: '1.6.6',
	git: 'https://github.com/oratekch/meteor-jquery-contextmenu.git'
});

Package.onUse(function(api) {
	api.versionsFrom('METEOR@0.9.2');
	api.use(['ui'], 'client');
	api.use(['blaze'], 'client');
	api.use(['templating'], 'client');

    api.add_files("jquery.ui.position.js", "client");
    api.add_files("jquery.contextMenu.js", "client");
    api.add_files("jquery.contextMenu.css", "client");
});
