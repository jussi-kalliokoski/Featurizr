(function (window, Modernizr) {
	var	featureQuery	= /\(feature:\s*([a-z\-_0-9]+(\s*,\s*[a-z\-_0-9]+)*)\)/gi,
		singleFeature	= /[a-z\-_0-9]+/gi,
		documentElem	= window.document.documentElement,
		head		= documentElem.getElementsByTagName("head")[0] || docElem,
		links		= head.getElementsByTagName("link");

	function Featurizr() {
		var	l = links.length,
			i, sheet;
		for (i = 0; i < l; i++) {
			sheet = links[i];
			if (sheet.rel && sheet.rel.toLowerCase() === "stylesheet") {
				sheet.media = sheet.media.replace(featureQuery, function (p, query) {
					var	features = [],
						l;
					query.replace(singleFeature, function (feature) {
						features.push(feature);
					});
					for (l = 0; l < features.length; l++) {
						(Modernizr[features[l]] || features[l] === "js") && features.splice(l--, 1);
					}
					return features.length ? "(feature: " + features.join(", ") + ")" : "all";
				})
			}
		}
	}
	Modernizr.Featurizr = Featurizr;
	Featurizr();
	
}(this, Modernizr));
