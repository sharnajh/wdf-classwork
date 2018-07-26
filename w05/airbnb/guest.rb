require './listing.rb'
require './host.rb'

class Guest
    attr_accessor :name, :bookings, :home_name, :dates_guest_is_staying, :guest_name, :reservation, :bookings

    def initialize(guest_name)
        @guest_name = guest_name
        @bookings = {}
    end

    def book(home_name,dates_guest_is_staying)   
        @bookings["#{home_name}_reservation"] = {
            name: @guest_name = guest_name,
            home: @home_name = home_name,
            dates: @dates_guest_is_staying = dates_guest_is_staying
        }
    end
end

puts choti = Guest.new("Choti")
choti.book("treehouse","200")
choti.book("cabin","300")
choti.book("mansion","300")
puts choti.bookings




