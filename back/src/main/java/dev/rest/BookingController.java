package dev.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dev.entities.Booking;
import dev.entities.User;
import dev.repository.BookingRepository;
import dev.repository.UserRepository;

@RestController
@RequestMapping("/booking")
public class BookingController {

	@Autowired
	BookingRepository bookingRepo;
	@Autowired
	UserRepository userRepo;

	@GetMapping
	public List getAllBookings() {
		return bookingRepo.findAll();
	}

	@RequestMapping(value = "/{user}", method = RequestMethod.GET)
	public List<Booking> getAllBookingDriver(@PathVariable("user") String registrationNumber) {
		User user = new User();
		user = userRepo.findByRegistrationNumber(registrationNumber);
		List<Booking> bookingWithDriver = bookingRepo.findAllByDriver(user);
		List<Booking> bookingWithoutDriver = bookingRepo.findAllByDriverIsNull();
		List<Booking> resultFilter = new ArrayList<>();
		if (bookingWithDriver.size() == 0) {
			return bookingWithoutDriver;
		}
		bookingWithDriver.stream().forEach(driverDate -> {
			bookingWithoutDriver.stream().forEach(withoutDate -> {
				if (driverDate.getDateFirst().isAfter(withoutDate.getDateFirst())) {
					if (withoutDate.getDateLast().isBefore(driverDate.getDateFirst())
							|| withoutDate.getDateLast().isEqual(driverDate.getDateFirst())) {
						resultFilter.add(withoutDate);
					}
				} else {
					if (withoutDate.getDateFirst().isAfter(driverDate.getDateLast())
							|| withoutDate.getDateFirst().isEqual(driverDate.getDateLast())) {
						resultFilter.add(withoutDate);
					}
				}

			});
		});
		resultFilter.addAll(bookingWithDriver);

		return resultFilter;
	}

	@RequestMapping(value = "/addDriver", method = RequestMethod.PATCH, consumes = "application/json;charset=UTF-8")
	public void addDriver(@RequestBody Booking booking) {
		bookingRepo.save(booking);
	}

}
