var hotel = {
	name: 'Park',
	rooms: 120,
	booked: 77,
	checkAvailability: function() {
		return this.rooms - this.booked;
	}
};

var eleName = document.getElementById('hotelName');
eleName.textContent = hotel.name;

var eleRooms = document.getElementById('rooms');
eleRooms.textContent = hotel.checkAvailability();