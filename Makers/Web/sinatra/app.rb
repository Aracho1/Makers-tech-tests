require 'sinatra'

get '/' do
  "hello!"
end

get '/cat'do
 erb :cat_photo
end