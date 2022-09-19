package com.example.voter.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Voter")
public class Voter {

	@Id
	private int id;
	private String name;
	private String gender;
	private String state;
	private String city;
	
}
