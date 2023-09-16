---
title: Introduction
---

You can customize options with the following code in your test setup:

## Example


```java
   Map<String, Object> option = new HashMap<>();
   option.put("headless", false);
   option.put("port", 9998);
   option.put("host","127.0.0.1");
   option.put("timeout", 1000);
   option.put("process_timeout",1000);
   Browser browser = new Browser(option);
```

## Options

<Icon name="rocket" />

- headless(Boolean) - Set browser as headless or not, true by default.
- port (Integer) - Remote debugging port for headless Chrome.0 by default.
- host (String) - Remote debugging address for headless Chrome.127.0.0.1 by default.
- window_size (Array) - The dimensions of the browser window in which to test, expressed as a 2-element array, e.g. [1024, 768].[1024, 768] by default.
- timeout (Integer) - The number of seconds we'll wait for a response when communicating with browser.5000ms by default.
- process_timeout (Integer) - How long to wait for the Chrome process to respond on startup.1000ms by default.
