"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData) {
	const { firstname, lastname, email, phone, service, message } = Object.fromEntries(formData.entries());

	if (!firstname || !lastname || !email || !message) {
		throw new Error("Missing required fields.");
	}

	// Create a transporter using Gmail
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.GMAIL_USER, // Your Gmail address
			pass: process.env.GMAIL_PASS, // Your Gmail password or App Password
		},
	});

	// Define email options
	const mailOptions = {
		from: process.env.GMAIL_USER,
		to: "nishatislam3108@gmail.com", // Replace with your Gmail address
		subject: `New message from ${firstname} ${lastname}`,
		text: `
      Name: ${firstname} ${lastname}
      Email: ${email}
      Phone: ${phone || "N/A"}
      Service: ${service || "N/A"}
      Message: ${message}
    `,
		html: `
      <h3>New message from your portfolio</h3>
      <p><strong>Name:</strong> ${firstname} ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Service:</strong> ${service || "N/A"}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
	};

	// Send the email
	try {
		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (error) {
		console.error("Error sending email:", error);
		throw new Error("Failed to send message.");
	}
}
