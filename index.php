<!doctype html>
<html lang="en">
<head>
<!-- Meta For character encoding -->
<meta charset="utf-8">
<!-- Meta For Chrome Frame -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<!--  Meta For Description -->
<meta name="description" content="">
<!--  Meta For Responsive -->
<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>Ajax Form Submission</title>

<!--Simple Files-->
<link rel="stylesheet" href="css/main.css"/>
</head>
<body>

 <div id="measurements">
      <p>Enter measurements below to determine the total volume.</p>
      <form id="measurement-form" action="process_measurements.php" method="POST">
        Length: <input type="text" name="length" /><br />
        <br />
        Width: <input type="text" name="width" /><br />
        <br />
        Height: <input type="text" name="height" /><br />
        <br />
        <input id="html-submit" type="submit" value="Submit" />
        <input id="ajax-submit" type="button" value="Ajax Submit" />
      </form>
    </div>

    <div id="result">
      <p>The total volume is: <span id="volume"></span></p>
    </div>







<!-- Simple JavaScript Files -->
<script src="js/simple.js"></script>
</body>
</html>
