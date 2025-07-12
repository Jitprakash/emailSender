package com.jitdev.emailSender.service;

import java.io.File;

public interface EmailService {
    //Send mail to a single person
    void sendEmail(String to, String sub, String message);

    //send mail to multiple person
    void sendEmail(String []to,String sub,String message);

    //send mail with html content
    void sendEmailWithHtml(String to,String sub, String htmlContent);

    //send mail with file
    void sendEmailWithFile(String to, String sub, String message, File file);
}
