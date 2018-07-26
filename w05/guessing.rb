computer_number = rand(1..10)
# puts random_number
current_guesses = []

puts "Welcome to the Guessing Number Game!"
puts "Guess a number from 1 to 10:"
player_guess = gets.chomp.to_i

while player_guess != computer_number
    current_guesses.push(player_guess)
    puts "Wrong! Guess again"
    puts "Your current guesses:" << current_guesses.to_s
    player_guess = gets.chomp.to_i
    number_of_guesses += 1
end 
    puts number_of_guesses
    puts "Correct! You've won the game!"

