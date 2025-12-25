# EmailJS Setup Guide (5 Minutes)

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (top right)
3. Sign up with your Google account (dollybisht408@gmail.com)

## Step 2: Add Email Service
1. After login, click "Add New Service"
2. Select "Gmail"
3. Click "Connect Account"
4. Allow EmailJS to send emails via your Gmail
5. **Copy the Service ID** (looks like: service_xxxxxx)

## Step 3: Create Email Template
1. Click "Email Templates" in sidebar
2. Click "Create New Template"
3. Use this template content:

**Template Name:** Contact Form Message

**Subject:** New Contact from {{from_name}} - {{subject}}

**Content:**
```
You have a new message from your portfolio contact form!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent via Portfolio Contact Form
```

4. Click "Save"
5. **Copy the Template ID** (looks like: template_xxxxxx)

## Step 4: Get Public Key
1. Click "Account" in sidebar
2. Find "API Keys" section
3. **Copy your Public Key** (looks like: xxxxxxxxxxxxxxxxxx)

## Step 5: Update Your Website
Open `script-new.js` and find line 239-242, replace with YOUR credentials:

```javascript
this.emailConfig = {
    publicKey: 'YOUR_PUBLIC_KEY_HERE',
    serviceID: 'YOUR_SERVICE_ID_HERE',
    templateID: 'YOUR_TEMPLATE_ID_HERE'
};
```

## Step 6: Deploy
```bash
git add script-new.js
git commit -m "Update EmailJS credentials"
git push origin main
```

Wait 2 minutes for Netlify to deploy, then test your form!

## Troubleshooting
- **"Account not found"** = Wrong Public Key
- **"Service not found"** = Wrong Service ID
- **"Template not found"** = Wrong Template ID
- **"Failed to send"** = Gmail not connected properly

## Free Tier Limits
- 200 emails/month (FREE forever)
- Perfect for portfolio contact forms!
