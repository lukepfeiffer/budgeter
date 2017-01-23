class RecordsController < ApplicationController
  expose :records do
    Record.all
  end
end
