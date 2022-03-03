/**
 * Builds a complete URL from a base URL, API endpoint, and a map of URL parameters.
 * @param {string} url The base URL.
 * @param {Object.<string, string>} params The URL parameters and values.
 * @return {string} The complete URL.
 * @private
 */
function buildUrl_(baseUrl, endpoint, params) {
  var paramString = Object.keys(params)
    .map(function (key) {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
  var url = baseUrl + "/" + endpoint;
  return url + (url.indexOf("?") >= 0 ? "&" : "?") + paramString;
}
