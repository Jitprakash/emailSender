package com.jitdev.emailSender.helper;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class EmailMessage {

    private String to;
    private String sub;
    private String message;
}
