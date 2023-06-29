listData  = [{"first_name":"Dun","last_name":"McIlharga","make":"Acura","model":"RL","gender":"Male"},
{"first_name":"Augustus","last_name":"Schuelcke","make":"Hyundai","model":"Santa Fe","gender":"Male"},
{"first_name":"Christean","last_name":"Robertsen","make":"Mazda","model":"RX-8","gender":"Female"},
{"first_name":"Susanna","last_name":"Sickert","make":"Ford","model":"EXP","gender":"Female"},
{"first_name":"Marilee","last_name":"Weekley","make":"Porsche","model":"Boxster","gender":"Female"},
{"first_name":"Ruthe","last_name":"Blaxill","make":"Hyundai","model":"Santa Fe","gender":"Female"},
{"first_name":"Fancie","last_name":"Shaw","make":"Dodge","model":"Challenger","gender":"Female"},
{"first_name":"Romola","last_name":"Sugarman","make":"Mitsubishi","model":"Mirage","gender":"Female"},
{"first_name":"Dorotea","last_name":"Cawthera","make":"Suzuki","model":"XL-7","gender":"Female"},
{"first_name":"Anjanette","last_name":"Rudinger","make":"Volkswagen","model":"Passat","gender":"Female"},
{"first_name":"Harvey","last_name":"Bafford","make":"Chevrolet","model":"Express","gender":"Male"},
{"first_name":"Kellie","last_name":"Cristofanini","make":"MINI","model":"Countryman","gender":"Female"},
{"first_name":"Issiah","last_name":"Labusch","make":"Mazda","model":"RX-8","gender":"Male"},
{"first_name":"Ethel","last_name":"Darbishire","make":"Chevrolet","model":"Corvette","gender":"Female"},
{"first_name":"Gage","last_name":"Duly","make":"Dodge","model":"Sprinter","gender":"Male"},
{"first_name":"Sauncho","last_name":"Gherardi","make":"Pontiac","model":"Grand Prix","gender":"Male"},
{"first_name":"Kimball","last_name":"Boyett","make":"Mercedes-Benz","model":"SLR McLaren","gender":"Male"},
{"first_name":"Sophi","last_name":"Aspell","make":"Pontiac","model":"Grand Prix Turbo","gender":"Female"},
{"first_name":"Kanya","last_name":"Hinkes","make":"Mercedes-Benz","model":"Sprinter","gender":"Female"},
{"first_name":"Zorine","last_name":"Loody","make":"Lexus","model":"SC","gender":"Female"},
{"first_name":"Hasheem","last_name":"Aronowicz","make":"Ford","model":"Galaxie","gender":"Agender"},
{"first_name":"Tami","last_name":"Duckels","make":"Lincoln","model":"Continental Mark VII","gender":"Female"},
{"first_name":"Richart","last_name":"Murphey","make":"GMC","model":"Suburban 1500","gender":"Male"},
{"first_name":"Pavel","last_name":"Kless","make":"Volkswagen","model":"Golf","gender":"Male"},
{"first_name":"Gilberte","last_name":"Jeanin","make":"Honda","model":"Civic","gender":"Female"},
{"first_name":"Vikki","last_name":"Batalle","make":"Mercedes-Benz","model":"E-Class","gender":"Female"},
{"first_name":"Elissa","last_name":"Boatright","make":"Dodge","model":"D350 Club","gender":"Female"},
{"first_name":"Vanya","last_name":"Shawcroft","make":"GMC","model":"Suburban 2500","gender":"Male"},
{"first_name":"Elva","last_name":"Delaney","make":"Buick","model":"Riviera","gender":"Female"},
{"first_name":"Normie","last_name":"Hembery","make":"Mazda","model":"Mazdaspeed6","gender":"Male"},
{"first_name":"Nanci","last_name":"De Vuyst","make":"Mitsubishi","model":"Eclipse","gender":"Female"},
{"first_name":"Gizela","last_name":"Osgardby","make":"Lincoln","model":"MKX","gender":"Female"},
{"first_name":"Alexandr","last_name":"Louis","make":"Mazda","model":"929","gender":"Male"},
{"first_name":"Sax","last_name":"Clive","make":"Oldsmobile","model":"Regency","gender":"Male"},
{"first_name":"Joana","last_name":"Luetkemeyers","make":"Pontiac","model":"6000","gender":"Female"},
{"first_name":"Izabel","last_name":"Wilkins","make":"Ford","model":"E-Series","gender":"Female"},
{"first_name":"Kamillah","last_name":"Hadwin","make":"Chevrolet","model":"Silverado 1500","gender":"Female"},
{"first_name":"Desiri","last_name":"Exer","make":"Oldsmobile","model":"Achieva","gender":"Female"},
{"first_name":"Madelin","last_name":"Ismead","make":"Maserati","model":"Spyder","gender":"Agender"},
{"first_name":"Terri","last_name":"Curtiss","make":"Chevrolet","model":"Camaro","gender":"Female"},
{"first_name":"Clemente","last_name":"Warcup","make":"Plymouth","model":"Laser","gender":"Male"},
{"first_name":"Joell","last_name":"Kearsley","make":"Kia","model":"Sorento","gender":"Female"},
{"first_name":"Walsh","last_name":"Daldan","make":"GMC","model":"Terrain","gender":"Male"},
{"first_name":"Colleen","last_name":"Tod","make":"Mercedes-Benz","model":"C-Class","gender":"Polygender"},
{"first_name":"Helli","last_name":"Gleave","make":"Volvo","model":"S60","gender":"Female"},
{"first_name":"Buffy","last_name":"Halton","make":"Hyundai","model":"Tiburon","gender":"Female"},
{"first_name":"Tam","last_name":"Korting","make":"Cadillac","model":"Eldorado","gender":"Agender"},
{"first_name":"Josephina","last_name":"Lile","make":"GMC","model":"Envoy XL","gender":"Female"},
{"first_name":"Siegfried","last_name":"Vice","make":"BMW","model":"M5","gender":"Male"},
{"first_name":"Skelly","last_name":"Dunthorne","make":"Volvo","model":"C70","gender":"Male"}]

// // Function to populate the table
// function populateTable(data) {
//     var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
//     data.forEach(function(item) {
//         var row = table.insertRow(-1); // Insert a new row at the end of the table
//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         var cell3 = row.insertCell(2);
//         var cell4 = row.insertCell(3);
//         var cell5 = row.insertCell(4);
//         cell1.innerHTML = item['first_name'];
//         cell2.innerHTML = item['last_name'];
//         cell3.innerHTML = item['make'];
//         cell4.innerHTML = item['model'];
//         cell5.innerHTML = item['gender'];
//     });

//     // Initialize DataTable
//     $('#myTable').DataTable();
// }

// // Populate the table with the data
// populateTable(listData);


// // Function to sort table by column
// function sortTable(n) {
// 	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
// 	table = document.getElementById("myTable");
// 	switching = true;
// 	dir = "asc";

// 	while (switching) {
// 		switching = false;
// 		rows = table.rows;

// 		for (i = 1; i < rows.length - 1; i++) {
// 			shouldSwitch = false;
// 			x = rows[i].getElementsByTagName("TD")[n];
// 			y = rows[i + 1].getElementsByTagName("TD")[n];

// 			if (dir == "asc") {
// 				if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
// 					shouldSwitch = true;
// 					break;
// 				}
// 			} else if (dir == "desc") {
// 				if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
// 					shouldSwitch = true;
// 					break;
// 				}
// 			}
// 		}

// 		if (shouldSwitch) {
// 			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
// 			switching = true;
// 			switchcount++;
// 		} else {
// 			if (switchcount == 0 && dir == "asc") {
// 				dir = "desc";
// 				switching = true;
// 			}
// 		}
// 	}
// }

// // Add event listeners to table headers
// window.onload = function() {
// 	document.getElementById("headerFN").addEventListener("click", function(){sortTable(0)});
// 	document.getElementById("headerLN").addEventListener("click", function(){sortTable(1)});
// 	document.getElementById("headerMake").addEventListener("click", function(){sortTable(2)});
// 	document.getElementById("headerModel").addEventListener("click", function(){sortTable(3)});
// 	document.getElementById("headerGender").addEventListener("click", function(){sortTable(4)});
// 	populateTable(listData);
// }

// $(document).ready(function() {
//     var table = $('#myTable').DataTable();

//     var genderSelect = new SlimSelect({
//         select: '#genderSelect',
//         onChange: function(selectedValues) {
//             table
//                 .column(4) // Gender is the 5th column (0-indexed)
//                 .search(selectedValues.join('|'), true, false) // Use regex to match any of the selected values
//                 .draw();
//         }
//     });

//     var makeSelect = new SlimSelect({
//         select: '#makeSelect',
//         onChange: function(selectedValues) {
//             table
//                 .column(2) // Make is the 3rd column
//                 .search(selectedValues.join('|'), true, false) // Use regex to match any of the selected values
//                 .draw();
//         }
//     });

//     // Populate the table with the data
//     populateTable(listData);

//     // Add options to the Slim Select dropdowns based on the unique values in each column
//     table.column(4).data().unique().sort().each(function(value) {
//         genderSelect.addOption({text: value, value: value});
//     });

//     table.column(2).data().unique().sort().each(function(value) {
//         makeSelect.addOption({text: value, value: value});
//     });

//     // Show the corresponding dropdown when the header is clicked
//     $('#myTable th').click(function() {
//         var index = $(this).index();
//         if (index === 4) { // Gender is the 5th column
//             $('#genderSelect').show();
//             genderSelect.open();
//         } else if (index === 2) { // Make is the 3rd column
//             $('#makeSelect').show();
//             makeSelect.open();
//         }
//     });
// });

$(document).ready(function() {
    var table = $('#myTable').DataTable({
        data: listData,
        columns: [
            { data: 'first_name', orderable: false },
            { data: 'last_name', orderable: false },
            { data: 'make', orderable: false },
            { data: 'model', orderable: false },
            { data: 'gender', orderable: false }
        ]
    });

    // Initialize the SlimSelect dropdowns and append them to the corresponding headers
    var genderSelect = new SlimSelect({
        select: '#genderSelect',
        onChange: function(selectedValues) {
            table
                .column(4)
                .search(selectedValues.join('|'), true, false)
                .draw();
        }
    });
    $('#genderSelect').hide().appendTo('#headerGender');

    var makeSelect = new SlimSelect({
        select: '#makeSelect',
        onChange: function(selectedValues) {
            table
                .column(2)
                .search(selectedValues.join('|'), true, false)
                .draw();
        }
    });
    $('#makeSelect').hide().appendTo('#headerMake');

    // Show the corresponding dropdown and populate it with unique values when the header is clicked
    $('#headerGender').click(function() {
        $('#genderSelect').show();
        genderSelect.setData([]);
        table.column(4).data().unique().sort().each(function(value) {
            genderSelect.addOption({text: value, value: value});
        });
        genderSelect.open();
    });

    $('#headerMake').click(function() {
        $('#makeSelect').show();
        makeSelect.setData([]);
        table.column(2).data().unique().sort().each(function(value) {
            makeSelect.addOption({text: value, value: value});
        });
        makeSelect.open();
    });
});
