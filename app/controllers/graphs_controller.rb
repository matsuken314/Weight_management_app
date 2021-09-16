class GraphsController < ApplicationController
  def index
    # null を nil にしないといけないので注意！
    gon.weight_records = Graph.all
  end
end
