import express from 'express';
import nodemailer from 'nodemailer';
const router = express.Router();

// POST /api/book
router.post('/book', async (req, res) => {
  const { name, email, phone, package: packageName } = req.body;

  // Set up transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, 
      pass: process.env.GMAIL_PASS 
    }
  });

  // Email content
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New Booking: ${packageName}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nPackage: ${packageName}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error('Error sending booking email:', err);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

// POST /api/book-housewarming
router.post('/book-housewarming', async (req, res) => {
  const { name, email, phone, package: packageName, housewarmingDetails } = req.body;

  // Set up transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

  // Format housewarming details as pretty JSON
  let detailsString = '';
  if (housewarmingDetails && typeof housewarmingDetails === 'object') {
    detailsString = JSON.stringify(housewarmingDetails, null, 2);
  }

  // Email content
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `New Housewarming Booking: ${packageName}`,
    text:
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Package: ${packageName}\n` +
      `\n--- Housewarming Details ---\n${detailsString}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true });
  } catch (err) {
    console.error('Error sending housewarming booking email:', err);
    res.status(500).json({ success: false, error: 'Failed to send email' });
  }
});

export default router; 