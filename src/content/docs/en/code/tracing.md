---
title: Tracing
---
- You can use tracing.record to create a trace file which can be opened in Chrome DevTools or timeline viewer.

```java
     browser.page.tracing.record("trace.json");
     browser.goTo("https://google.com/");
```

- tracing.record(\*\*options) : String

- Accepts block, records trace and by default returns trace data from Tracing.tracingComplete event as output. When path is specified returns true and stores trace data into file.

- options Hash
- :path String save data on the disk, nil by default
- :encoding Symbol :base64 | :binary encode output as Base64 or plain text. :binary by default
- :trace_config Hash<String, Object> config for trace, for categories see getCategories, only one trace config can be active at a time per browser.
