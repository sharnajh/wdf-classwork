#classes practice

class Animal

    attr_reader :height, :species, :name

    attr_writer :name

    def initialize(height,species,name)
        @name = name
        @species = species
        @height = height 
    end

    def walk
        puts "I am walking very slowly"
    end

    def run
        puts "I am running very quickly"
    end

end

class Giraffe < Animal
end

class Lizard < Animal
end

jeff = Giraffe.new("50ft","mammal","jeff")

geico = Lizard.new("5in","reptile","geico")

jeff.walk
geico.run

class Calculator

    def self.add(x,y)
        puts x + y
    end

    def self.subtract(x,y)
        puts x - y
    end

    def self.multiply(x,y)
        puts x * y
    end

    def self.divide(x,y)
        puts x / y
    end

end

