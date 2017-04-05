simple_quotes = 'ruby_language'
double_quotes = "ruby_language"

special_string_with_simple_quotes = 'It is "normal" and \'useful\' in the Ruby world'
special_string_with_double_quotes = "It is \"normal\" and 'useful' in the Ruby world"

puts special_string_with_simple_quotes

puts special_string_with_double_quotes


#special_string = %{It is "normal" and 'useful' in the Ruby world}
#special_string = %[It is "normal" and 'useful' in the Ruby world]
#special_string = %~It is "normal" and 'useful' in the Ruby world~
# special_string = %{t is "normal" and \{'useful' in the Ruby world}
# special_string = %{t is "normal" and {'useful'} in the Ruby world}
special_string = %{t is "normal" and {'useful'} in the Ruby world
and now we will see in 'every' moment}

puts special_string