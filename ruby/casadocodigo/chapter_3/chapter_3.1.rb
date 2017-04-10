class Livro

	def initialize(author, isbn = "1", number_of_pages)
		puts "Author: #{author}, ISBN: #{isbn}, Pages: #{number_of_pages}"
	end

	
	def price_with_discount(price, discount)
		price - (price * discount)
	end

	
end

test_and_design = Livro.new "Teste", 200
responsive_web_design = Livro.new "Responsive Web Design", 300

