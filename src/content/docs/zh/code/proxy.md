---
title: Proxy
---
## Proxy

- You can set a proxy with a proxy option:

```java
    Map<String, Object> proxy_option = new HashMap<>();
    proxy_option.put("host", "127.0.0.1");
    proxy_option.put("port", 8080);
    Map<String, Object> option = new HashMap<>();
    option.put("proxy", proxy_option);
    Browser browser = new Browser(option);
```
