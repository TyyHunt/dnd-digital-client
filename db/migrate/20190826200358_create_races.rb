class CreateRaces < ActiveRecord::Migration[5.2]
  def change
    create_table :races do |t|
      t.string :name
      t.string :img_url
      t.integer :speed
      t.string :bonus
      t.string :size

      t.timestamps
    end
  end
end
