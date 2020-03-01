package com.taskagile.web.payload;

import org.junit.Before;
import org.junit.Test;

import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;

public class RegistrationPayloadTests {
  private Validator validator;

  @Before
  public void setup() {
    ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
    validator = factory.getValidator();
  }

  @Test
  public void validate_blankPayload_shouldFail() {
    RegistrationPayload payload = new RegistrationPayload();
  }
}
