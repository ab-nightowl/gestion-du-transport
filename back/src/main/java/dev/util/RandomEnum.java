package dev.util;

import java.util.Random;

import org.springframework.stereotype.Service;

import dev.entities.Role;

@Service
public class RandomEnum {

	public static Role setRoleRandom(){
	    Role[] roles = Role.values();
	    Random generator = new Random();
	    return roles[generator.nextInt(roles.length)];
	    }
	}