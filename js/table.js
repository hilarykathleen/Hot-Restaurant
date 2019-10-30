function runTableQuery(){
// locate root page
var currentURL = window.location.origin;

// url of api to gather info (initially set to localhost)
$.ajax({url: currentURL + "/api/tables", method: "GET"})
			.done(function(tableData) {
				
				for (var i=0; i<tableData.length; i++){
// Create the HTML Well (Section) and Add the table content for each reserved table
					var tableSection = $("<div>");
					tableSection.addClass('well');
					tableSection.attr('id', 'tableWell-' + i+1)
					$('#tableSection').append(tableSection);
					var tableNumber = i + 1;
// Then display the remaining fields in the HTML (Section Name, Date, URL)
					$("#tableWell-"+ i+1).append('<h2>' + tableNumber + "</span> | " + tableData[i].customerID + "</h2>");
				}
			});
		}
	function runWaitListQuery(){
		var currentURL = window.location.origin;
		$.ajax({url: currentURL + "/api/waitlist", method: "GET"})
			.done(function(waitlistData) {
			
				for (var i=0; i<waitlistData.length; i++){
					var waitlistSection = $("<div>");
					waitlistSection.addClass('well');
					waitlistSection.attr('id', 'waitlistWell-' + i+1)
					$('#waitlistSection').append(waitlistSection);
					var tableNumber = i + 1;
// (Section Name, Date, URL)
					$("#waitlistWell-"+ i+1).append('<h2>' + tableNumber + "</span> | " + waitlistData[i].customerID + "</h2>");
				}
			});
		}
// reset
function clearTable(){
		var currentURL = window.location.origin;
		$.ajax({url: currentURL + "/api/clear", method: "POST"})
	}
	$("#clear").on('click', function(){
		alert("cleared");
		clearTable();
// Refresh 
		location.reload();
	})
// Run Queries!
	runTableQuery();
	runWaitListQuery();
