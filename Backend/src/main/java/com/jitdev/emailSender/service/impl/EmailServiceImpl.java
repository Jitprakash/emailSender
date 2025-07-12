package com.jitdev.emailSender.service.impl;

import com.jitdev.emailSender.service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.File;

@Service
public class EmailServiceImpl implements EmailService {

    //Require for Mail Service
    JavaMailSender mailSender;

    //For Logging
    private Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);

    //get the user mail
    @Value("${my-mail}")
    String userMail;

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
        simpleMailMessage.setFrom(userMail);//sender mail
        //Send the mail
        mailSender.send(simpleMailMessage);//it takes a simpleMailMessage or MimeMessage as input

        //Log info
        logger.info("Email has been sent.");

    }

    @Override
    public void sendEmail(String[] to, String sub, String message) {
        //Create a simple Mail Message
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        //Set Mail properties
        simpleMailMessage.setTo(to);
        simpleMailMessage.setFrom(userMail);
        simpleMailMessage.setSubject(sub);
        simpleMailMessage.setText(message);

        //send the mail
        mailSender.send(simpleMailMessage);

        //log info
        logger.info("Email Sent successfully");

    }

    @Override
    public void sendEmailWithHtml(String to, String sub, String htmlContent) {
        //Create a Mime Message
        MimeMessage mimeMessage = mailSender.createMimeMessage();

        try {
            //Create a Mime message helper
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            //set message data
            messageHelper.setTo(to);
            messageHelper.setFrom(userMail);
            messageHelper.setSubject(sub);
            messageHelper.setText(htmlContent,true);

            //send mail
            mailSender.send(mimeMessage);

            //log info
            logger.info("Email Sent!");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void sendEmailWithFile(String to, String sub, String message, File file) {
        //Create a Mime Message
        MimeMessage mimeMessage = mailSender.createMimeMessage();

        try {
            //Create a Mime message helper
            MimeMessageHelper messageHelper = new MimeMessageHelper(mimeMessage, true);
            //set message data
            messageHelper.setTo(to);
            messageHelper.setFrom(userMail);
            messageHelper.setSubject(sub);
            messageHelper.setText(message);

            //Create a File System Resource
            FileSystemResource fileSystemResource = new FileSystemResource(file);
            messageHelper.addAttachment(fileSystemResource.getFilename(),file );

            //send mail
            mailSender.send(mimeMessage);

            //log info
            logger.info("Email Sent");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
