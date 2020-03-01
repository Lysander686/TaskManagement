package com.taskagile.domain.application.commands;


import org.springframework.util.Assert;


public class RegistrationCommand {

    private String username;
    private String emailAddress;
    private String password;

    public RegistrationCommand(String username, String emailAddress, String password) {
        Assert.hasText(username, "Parameter `username` must not be empty");
        Assert.hasText(emailAddress, "Parameter `emailAddress` must not be empty");
        Assert.hasText(password, "Parameter `password` must not be empty");

        this.username = username;
        this.emailAddress = emailAddress;
        this.password = password;
    }


    public String getUsername() {
        return this.username;
    }

    public String getEmailAddress() {
        return this.emailAddress;
    }

    public String getPassword() {
        return this.password;
    }

    @Override
    public int hashCode() {
        int result = username != null ? username.hashCode() : 0;
        result = 31 * result + (emailAddress != null ? emailAddress.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        return result;
    }

    @Override
    public String toString() {
        return "RegistrationCommand{" +
                "username='" + username + '\'' +
                ", emailAddress='" + emailAddress + '\'' +
                ", password='" + password + '\'' +
                '}';
    }


}
