let urlData = {
server: "https://wm.mvs.ds.usace.army.mil/data_manager/jasper_reports/",
base: "public_reports_cumulative_precipitation/",
data: "../../../assets/data/"
};

$(document).ready(function() {
let location_id = getUrlParameter("location_id");
let fname = "location_data_" + location_id + ".html";
console.log("location file name = " + fname);
let uri = urlData.server + urlData.base + fname;
uri = uri.replace(' ', '%20', '%20');
console.log("uri:" + uri);
$('#gage_data').load(uri);
document.title = "Location Data: " + location_id;
}
);