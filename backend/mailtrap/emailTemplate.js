export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      line-height: 1.8;
      color: #f0b5b5;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(164,21,21,1) 83%, rgba(252,176,69,1) 100%);
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      color: #fff;
      margin: 0;
      font-size: 24px;
    }
    .content {
      background-color: #fff;
      padding: 20px;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .verification-code {
      font-size: 36px;
      font-weight: bold;
      letter-spacing: 5px;
      color: #ac5ee0;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #999;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Verify Your Email</h1>
  </div>
  <div class="content">
    <p>Hello,</p>
    <p>Thank you for signing up! Your verification code is:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span class="verification-code">{verificationCode}</span>
    </div>
    <p>Enter this code on the verification page to complete your registration.</p>
    <p>This code will expire in 15 minutes for security reasons.</p>
    <p>If you didn't create an account with us, please ignore this email.</p>
    <p>Best regards,<br>MK App Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      line-height: 1.8;
      color: #f0b5b5;;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(164,21,21,1) 83%, rgba(252,176,69,1) 100%);
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      color: #fff;
      margin: 0;
      font-size: 24px;
    }
    .content {
      background-color: #fff;
      padding: 20px;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .success-icon {
      background-color: #8BC34A;
      color: #ac5ee0;
      width: 50px;
      height: 50px;
      line-height: 50px;
      border-radius: 50%;
      display: inline-block;
      font-size: 30px;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #999;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Password Reset Successful</h1>
  </div>
  <div class="content">
    <p>Hello,</p>
    <p>We're writing to confirm that your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div class="success-icon"> ✓ </div>
    </div>
    <p>If you did not initiate this password reset, please contact our support team immediately.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Use a strong, unique password</li>
      <li>Enable two-factor authentication if available</li>
      <li>Avoid using the same password across multiple sites</li>
    </ul>
    <p>Thank you for helping us keep your account secure.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>

`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      line-height: 1.8;
      color: #666;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(164,21,21,1) 83%, rgba(252,176,69,1) 100%);
      padding: 20px;
      text-align: center;
    }
    .header h1 {
      color: #fff;
      margin: 0;
      font-size: 24px;
    }
    .content {
      background-color: #fff;
      padding: 20px;
      border-radius: 0 0 5px 5px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    .reset-button {
      background-color: #8BC34A;
      color: #ac5ee0;;
      padding: 12px 20px;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
      display: inline-block;
      margin: 30px 0;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      color: #999;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>Password Reset</h1>
  </div>
  <div class="content">
    <p>Hello,</p>
    <p>We received a request to reset your password. If you didn't make this request, please ignore this email.</p>
    <p>To reset your password, click the button below:</p>
    <div style="text-align: center;">
      <a href="{resetURL}" class="reset-button">Reset Password</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div class="footer">
    <p>This is an automated message, please do not reply to this email.</p>
  </div>
</body>
</html>

`;