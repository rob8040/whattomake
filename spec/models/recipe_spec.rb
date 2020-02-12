require 'rails_helper'

RSpec.describe Recipe, type: :model do
  it { is_expected.to validate_presence_of(:name)}
  it { is_expected.to validate_presence_of(:picture)}
  it { is_expected.to validate_presence_of(:ingredients)}
  it { is_expected.to validate_presence_of(:instructions)}
  it { is_expected.to validate_numericality_of(:rating)}
end
