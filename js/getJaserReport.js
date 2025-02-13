let urlData = {
server: "https://wm.mvs.ds.usace.army.mil/data_manager/jasper_reports/",
base: "/",
data: "../../../assets/data/"
};

console.log("urlData = " + urlData);


$(document).ready(function() {
let report_name = getUrlParameter("report_name");

console.log("report_name = " + report_name);

urlData.base = report_name + urlData.base;

let fname = report_name + ".html";

console.log("report_name file name = " + fname);

let uri = urlData.server + urlData.base + fname;
uri = uri.replace(' ', '%20');

console.log("uri:" + uri);

$('#report_area').load(uri);

document.title = "Location Data: " + report_name;
}
);
