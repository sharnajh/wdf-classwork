#random word from array of words
#user inputs a letter
#set how many guesses they get to have
#check if the letter is in the random word and reduce the number of guesses they have left and also
#print out the word like #####j### 
#when user runs out of guesses and/or guesses all the letters of the word, they win!



def hangman()
    puts "Let's play a game of hangman!"
    puts "To play, you have the guess the word that I am thinking of letter by letter."
    puts "You have to guess the game in less than 20 turns, or you lose!"
    def game()
        words = ["chance","gemini","brooklyn","love","family","friend","robot","computer","ruby","javascript","peach","winter"]
        i = rand(0..words.length).to_i
        random_word = words[i]
        hangman_word = random_word.split(//).to_a
        hidden_word = (hangman_word.map { |letter| letter = "#"}).join(" ")
        puts hidden_word
        guesses_allowed = 12
        player_guesses = []
        while guesses_allowed > player_guesses.length.to_i && guesses_allowed <= 20 || hangman_word.length.to_i >= 0
            puts "Guess a letter:"
            player_input=gets.chomp.to_s
                if (hangman_word.include? player_input) == true
                    puts "Woohoo! There is a '#{player_input}' in the word!"
                    hangman_word.delete(player_input.to_s)
                    # puts new_hidden_word = (hangman_word.map |letter| letter == "#{player_input}" ? letter : "#{player_input}").join(" ")
                elsif (player_guesses.include? player_input) == true
                    puts "You already guessed #{player_input} before."
                elsif (hangman_word.include? player_input) == false
                    puts "Sorry! There is no '#{player_input}' in the word!"
                end
            player_guesses.push(player_input)
            puts "You have guessed the following letters: #{player_guesses}"
            puts "You have #{guesses_allowed} guesses left."
            guesses_allowed -= 1
            if hangman_word.length.to_i == 0
                puts "Congratulations! You have won!"
                break
            elsif player_input == "exit" 
                puts "You've quit the game..."
                break
            elsif guesses_allowed == 0 
                puts "GAME OVER. You've run out of chances!"
                break
            end
        end
    end
    game()
end

hangman()

