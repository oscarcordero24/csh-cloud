"use strict";

function getLocationList(urlData, jsonfilename, domObject ) {

    let  hdrs = new Headers();
    hdrs.append('Content-Type', 'application/json');

    let  init = { method: 'GET',
        headers: hdrs,
        mode: 'cors',
        cache: 'default' };

    let req = new Request(urlData.server + urlData.base + urlData.data + jsonfilename, init);

    fetch(req) 
  	.then(function (response) {
	    return response.json();
	  })
	  .then(function (data) {
	    appendData(data);
	    console.log(data);
	  })
	  .catch(function (err) {
	    console.log(err);
	  });

    function appendData(data) {
      let mainContainer = document.getElementById(domObject);

      for (var i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        let link = document.createElement('a');
        link.innerHTML = 'Location_ID: ' + data[i].name;
        link.setAttribute('title', data[i].name);
		link.setAttribute('href', urlData.server + urlData.base + 'location_data.html?location_id=' + data[i].name);
        link.setAttribute('target', '_parent');
        div.appendChild(link);
        mainContainer.appendChild(div);
      }
    }
};
