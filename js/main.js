function add_log_entry(myForm) {
//fixme: Validation stage here
	var table = document.getElementById("current_log");
	var row = table.insertRow(1);
	row.insertCell(-1).textContent = table.rows.length - 1;
	var rowData = Array();
	Array.from(myForm.elements).forEach(
		(input) => {
			row.insertCell(-1).textContent = input.value;
			rowData.push(input.value);
		}
	);
	window.localStorage.setItem('row_' + (table.rows.length - 1), JSON.stringify(rowData));
	window.localStorage.setItem('table_rows', table.rows.length - 1);
}

function exportLog() {
// Source: https://www.tutorialspoint.com/how-to-create-and-save-text-file-in-javascript
	const link = document.createElement("a");
	if (rowCount = localStorage.getItem('table_rows')) {
	// fixme: There is no error checking, this is fragile, don't use this in production.
		var rowData = Array();
		for (var i = 0; i < rowCount; i++) {
			rowData.push(window.localStorage.getItem('row_' + (i + 1)).slice(1,-1));
		}
		content = rowData.join("\n") + "\n";
	} else {
		content = "";
	}

	const file = new Blob([content], { type: 'text/csv' });
	link.href = URL.createObjectURL(file);
	link.download = document.getElementById("current_log").attributes.name.nodeValue + "." + (new Date().toISOString()) + ".csv";
	link.click();
	URL.revokeObjectURL(link.href);
}

function get_date() {
	return new Date().toISOString().split('T')[0];
}

function get_time() {
	return new Date().toISOString().split('T')[1].split('.')[0];
}

function init() {
//fixme: need to have fields register themselves for default behaviour

	setInterval (() => {
	//fixme: This needs to detect if the user entered their own data
	//fixme: This needs to integrate into "default behaviour"
		document.getElementsByName("date")[0].value = get_date();
		document.getElementsByName("utc")[0].value = get_time();
	}, 1000);

	if (rowCount = localStorage.getItem('table_rows')) {
	// fixme: There is no error checking, this is fragile, don't use this in production.
		var table = document.getElementById("current_log");
		for (var i = 0; i < rowCount; i++) {
			var row = table.insertRow(1);
			row.insertCell(-1).textContent = (i + 1);
			var rowData = JSON.parse(window.localStorage.getItem('row_' + (i + 1)));
			rowData.forEach(value => row.insertCell(-1).textContent = value);
		}
	}
}

init();
