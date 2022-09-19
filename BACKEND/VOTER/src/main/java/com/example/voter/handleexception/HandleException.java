package com.example.voter.handleexception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.example.voter.exception.AlreadyFoundException;

@ControllerAdvice
public class HandleException {
	@ExceptionHandler(value=AlreadyFoundException.class)
	public ResponseEntity<Object> exception(AlreadyFoundException e){
		return new ResponseEntity<>("Id Already Exist",HttpStatus.NOT_FOUND);
	}

}
