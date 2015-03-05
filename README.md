#Bootstrap without jQuery

## Introduction

A lightweight script to replace jQuery for simple interactions when using [Twitter Bootstrap](http://twitter.github.io/bootstrap/).

Bootstrap requires jQuery for some components such as dropdowns, alerts and the little "hamburger" icon that triggers a collapsible menu. While jQuery is an excellent cross-browser framework, it can be overkill if it's only used for displaying and hiding things. Of course, if a project already uses jQuery then there's no problem, but if not here's a script to replace jQuery and some of the Bootstrap plugin scripts. Using this should reduce download size and speed up loading time for your users.

## Coverage

### Bootstrap 2 and 3
- Collapsible elements (e.g. "hamburger" menu icon)
- Dismissable alert boxes
- Dropdown menus

## Demo

You can see the script in action in these simple demos:
-  [Bootstrap 3 demo](https://tagawa.github.io/bootstrap-without-jquery/bootstrap3/demo/)
-  [Bootstrap 2 demo](https://tagawa.github.io/bootstrap-without-jquery/bootstrap2/demo/)

## Dependencies

- [Twitter Bootstrap](http://getbootstrap.com/)
- JavaScript turned on - no other libraries required.

## Browser support

Bootstrap 2 version so far tested in the following browsers. (Bootstrap 3 testing is on the todo list)

### Works

- Android 2.3
- Android 4.1
- Chrome 26
- Firefox 20
- Firefox Mobile 20
- Internet Explorer 8, 9 & 10
- iOS 3
- Kindle 3
- Opera 12.15
- Opera Mini 7.5
- Opera Mobile 12.10

### Doesn't work

- Nintendo DS/DSi
- Nintendo Wii

### Notes

- Alert close is intermittent in Android 2.3
- In Chrome, `onblur` doesn't fire when attached to `button` elements. This affects the dropdown menus so please use `a` elements instead for these.

I'd really appreciate a quick comment on whether it works in your browser or not.

## License

Licensed under the MIT license.
