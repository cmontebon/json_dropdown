let region_dropdown = $('#region-dropdown');
let province_dropdown = $('#province-dropdown');
let citymun_dropdown = $('#citymun-dropdown');

region_dropdown.empty();

region_dropdown.append('<option selected="true" disabled>Choose Region</option>');
region_dropdown.prop('selectedIndex', 0);

$.each(regions.RECORDS, function (key, region) {
	region_dropdown.append($('<option></option>').attr('value', region.regCode).text(region.regDesc));
});

region_dropdown.on('change', function() {
	let regCode = $(this).val();

	province_dropdown.empty();
	province_dropdown.append('<option selected="true" disabled>Choose Region</option>');
	province_dropdown.prop('selectedIndex', 0);

	citymun_dropdown.empty();
	citymun_dropdown.append('<option selected="true" disabled>Choose City/Municipality</option>');

	$.each(provinces.RECORDS, function (key, province) {
		if (regCode == province.regCode) {
			province_dropdown
				.append($('<option></option>')
				.attr('value', province.provCode).text(province.provDesc));
		}
	});

	province_dropdown.attr('disabled', false);
	citymun_dropdown.attr('disabled', true);
});


province_dropdown.on('change', function() {
	let provCode = $(this).val();
	console.log('prov')

	citymun_dropdown.empty();
	citymun_dropdown.append('<option selected="true" disabled>Choose City/Municipality</option>');

	$.each(cities.RECORDS, function (key, citymun) {
		if (provCode == citymun.provCode) {
			citymun_dropdown
				.append($('<option></option>')
				.attr('value', citymun.citymunCode).text(citymun.citymunDesc));
		}
	});

	citymun_dropdown.attr('disabled', false);
});