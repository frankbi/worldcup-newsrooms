var ds = new Miso.Dataset({
	url: "newsrooms.csv",
	delimiter: ","
});

ds.fetch({
	success: function() {

		var data = this._columns;

		// array
		var newsroom = this._columns[1].data;

		var photo = this._columns[2].data;

		var url = this._columns[3].data;

		// handlebars
		var source = $("#post-template").html();
		var template = Handlebars.compile(source);

		for (var i = 0; i < newsroom.length; i++) {

			$(".container").append(template({
				"newsroom": newsroom[i],
				"img": photo[i],
				"url": url[i]
			}));

		}

	}
});