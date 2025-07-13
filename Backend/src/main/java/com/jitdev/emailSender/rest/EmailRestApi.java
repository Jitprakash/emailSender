package com.jitdev.emailSender.rest;

import com.jitdev.emailSender.helper.CustomResponse;
import com.jitdev.emailSender.helper.EmailMessage;
import com.jitdev.emailSender.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/email")
public class EmailRestApi {

    private EmailService emailService;

    @Autowired
    public EmailRestApi(EmailService emailService){
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public ResponseEntity<CustomResponse> sendMail(@RequestBody EmailMessage emailMessage){
        emailService.sendEmailWithHtml(emailMessage.getTo(),emailMessage.getSub(),emailMessage.getMessage());
        return ResponseEntity.ok(
                CustomResponse.builder().message("Email send Successfully").status(HttpStatus.OK).success(true).build()
        );
    }

    @PostMapping("/send-with-file")
    public ResponseEntity<CustomResponse> sendMailWithFile(@RequestPart EmailMessage emailMessage, @RequestPart MultipartFile file) throws IOException {
        emailService.sendEmailWithFile(emailMessage.getTo(),emailMessage.getSub(),emailMessage.getMessage(),file.getInputStream());
        return ResponseEntity.ok(
                CustomResponse.builder().message("Email send Successfully").status(HttpStatus.OK).success(true).build()
        );
    }
}
