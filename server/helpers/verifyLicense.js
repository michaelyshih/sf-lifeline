"use strict"

const EMS_VERIFICATION_CONSTANTS = {
  WEBSITE: "https://emsverification.emsa.ca.gov/Verification/Search.aspx",
  VIEWSTATE: "/wEPDwUJNzM2NTgwNzkyD2QWAgIBD2QWAmYPZBYCAgEPZBYCAgEPZBYCAgEPZBYGAgMPZBYCAgEPZBYCZg8QZGQWAWZkAgQPZBYCAgEPZBYCZg8QZGQWAWZkAgoPZBYCAgEPZBYCZg8QZGQWAWZkZOPA819c1SnM+HDfV9ANb280uL/25SvJ4MzWuRfO72pi",
  VIEWSTATEGENERATOR: "85FE3531",
  EVENTVALIDATION: "/wEdAGfZSxxij+TdpoEgDD0DiLPjjy2ngDzgA2SYENL8cE218WSJwzvf/f8RGMUb1EXE/fVF+JNRdlehFeGsHxBInlU61AIUzdMPlD4/kX4IKYnt+D9O4Hvf6KWMuZPzLxSB7QqfDUzJE/3jKyLsTofI21GgMNDEoylHkEUJXRO0mzGtQzMC7OFJNK20maW82PC2uY9lDhftt4I+RAyT37NbCGcv+SZXeDwIgQGMGgFr43EUrSvMcVivNIh2Fq6/opalWntVTp7vI0DC5JzNilmvM7rfTl3LgdFPVXkkP026aWTJph3FhvxYPpKsgjiznhr4ofXIf3DiJB4FIv+KTwsWfi1J+anPF/quv/ip0W+Hfi17M8OfigV+qj349a2cvHQRqAHsGa5ZqawVWZOswasGWi+ZXaJ4hA0rgAyidMTPiBA+4z6Myd86hqUvEjzYUDVSaRQ2vzV0joD9tbBT5qYfsA/My8pvXcuJd5U7D6DzXu4c0sQnP2Po9eNlSxLiOqiQYREzqCtGmpdG52kQ1pORp1ucjx2fNeRqb0JFehGLYvRWTKghWiRPmdWPBLxJktTnYq7XEXX41dYsSuBO3bHwXUoo4tNcU3rz2+auvScBJniIg+wjFLkguzLXY2QW6NndmqUQP8GuwU1erxh8pqShUJziMWvujdLfBwR1MiaH2Pw2m1jqMkwrG+hsNplrexJcWmHiwTQn1XSVLw5vBkC2LKPMkYsmIfIUgphSOIaPv0aoXNfy2fp35RpRBXS0IgQnk2rj2uv8UBiwxYtJOqmnZrzvM4wpxN08BdSiwvtNK2/pqaJxLoa02kTl3GR/SnsNHqq9kMlN0cEVkWSGXLIj6n54DS7op2BJtvoxEn3u/Rj2JhrvnlVEVo8zg+To4j3gDsZAGsxTI/Rh1vyA6AabD26dmwyXGTKPlStsIQV/x+cULtcfcZlGKTovH0ArfoWEixVgIvaQVN8fUZxm71Rwn09gNB80PUBnaxMpUBRiF5G1Bjz4c8wEo1ADUXEm5IyZVCVGOBmKERuA/uVaXz/gts1DE1nXGua+6p5XakaoKe5+0g6j0ox1PET1gNR3CbZaePxxZm3nZ88+vfliaIqEgWEykpNWx75a1ezjc03Ft+IzPaCtr4yvCrTI+mvbosBiXQVEhFQ2RnfJ37LrswZsClndbIdjHZH+BzDgRxhWxHLbXMvHhLtKjKVpiYF52+l5gYIA7Fm4zef5fnvLsJ2HZowD4IGgmxz6qzYsFtQkJkkHnJ0wP5zjTqipmAKjsg6Cb28ULfK3p1ydT12w83RzOHU6zNZ6l9vzlPOI+htWRMsaKCbCAZKySratVomxl9JjR8FzacjDG08UIwTg+oOmeuigHzusNJasJCM3hMo9AkDJhxB07djoP8VqQynEVR764YR7VgIVSgOC9+VRq2SFez7XsfipmhoyhtL5dawY/g+p5qXqwGWa3VAuwt0f8BML8HacRP1TMYkbCK6VSwtPLgndeSAUXHCGI/9oLnnV0SZMMaqAlv20ChK8xvTnKbOxhCye4D1x0BXxjA/bS/msGqqZ+lrsuvnyxtPjV0brURzsv/m8dz5KagE0CN3kjPHc4IfVswH/uV9EqX7ym96K6hFmcXq5QO7hSoR27i/3Ago6eI/yCnEZ0L/L2ag6sWTX0YOhHi2QFtM42cRz6Ja0+KIsI0lZ+IBENdDGEdmJYJtwRIxBFVweMGrvNQmR//3cyAn4ecymoEksV4WANoLAp5g/izcpAA74XwIaAGgNreXl1GhgEwiBSf0uUzAiXeWtm/qcxHCFscFfi+RAUulMRIYcJCoTaz+5WZHvGYtRnXyB3+9xOt0EuqbxWQw/95f5WOqiF+IE1A/aZ+zYh/kusLQThShUNdaZXIxJW1Zl0KyWYQqDzgUYYUCuyAx8UyhSK43Hg7rtY4XVlbInCwwzNlviERUN85ba5MWx9zRYYN+9rOhximkt0FCrkHrPySL1nn1lnRqLL1qbVNQLLRYfoOLrk+vdvZPGofJXK0i25ifJN1Q+OlJzqBuszVVvoSrRltUvieOkgVAaAZaH/VPTE92YgqkGaokh0uslMvHgpgx8D8cO0HMTqEjyS/m1YAlaFKTnQc+A8S4zFmYuRdDqIEpI+ASdxUwQ9Vdq2RLaBkXn7g70IjUW5jmSeFFFgdsIAbJmdMpKnFiDikb9LuNH/9sJRqLNRcRoadE3UKEG4TSeD2d/xfZgTRHvbeRTDEBgwNI=",
  BUTTON: "Search"
};

/**
 * Search for an EMS personnel on California's EMS Verification website
 * 
 * @param {string} license - an EMS personnel's license
 * @returns {object} EMS personnel information which includes name, licenseType, status, and licenseNumber
 * @throws An error if the EMS verification website has issues or if there is no match for the licesnse
 */
export default async function verifyLicense(license) {
  const formData = new FormData()
  formData.append("t_web_lookup__license_no", license);
  formData.append("__VIEWSTATE", EMS_VERIFICATION_CONSTANTS.VIEWSTATE);
  formData.append("__VIEWSTATEGENERATOR", EMS_VERIFICATION_CONSTANTS.VIEWSTATEGENERATOR);
  formData.append("__EVENTVALIDATION", EMS_VERIFICATION_CONSTANTS.EVENTVALIDATION);
  formData.append("sch_button", EMS_VERIFICATION_CONSTANTS.BUTTON);

  let sessionCookie = undefined;

  try {
    const response = await fetch(EMS_VERIFICATION_CONSTANTS.WEBSITE, {
      method: "GET"
    });
    sessionCookie = response.headers.get("set-cookie").split(";")[0]
  } catch (e) {
    console.error(e);
    throw new Error("Unable to get session cookie, try again later.");
  }

  if (sessionCookie) {
    try {
      const response = await fetch(EMS_VERIFICATION_CONSTANTS.WEBSITE, {
        method: "POST",
        body: formData,
        headers: {
          cookie: sessionCookie // Need a valid session cookie to search EMS website
        }
      });
      const html = await response.text(); // Need to await converting the fetch response into HTML

      const regex = /<a[^>]*?>(.*?)<\/a><\/td><td><span>(.*?)<\/span><\/td><td><span>(.*?)<\/span><\/td><td><span>(.*?)<\/span>/;
      const match = html.match(regex); // Use the regex pattern to extract the first table row from the HTML

      if (match) {
        const [, name, licenseType, status, licenseNumber] = match;
        const emsPersonnelInfo = { name, licenseType, status, licenseNumber };

        return emsPersonnelInfo;
      } else {
        throw new Error("No match.");
      }
    } catch (e) {
      console.error(e);
      throw new Error("Unable to access verification results, try again later.");
    }
  }
};