# VS Corona Virus Banner
To embed the banner on your website simply include the minified CSS and JS files in your HTML:

```$html
<!-- In your <head> tag -->
<link rel="stylesheet" href="https://vscoronavirus.github.io/vscoronavirus.min.css">

<!-- Right before closing </body> tag -->
<script src="https://vscoronavirus.github.io/vscoronavirus.min.js"></script>
```

You can also take these files and host them on your end.

## Banner position

By default, banner will be fixed to the bottom of your page, overlaying any other content. The JS script will append a `<div id="vscoronavirus-banner">` element to the `<body>` element containing banner content.

### Customizing

You can choose a different position for the banner on your site by adding an empty `<div id="vscoronavirus-banner">` element to your page. The JS script will append banner content to it if it detect it when the page loads.

Feel free to edit `vscoronavirus.css` and host it on your end if you want to adjust the feel & look of the banner.