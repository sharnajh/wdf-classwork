class Listing

    attr_accessor :host, :beds, :price, :dates_available, :cancellation, :list_of_guests, :reviews, :price, :dates_guest_is_staying

    def initialize(host,beds,price)
        @host = host
        @beds = beds
        @dates_available = {}
        @cancellation = "strict"
        @list_of_guests = {}
        @reviews = {}
        @price = price
    end

    def reserve_and_pay(guest,num_of_nights,dates_guest_is_staying)
        @list_of_guests[guest] = dates_guest_is_staying

        dates_guest_is_staying.each do |date|
            dates_available[date] = false
        end

        return @price * num_of_nights
    end

    def leave_review(guest,review_text)
        @reviews[guest] = review_text
    end
end


