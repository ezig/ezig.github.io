---
layout: page
title: Contact
---

<p class="message">
  If you'd like to get in touch, shoot me a message!
</p>

<style>

label {
    width: 30%;
    /* positions the label text beside the input */
    text-align: right;
}

label + input{
    width: 30%;
    /* large margin-right to force the next element to the new-line
       and margin-left to create a gutter between the label and input */
    margin: 0 30% 0 15%;
}

 label + select  {
    width: 27%;
    /* large margin-right to force the next element to the new-line
       and margin-left to create a gutter between the label and input */
    margin: 0 30% 0 15%;
 }

input[type=submit] {
    border-radius: 5px;
    color: white;
    border: 0;
    width: 375px;
    height:40px;
    font-size: 16px;
    font-family: "PT Sans", Helvetica, Arial, sans-serif;    background: #6a9fb5;

    /* IE6-9 */
}</style>

<form accept-charset="UTF-8" action="http://formspree.io/ezrazigmond@gmail.com" method="POST">
<label>Name:</label><input type = "text" name="name" placeholder = "Your Name"><br>
<label>Email:</label><input type = "email" name = "email" placeholder = "Your Email"><br>
<label>Subject:</label>
<select name = "subject">
<option value = "Budget Buddy Support">Budget Buddy Support</option>
<option value = "Oteher Message"> Other Message </option>
</select><br>
<label>Message: </label><br>
<textarea name = "message" rows = 10 cols = 59></textarea> <br>
<input type="submit" id = "submit" value="Submit">
</form>
