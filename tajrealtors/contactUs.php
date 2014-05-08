<html>
    <head>
        <title>Taj Realtors | Contact Us</title>
        <link rel="stylesheet" href="static/css/layout.css" />
        <link rel="stylesheet" href="static/css/contactUs.css" />
        <script src="static/js/jquery.js"></script>
        <script src="static/js/layout.js"></script>
    </head>
    <body>
        <?php
            include_once("views/layout.html");
        ?>
        <div class="mainText">
            <form id="contactForm">
                <span>Your Name (required)</span><br>
                <input type="text" size="24" id="name"/><br><br>
                <span>Your E-mail (required)</span><br>
                <input type="text" size="24" id="email"/><br><br>
                <span>Subject</span><br>
                <input type="text" size="24" id="subject"/><br><br>
                <span>Message</span><br>
                <textarea id="message" rows=6 cols=40></textarea><br><br>
                <button id="send">Send</button>
            </form>
        </div>
    </body>
</html>