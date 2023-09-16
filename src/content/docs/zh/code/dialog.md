---
title: Dialog
---
## Accept

- Accept dialog with given text or default prompt if applicable
- text `String`

## Dismiss

- Dismiss dialog

```java
        Browser browser = new Browser(option);
        browser.page.onDialog(dialog -> {
              if (dialog.match("this is a message ")) {
                     dialog.accept(null);
             } else {
                    dialog.dismiss();
                }
         });
        URL resource = Browser.class.getResource("/alert.html");
        browser.goTo(resource.toString());
        browser.atCss("body > p.a");
        browser.focus();
        browser.click("left");
```
