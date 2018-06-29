<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <title>famon</title>
  <link rel="stylesheet" href="css/app.css"/>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <script type="text/javascript">
    window.Laravel = window.Laravel || {};
    window.Laravel.csrfToken = "{{csrf_token()}}";
  </script>
</head>
<body>
  <div id="app"></div>
  <script src="js/app.js"></script>
</body>
</html>