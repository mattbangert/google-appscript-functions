/**
 * Builds a complete URL from a base URL, API endpoint, and a map of URL parameters.
 * @param baseUrl
 * @param endpoint
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
  let url = baseUrl + "/" + endpoint;
  return url + (url.indexOf("?") >= 0 ? "&" : "?") + paramString;
}
