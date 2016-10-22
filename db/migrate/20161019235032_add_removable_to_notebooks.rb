class AddRemovableToNotebooks < ActiveRecord::Migration
  def change
    add_column :notebooks, :removable, :boolean, default: true
  end
end
