# Complete EmailJS Setup Guide - Dual Email System
## User Auto-Reply + Owner Notification

---

## 🎯 What You'll Get
1. **User receives**: Auto-reply confirmation email
2. **You receive**: Notification with their message details

---

## 📋 Step 1: Create EmailJS Account (2 min)

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (top right)
3. Choose **"Sign up with Google"**
4. Use your Gmail: **dollybisht408@gmail.com**
5. Verify your email if prompted

---

## 📧 Step 2: Connect Gmail Service (3 min)

1. In EmailJS Dashboard, click **"Email Services"** (left sidebar)
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Select your Gmail account (dollybisht408@gmail.com)
6. Click **"Allow"** to grant permissions
7. **COPY the Service ID** (looks like: `service_abc1234`)
   - Save it somewhere - you'll need it later!

---

## 📝 Step 3: Create Template #1 - Notification to YOU (5 min)

1. Click **"Email Templates"** (left sidebar)
2. Click **"Create New Template"**
3. **Template Name**: `Portfolio Contact Notification`
4. Fill in these fields:

### To Email:
```
dollybisht408@gmail.com
```

### From Name:
```
{{from_name}}
```

### From Email:
```
{{from_email}}
```

### Subject:
```
🔔 New Portfolio Contact from {{from_name}}
```

### Message Body (HTML):
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
  </div>
  
  <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Contact Details</h2>
    
    <p style="margin: 20px 0;">
      <strong style="color: #667eea;">Name:</strong><br>
      <span style="font-size: 16px;">{{from_name}}</span>
    </p>
    
    <p style="margin: 20px 0;">
      <strong style="color: #667eea;">Email:</strong><br>
      <a href="mailto:{{from_email}}" style="color: #764ba2; text-decoration: none;">{{from_email}}</a>
    </p>
    
    <p style="margin: 20px 0;">
      <strong style="color: #667eea;">Subject:</strong><br>
      <span style="font-size: 16px;">{{subject}}</span>
    </p>
    
    <div style="margin: 20px 0;">
      <strong style="color: #667eea;">Message:</strong>
      <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #667eea; margin-top: 10px; border-radius: 4px;">
        {{message}}
      </div>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
    
    <p style="color: #888; font-size: 14px; text-align: center;">
      Sent from your portfolio contact form<br>
      <a href="https://portfiolo122.netlify.app" style="color: #667eea;">portfiolo122.netlify.app</a>
    </p>
  </div>
</div>
```

5. Click **"Save"**
6. **COPY the Template ID** (looks like: `template_xyz5678`)

---

## 📝 Step 4: Create Template #2 - Auto-Reply to USER (5 min)

1. Click **"Create New Template"** again
2. **Template Name**: `Portfolio Contact Auto-Reply`
3. Fill in these fields:

### To Email:
```
{{from_email}}
```

### From Name:
```
Dolly Bisht
```

### Reply To:
```
dollybisht408@gmail.com
```

### Subject:
```
Thanks for contacting me, {{from_name}}! ✨
```

### Message Body (HTML):
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0;">
    <h1 style="color: white; margin: 0;">Thank You for Reaching Out! 🙏</h1>
  </div>
  
  <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <p style="font-size: 16px; color: #333; line-height: 1.6;">
      Hi <strong>{{from_name}}</strong>,
    </p>
    
    <p style="font-size: 16px; color: #333; line-height: 1.6;">
      Thank you for contacting me through my portfolio! I've received your message and I'm excited to connect with you.
    </p>
    
    <div style="background: #f0f4ff; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #667eea;">
      <p style="margin: 0; color: #555; font-size: 15px;">
        <strong style="color: #667eea;">Your Message Summary:</strong><br><br>
        <strong>Subject:</strong> {{subject}}<br>
        <strong>Message:</strong> {{message}}
      </p>
    </div>
    
    <p style="font-size: 16px; color: #333; line-height: 1.6;">
      I typically respond within <strong>24-48 hours</strong>. I'll review your message carefully and get back to you as soon as possible.
    </p>
    
    <p style="font-size: 16px; color: #333; line-height: 1.6;">
      In the meantime, feel free to:
    </p>
    
    <ul style="color: #555; line-height: 1.8;">
      <li>Check out my <a href="https://portfiolo122.netlify.app" style="color: #667eea; text-decoration: none;">portfolio projects</a></li>
      <li>Connect with me on <a href="https://linkedin.com/in/dollybisht" style="color: #667eea; text-decoration: none;">LinkedIn</a></li>
      <li>View my code on <a href="https://github.com/dollybisht24" style="color: #667eea; text-decoration: none;">GitHub</a></li>
    </ul>
    
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px; margin: 30px 0; text-align: center;">
      <p style="margin: 0; font-size: 15px;">
        Looking forward to connecting with you!<br>
        <strong style="font-size: 18px;">Dolly Bisht</strong>
      </p>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;">
    
    <p style="color: #888; font-size: 13px; text-align: center; line-height: 1.5;">
      This is an automated confirmation email.<br>
      Please do not reply to this email. I'll respond to you directly at <strong>{{from_email}}</strong><br><br>
      Dolly Bisht | Frontend Developer<br>
      <a href="mailto:dollybisht408@gmail.com" style="color: #667eea;">dollybisht408@gmail.com</a>
    </p>
  </div>
</div>
```

4. Click **"Save"**
5. **COPY this Template ID too** (looks like: `template_abc9999`)

---

## 🔑 Step 5: Get Your Public Key (1 min)

1. Click **"Account"** (left sidebar)
2. Scroll to **"API Keys"** section
3. **COPY your Public Key** (looks like: `xYz9AbC123dEf456`)

---

## ✅ Step 6: Summary - You Should Have These 4 Items:

```
✓ Public Key:      xYz9AbC123dEf456
✓ Service ID:      service_abc1234
✓ Template ID #1:  template_xyz5678  (Notification to you)
✓ Template ID #2:  template_abc9999  (Auto-reply to user)
```

---

## 🚀 Step 7: Update Your Code

**Reply to me with these 4 values in this format:**

```
Public Key: [paste here]
Service ID: [paste here]
Notification Template ID: [paste here]
Auto-Reply Template ID: [paste here]
```

**I'll update the code automatically and deploy it!**

---

## 🎉 What Happens After Setup

### When someone fills your contact form:

1. ✅ User submits form on your portfolio
2. 📧 **Email #1**: User receives professional auto-reply
3. 📧 **Email #2**: You receive notification with their details
4. ✨ Form shows success message and clears
5. 🎯 You can reply directly to the user's email

---

## 🆓 Free Tier Limits

- **200 emails/month** (FREE forever)
- **100 emails/day**
- Perfect for portfolio contact forms!

---

## 🐛 Troubleshooting

| Error | Solution |
|-------|----------|
| "Account not found" | Wrong Public Key |
| "Service not found" | Wrong Service ID |
| "Template not found" | Wrong Template ID |
| No emails arriving | Check Gmail spam folder |
| Emails go to spam | Add "noreply@emailjs.com" to contacts |

---

## 📞 Ready to Go!

Once you provide your 4 credentials, I'll:
1. ✅ Update the JavaScript code
2. ✅ Configure dual email system
3. ✅ Deploy to Netlify
4. ✅ Test the form for you

**Just paste your credentials and I'll handle everything!** 🚀
