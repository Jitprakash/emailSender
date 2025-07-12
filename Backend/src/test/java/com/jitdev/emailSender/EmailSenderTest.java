package com.jitdev.emailSender;

import com.jitdev.emailSender.service.EmailService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class EmailSenderTest {

    @Autowired
    private EmailService emailService;

    @Test
    void sendEmailTest() {
        emailService.sendEmail("susilsahu1947@gmail.com", "test1",
                "Do not Reply to this mail, it's only for test purpose[Create using spring boot]");
        // No verification, just send the email
    }
}
