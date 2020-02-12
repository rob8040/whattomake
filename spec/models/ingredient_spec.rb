require 'rails_helper'

RSpec.describe Ingredient, type: :model do
  it { is_expected.to validate_presence_of(:ingredients)}
end
