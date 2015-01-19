var hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function(){
	return this.rooms - this.booked;
};

var eleName = document.getElementById('hotelName');
eleName.textContent = hotel.name;

var eleRooms = document.getElementById('rooms');
eleRooms.textContent = hotel.checkAvailability();