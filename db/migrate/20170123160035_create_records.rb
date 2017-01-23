class CreateRecords < ActiveRecord::Migration
  def change
    create_table :records do |t|
      t.string :title
      t.float :amount
      t.date :date
      t.timestamps
    end
  end
end
