=begin

1. Introduction

=end

idade = 27
multiplicador = 2

#puts idade * multiplicador


=begin

1.1 Set the def 'plural' in the String's class

=end

class String
	def plural
		"#{self}s"
	end
end

#puts "caneta".plural



=begin

1.2 Get the type of a variable class

=end

puts idade.class