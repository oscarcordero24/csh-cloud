function getUrlParameter(sParam) {
    let url = new URL(window.location);
    let test = url.searchParams.get(sParam);
    console.log("getUrlParameter(" + sParam + ") = " + test);
    return test;
};