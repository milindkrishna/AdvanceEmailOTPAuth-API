import { mailtrapclient, sender } from "./mailtrap.config.js";
import {VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE} from "./emailTemplate.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [{email}]
    try {
        const response = await mailtrapclient.send({
            from: sender,
            to: recipient,
            subject: "Verify your account",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category: "Email Verification",
        })
        console.log("Email sent successfully", response);
        
    } catch (error) {
        throw new Error(`Error sending email: ${error.message}`);
    }
}

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [{email}]
    try {
        const response = await mailtrapclient.send({
            from: sender,
            to: recipient,
            template_uuid: "eb3125f9-7896-41b6-a628-2f649dc10141",
            template_variables: {
                "name": name,
                "company_info_name": "Rest Auth PVT LTD",
            }
        })
        console.log("Welcome Email sent successfully", response);
        
    } catch (error) {
        throw new Error(`Error sending email: ${error.message}`);
    }
}

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{email}]
    try {
        const response = await mailtrapclient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        })
        console.log("Password Reset Email sent successfully", response);
        
    } catch (error) {
        throw new Error(`Error sending email: ${error.message}`);
    }
}

export const sendResetSuccessEmail = async (email) => {
    const recipient = [{email}]
    try {
        const response = await mailtrapclient.send({
            from: sender,
            to: recipient,
            subject: "Password reset successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        })
        console.log("Password Reset Email sent successfully", response);
        
    } catch (error) {
        throw new Error(`Error sending email: ${error.message}`);
    }
}