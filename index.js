const express = require('express');
const { google } = require('googleapis');

const app = express();
const port = 3000;

const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';
const GOOGLE_PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDN9wXOGGuNAB/1\nxNd0kSYmhHT+r2f9ocpWA9Yup7RbneJlSc6KntbVh9Nnhy1XxWmcOJukRq9+m5Sf\nrcMIZ5Br+tjoDHlTOx3KCZhPecKJ8zyUlCeCoJjLHynDT0Y+blbBw7i74ioFQDCl\n0abI3ZCZRixwwUI++YgL8lzivwer+gOlz/Kwx4j/txpOg5CcHaFzRhKN/ThdvIQ8\n0YNA7wqH7V44jKx5YHj6DpV8TrBqv8RxWc+Tl763IVB1NdR2VbvxE8nJDe89zv0W\nwOhaDJD0DO261V/v67Dq/eStN3RHEFjedHoFf/GJvSZrnNtmFshzNITiD0wDMbWj\nQFqekwvHAgMBAAECggEAEKTVo0H17v8DlijCAHl6S8KIccxa6vQYFbtZo4uJ1516\nnhTIzArp8Xd4bfVOhLk/P5CTg0LzC5gm+oBgMl2sHg23WYkohMFSNvFvjXyZa+xs\nCNWwG64+qqtqBI5zbrgb6qyWURiFrMbzJ3M5tyGwfbJeBP6ZC92+ULjVKL2nMQ5t\n9lE1dcBudH4H5zK/S2OjF72niUey+uet/t6UoM+kkg0WUTa1byG8KMGA4AIY7y75\nCYWM5ehIyhtRSUTOSbKI54+8oYUt2UahwI0Oc2PeP3FutKs1lzutQOJ2L8uJ0hTP\n3y5PB4tjx9UoXgssyvC/KWP4vB7kFrowxQK0Tj3sgQKBgQDwbHT52XDDHiuQHSDi\n+LWls9ONNwd/GwZEnqhANBpkCR4bWiqOjfXPz2sHHAn4QjA7V/i9GZJTs3zYERzb\nnRtiZNSWIhS/4RjaVNY/1NZE8xarGQqrwV6Qg6CYW232WdPJPKcOgnxskNVajfJ8\nauRzV5jipqqIkyndd8/3U4pKLQKBgQDbTw0PtQYic+PiG/0MFbrP4vz/NDF1EwS0\n3DMlsJaEYhz4s/1AcN7miFW/zS0VrfqkiAuvswDXLTVSRaPSQA1ds0X1t+anUOTH\n670TOtoudDdRCC00c1LnVlz00Isna15/MoTOOc8nO8KprlDnlHOVlafn1bUwN6eU\nJdtxKzdqQwKBgQDHaN144Y2yeBKfvFkriCd5YXaEuPDBztNbFNDuN4jwEdPj0dxc\nUohgLWRTCEGIpLVGc0e+6DfCrqtMtpzd1igBayobv/a/015+sEDnvotdstXJYcLF\nBGR/rn0EAUlqO8T6MxFIapfyoAolyngmE66ZsD0BOEVXc+AUbayTMboQnQKBgE8Y\nD4neq7u5ODLQDU9SdvGK19viowOqPERONlQdf+t2xyQbJfcbvgg+m051XRE4kfDM\n8AoJ8P+p2lU1sIOffjKQ+WZJUPJ/BkPkDWjmDNI8L8cVv9fuz7OHPjc9DzLEUmxl\nd+g4iTGJKAeySpN6wsTsGIZQWOxu5g1UKfSCtZWpAoGBALzxQulfmNPndUmbsfdv\n5tWh5EYVO53y4i0Z5tfbsoBSPLh6RJvBZK2xuwR9USdGSQsjD/RQxrrfFkIs/kDc\nEaGCbhOgPc7R+7N5AHz04WHABhu/ZBc2ac7/coU4PtJ4YUgmsMO6QssehmHJMVcH\n6HqA6Y9yp/6jVutj6RKbeH54\n-----END PRIVATE KEY-----\n";
const GOOGLE_CLIENT_EMAIL = "ckellison@scheduler-v0.iam.gserviceaccount.com"
const GOOGLE_PROJECT_NUMBER = "273745549819"
const GOOGLE_CALENDAR_ID = "ckellison64@gmail.com"

app.get('/', (req, res) => {
  const jwtClient = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    SCOPES
  );

  const calendar = google.calendar({
    version: 'v3',
    project: GOOGLE_PROJECT_NUMBER,
    auth: jwtClient
  });
  /* 
  calendar.events.list({
    calendarId: GOOGLE_CALENDAR_ID,
    timeMin: (new Date()).toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  }, (error, result) => {
    if (error) {
      res.send(JSON.stringify({ error: error }));
    } else {
      if (result.data.items.length) {
        res.send(JSON.stringify({ events: result.data.items }));
      } else {
        res.send(JSON.stringify({ message: 'No upcoming events found.' }));
      }
    }
  });*/
  res.sendFile("C:/Users/cke64/Documents/Scheduler/index.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


function getDateArray() {
  var dateArray = [5];
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var day = days[now.getDay()];
  var month = months[now.getMonth()];

  if (day == 0) {

  }
  else if (day == 1) {

  }
  else if (day == 2) {

  }
  else if (day == 3) {

  }
  else if (day == 4) {

  }
  else if (day == 5) {

  }
  else if (day == 6) {

  }
}

