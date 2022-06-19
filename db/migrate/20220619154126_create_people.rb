class CreatePeople < ActiveRecord::Migration[7.0]
  def change
    create_table :people do |t|
      t.string :firstname
      t.string :lastname
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
