<html>
<link href="main.css" rel="stylesheet">
<div class="topnav">
  <a class="active" href="https://tuckeryazdani.github.io/MyWebsite/">Home</a>
  <a href="about.html">About</a>
  <a href="projects.html">Projects</a>
  <a href="thesis.html">Thesis</a>
</div>
<div>
<a href="https://www.linkedin.com/in/tuckeryazdani/" target="_blank"><img src="https://user-images.githubusercontent.com/84822334/148589136-9acd742f-e004-4d54-b1b4-181f8bc7dc98.png" width="20" height="20" align="right" title="LinkedIn"></a>
<a href="https://github.com/tuckeryazdani/" target="_blank"><img src="https://user-images.githubusercontent.com/84822334/148658020-ae86cfb7-f259-4503-93fc-156a168d2a9d.png" width="20" height="20" align="right" title="GitHub"></a>
</div>
<p> Test is active. </p>
<head>
  <div align="left">
    <h1> Tucker Yazdani </h1>
    <h6> Graduate Research Assitant at Equifax </h6>
    <h6> M.S. Student in Computer Science </h6>
    <h6> B.S. Mathematics (Cocnentration in Statistics) </h6>
  </div>
</head>
<a href="https://user-images.githubusercontent.com/84822334/148321401-8be1b2c1-fa1b-4cbb-881f-ef801837c9c7.jpg" target="_blank" ><img src="https://user-images.githubusercontent.com/84822334/148321401-8be1b2c1-fa1b-4cbb-881f-ef801837c9c7.jpg" width="200" height="320" align="left"/></a>
<body>
  <h2> Personal Website </h2>
  <p> This is my personal website to showcase my knowledge of HTML/CSS and JavaScript. I am currently a M.S. Computer Science student at Kennesaw State University, and I work as a graduate research assitant for Equifax where I work in PySpark, SQL, and Scala. I plan to graduate from KSU in December 2022. Then I plan on continuing my education by pursuing a doctorate in computer science. </p>
  <p> Disclaimer: This is a work in progress. </p>
  <br>
  <h2> Information </h2>
  <p>
  Linedin Profile:    <a href="https://www.linkedin.com/in/tuckeryazdani/" target="_blank">LinkedIn</a><br>
  GitHub Profile:     <a href="https://github.com/tuckeryazdani" target="_blank">GitHub</a><br>
  LeetCode Profile:   <a href="https://leetcode.com/tuckeryazdani/" target="_blank">LeetCode</a><br>
  CodeCademy Profile: <a href="https://www.codecademy.com/profiles/tuckerY0098840537" target="_blank">CodeCademy</a><br>
  </p>
  <h2> Contact Information </h2>
  <p>
  Personal Email: tuckeryazdani@gmail.com<br>
  Student Email: tyazdani@students.kennesaw.edu<br>
  </p>
</body>
</html>
<script>
$(function(){
    $("#form").submit(function(e){
        // Create data object
        var data = {};
        data.name = $("#name").val();
        data.email = $("#email").val();
        data.comment = $("#comment").val();
        // The url of your server-side script that handles the post submission
        var url = "http://www.someurl.com/post_comment.php";
        $.POST(url, data)
        .done(function(response){
            // This code executes when the server returns a response
            // Do something with the response like adding the comment to the current list of comments
            // Example (if your response is HTML, better would be a JSON string):
            $("#comments").append(response);
        });
        e.preventDefault();
    });
});
</script>
<html>
 <form id="form" action="javascript:void('');">

        <label>Name
          <input id="name" type="string" name="name">
        </label><br>
        <label>Email
          <input id="email" type="string" name="email">
        </label><br>
        <label>Comment
         <textarea id="comment" name="comment"></textarea>
        </label>
        <input type="submit" value="Add Comment">
      </form>
</html>
