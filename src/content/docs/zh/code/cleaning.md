---
title: Cleaning Up
---

## Reset

Closes browser tabs opened by the `Browser` instance.

```java
   Map<String, Object> option = new HashMap<>();
   option.put("headless", false);
   option.put("port", 9998);
   option.put("host","127.0.0.1");
   option.put("timeout", 1000);
   option.put("process_timeout",1000);
   Browser browser = new Browser(option);
   browser.goTo("https://google.com/");
   browser.reset();
   browser.close();
```
