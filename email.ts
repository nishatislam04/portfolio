export const emailMarkup = (userName: string, email: string, phone: string, service: string, message: string) => `
<!DOCTYPE html>
<html>
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <style>
      /* Include basic resets */
      body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
      }
      .container {
        max-width: 600px;
        margin: 20px auto;
        background-color: #ffffff;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .header {
        background-color: #4f46e5;
        color: #ffffff;
        text-align: center;
        padding: 20px;
        font-size: 24px;
        font-weight: bold;
      }

      .message{
        line-height: 2;
        font-size: 15px;
        font-family: "Roboto", serif;
        font-weight: 400;
        font-style: normal;
        background-color: #dfdfdf69;
        padding: 20px;
        border-radius: 10px;
      }

      .content {
        padding: 20px;
        line-height: 1.6;
        color: #333333;
      }
      .footer {
        background-color: #f9fafb;
        text-align: center;
        padding: 10px;
        font-size: 14px;
        color: #6b7280;
      }
      .btn {
        display: inline-block;
        padding: 10px 20px;
        margin-top: 20px;
        background-color: #4f46e5;
        color: #ffffff;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
      }

      .btn-action{
        color: white;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        New Message from my Portfolio
      </div>
      <div class="content">
        <h3>Hello,</h3>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p class="message">${message}</p>
        <a href="mailto:john.doe@example.com" class="btn btn-action">Reply to Email</a>
      </div>
      <div class="footer">
        &copy; 2025 My Portfolio. All rights reserved.
      </div>
    </div>
  </body>
</html>`;
