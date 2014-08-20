var input = document.getElementById("saddr");
if(input !== null){
	var options = {
		componentRestrictions: {country: "NL"}
	};
	autocomplete = new google.maps.places.Autocomplete(input, options);
}