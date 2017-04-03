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

#puts idade.class

habitantes = 7_000_000_000
peso = 77.9
#puts habitantes
#puts peso


nome_completo = "Marcio Bera"
twitter = '@marciobera'

#puts nome_completo.class
#puts twitter.class

nome_com_aspas_simples = 'Joana d\'Arc' 
boas_vindas = "Seja be-vinda(o) " + nome_com_aspas_simples 

puts boas_vindas

