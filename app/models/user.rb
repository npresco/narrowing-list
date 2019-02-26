require 'elasticsearch/model'

class User < ApplicationRecord
  extend  Pagy::Search
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks
end
