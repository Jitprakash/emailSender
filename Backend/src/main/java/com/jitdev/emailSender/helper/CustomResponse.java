package com.jitdev.emailSender.helper;

import lombok.*;
import org.springframework.http.HttpStatus;

import java.net.http.HttpResponse;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CustomResponse {
    private String message;
    private HttpStatus status;
    private boolean success = false;
}
