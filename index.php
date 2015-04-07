<!DOCTYPE html>
<html>
<head>
  <title></title>
</head>

  <meta http-equiv="content-type" content="text/html; charset=UTF-8">

    <h1>Job Application Form</h1><br><br>

  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href='css/main.css' rel='stylesheet'>

<body>
  <form class="form-horizontal" name="multiform" id="multiform" action="process.php" method="POST" enctype="multipart/form-data">
    
    <div class="form-group">
      <label for="firstname" class="col-sm-2 control-label">First Name:</label>
      <div class="col-sm-10">
        <input type="text" name="firstname" class="form-control" id="firstname" placeholder="First Name" /></br>
      </div>
    </div>

    <div class="form-group">
      <label for="lastname" class="col-sm-2 control-label">Last Name:</label>
        <div class="col-sm-10">
          <input type="text" name="lastname" class="form-control" id="lastname" placeholder="Last Name"/></br>
        </div>
    </div>

    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Email:</label>
        <div class="col-sm-10">
          <input type="text" name="email" class="form-control" id="email" placeholder="Email"/></br> 
        </div>
    </div>

     <div class="form-group">
      <label for="phonenumber" class="col-sm-2 control-label">Phone number:</label>
        <div class="col-sm-10">
          <input type="text" name="phonenumber" class="form-control" id="phonenumber" placeholder="Phone number"/></br> 
        </div>
    </div>

    <div class="form-group">
      <label for="message" class="col-sm-2 control-label">Message:</label>
        <div class="col-sm-10">
          <textarea rows="5" cols="40" val="" input type="text" name="message" class="form-control" id="message" placeholder="Message"></textarea>
        </div>
    </div>

    <div class="form-group">
      <label for="inputfile" class="col-sm-2 control-label">Resume:</label>
        <div class="col-sm-10">
          <input type="file" id="file" name="file">
        </div>
    </div>

 <div class="form-group">
      <label for="submit" class="col-sm-2 control-label"></label>
        <div class="col-sm-10">
          <br><input class="submit" type="submit" name="submit" id="multi-post" value="Submit">  
        </div>
  </div>

    
  </form>

 

    <br><br><div id="multi-msg"></div>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/my_script.js" type="text/javascript"></script>
</body>
</html>