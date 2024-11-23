fetch("http://localhost:3001/user/dangnhap", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,vi;q=0.8",
      "cache-control": "no-cache",
      "content-type": "application/json",
      "pragma": "no-cache",
      "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "Referer": "http://localhost:8081/",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": "{\"email\":\"a1@gmail.com\",\"password\":\"123123\",\"role\":\"KH\"}",
    "method": "POST"
  });