require './listing.rb'

class Host

    attr_accessor :name_of_host, :home_name, :beds, :price

    def initialize(name_of_host,beds,price,home_name)
        @name_of_host = name_of_host
        @home_name = home_name
        @beds = beds
        @price = price
    end

    def create_listing(name_of_host,beds,price)
        @name_of_host = name_of_host
        @beds = beds
        @price = price
        return @home_name = Listing.new(name_of_host,beds,price)
    end
end

puts katie = Host.new("Katie",3,100,"Treehouse")

puts katie.home_name = katie.create_listing(katie.name_of_host,2,100)
