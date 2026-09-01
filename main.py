import os
from dotenv import load_dotenv

from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
from typing import Optional
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from settings import Settings

app = FastAPI()


load_dotenv()  # Load environment variables from .env

# cnfigure CORS to allow request from website

app.add_middleware(
    CORSMiddleware,
    allow_origins= ["*","http://localhost:5500","https://tobivictor.tech","https://tobivictor.doxantro.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactForm(BaseModel):
    name :str
    email: EmailStr
    message: str
    

settings = Settings()
# Removed print of sensitive info

# Email Configuration (for Gmail, see .env setup below)
# Example .env values:
# EMAIL_HOST=smtp.gmail.com
# EMAIL_PORT=587
# EMAIL_USER=your_gmail@gmail.com
# EMAIL_PASSWORD=your_app_password
# RECIPIENT_EMAIL=your_gmail@gmail.com

from fastapi import status
from fastapi.responses import JSONResponse
import re

# Optionally, add rate limiting middleware here (e.g., slowapi or custom)

@app.get("/")
def index():
    return JSONResponse({"message" : "welcome Home"})

@app.post("/send-message")
async def send_message(form_data: ContactForm):
    # Basic input validation
    if not (2 <= len(form_data.name) <= 100):
        raise HTTPException(status_code=400, detail="Name must be between 2 and 100 characters.")
    if not (5 <= len(form_data.message) <= 2000):
        raise HTTPException(status_code=400, detail="Message must be between 5 and 2000 characters.")
    # Optional: check for valid characters in name
    if not re.match(r"^[A-Za-z0-9 .,'-]+$", form_data.name):
        raise HTTPException(status_code=400, detail="Name contains invalid characters.")
    try:
        # create the E-mail message
        msg = MIMEMultipart()
        msg["From"] = settings.email_user
        msg["To"] = settings.recipient_email
        msg["Subject"] = f"Portfolio Contact: Message from {form_data.name}"
        # Email body
        body = f"""
        Name: {form_data.name}
        Email: {form_data.email}

        Message:
        {form_data.message}
        """
        msg.attach(MIMEText(body, "plain"))
        
        # Send the email
        with smtplib.SMTP(settings.email_host, settings.email_port) as server:
            server.starttls()
            server.login(settings.email_user, settings.email_password)
            server.send_message(msg)
        return {"status": "success", "message": "Email sent successfully"}
    except smtplib.SMTPAuthenticationError:
        raise HTTPException(status_code=500, detail="SMTP authentication failed. Check your email credentials.")
    except smtplib.SMTPException as e:
        raise HTTPException(status_code=500, detail=f"SMTP error: {str(e)}")
    except Exception:
        raise HTTPException(status_code=500, detail="Failed to send email due to an unexpected error.")
