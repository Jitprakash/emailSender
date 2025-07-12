package com.jitdev.emailSender.service.impl;

import com.jitdev.emailSender.service.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class EmailServiceImpl implements EmailService {

    //Require for Mail Service
    JavaMailSender mailSender;

    //For Logging
    private Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);

    @Autowired
    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public void sendEmail(String to, String sub, String message) {
        //Create a Simple Mail Message
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        //Set mail properties
        simpleMailMessage.setTo(to);//Receiver mail address
        simpleMailMessage.setSubject(sub);//subject of the mail
        simpleMailMessage.setText(message);//Text message
        simpleMailMessage.setFrom("jitprakashstudy2025@gmail.com");//sender mail
        //Send the mail
        mailSender.send(simpleMailMessage);//it takes a simpleMailMessage or MimeMessage as input

        //Log info
         logger.info("Email has been sent.");

    }

    @Override
    public void sendEmail(String[] to, String sub, String message) {

    }

    @Override
    public void sendEmailWithHtml(String to, String sub, String htmlContent) {

    }

    @Override
    public void sendEmailWithFile(String to, String sub, String message, File file) {

    }
}
