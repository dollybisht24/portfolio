# EmailJS Setup Guide - Complete Instructions

## 📧 How to Connect Contact Form to Your Gmail

Follow these steps carefully to receive form submissions directly to your Gmail inbox:

---

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up Free"**
3. Sign up using your Gmail account (or any email)
4. Verify your email address

---

## Step 2: Add Email Service (Gmail)

1. After login, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Select **"Gmail"** from the list
4. Click **"Connect Account"**
5. Sign in with your Gmail account
6. Allow EmailJS to send emails on your behalf
7. You'll see a **Service ID** (e.g., `service_abc123`) - **COPY THIS!**

---

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template configuration:

**Template Name:** `Portfolio Contact Form`

**Subject:** `New Message from {{from_name}} - {{subject}}`

**Content (Email Body):**
```
You have a new message from your portfolio website!

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply directly to {{from_email}} to respond.
```

4. **Set "To Email"** to your Gmail address (where you want to receive messages)
5. Click **"Save"**
6. You'll see a **Template ID** (e.g., `template_xyz789`) - **COPY THIS!**

---

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the EmailJS dashboard
2. Find **"Public Key"** section
3. Copy your **Public Key** (e.g., `user_AbCdEfGhIjKlMnOp`)

---

## Step 5: Update Your Code

Open `script-new.js` and replace these 3 values:

### Line 234 - Replace Public Key:
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
```
Example:
```javascript
emailjs.init("user_AbCdEfGhIjKlMnOp");
```

### Line 299-300 - Replace Service ID and Template ID:
```javascript
const response = await emailjs.sendForm(
    'YOUR_SERVICE_ID',     // Replace with your EmailJS service ID
    'YOUR_TEMPLATE_ID',    // Replace with your EmailJS template ID
    this.form
);
```
Example:
```javascript
const response = await emailjs.sendForm(
    'service_abc123',      // Your Gmail service ID
    'template_xyz789',     // Your template ID
    this.form
);
```

---

## Step 6: Save & Deploy

1. Save the `script-new.js` file
2. Commit and push to GitHub:
```bash
git add script-new.js
git commit -m "Configure EmailJS for contact form"
git push origin main
```

3. Netlify will automatically deploy your changes

---

## Step 7: Test Your Form

1. Go to your live website: https://portfiolo122.netlify.app/
2. Scroll to the **Contact** section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test message

4. Click **"Send Message"**
5. You should see: **"Message sent successfully!"**
6. Check your Gmail inbox - you should receive the email within seconds!

---

## 🎯 Features Included

✅ **Form Validation:**
- All fields are required
- Email format validation
- Minimum length validation for each field
- Real-time error messages

✅ **User Feedback:**
- Success message after sending
- Error message if sending fails
- Loading state with spinner animation
- Form resets after successful submission

✅ **Professional UI:**
- Clean error messages below each field
- Green border for valid fields
- Red border for invalid fields
- Smooth animations

✅ **Production Ready:**
- Works on localhost and live sites
- No backend server needed
- Free tier: 200 emails/month
- Reliable delivery through Gmail

---

## 🔥 Free Tier Limits

EmailJS Free Plan:
- ✅ 200 emails per month
- ✅ Unlimited templates
- ✅ Gmail/Outlook/Yahoo support
- ✅ Email delivery tracking
- ✅ Spam protection

For more emails, upgrade to EmailJS paid plans.

---

## 🛠️ Troubleshooting

**Problem:** Form shows "Failed to send message"
- ✓ Check if you replaced all 3 IDs (Public Key, Service ID, Template ID)
- ✓ Make sure Service ID and Template ID are correct
- ✓ Verify Gmail service is connected in EmailJS dashboard

**Problem:** Not receiving emails
- ✓ Check Gmail spam folder
- ✓ Verify "To Email" in template is your Gmail address
- ✓ Check EmailJS dashboard → "Email Logs" to see delivery status

**Problem:** "Invalid public key" error
- ✓ Make sure you copied the correct public key from Account settings
- ✓ Remove any extra spaces or quotes

---

## 📊 Monitor Form Submissions

View all form submissions in EmailJS dashboard:
1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Click **"Email Logs"**
3. See all sent emails, delivery status, and timestamps

---

## 🎉 Done!

Your contact form is now fully functional and will deliver messages directly to your Gmail inbox!

**Need help?** Email me or check EmailJS documentation: https://www.emailjs.com/docs/
