async function fetchWithHeaders(url, headers) {
  try {
      const response = await fetch(url, {
          headers: headers
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;

  } catch (error) {
      console.error(error);
  }
}

module.exports = fetchWithHeaders;