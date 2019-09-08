class CreateCharacters < ActiveRecord::Migration[5.2]

  def change
    create_table :characters do |t|
      t.string :name
      t.integer :level
      t.integer :health
      t.integer :str
      t.integer :dex
      t.integer :con
      t.integer :int
      t.integer :wis
      t.integer :cha
      t.string :race
      t.string :klass
      t.string :weapon
      t.integer :user_id

      t.timestamps
    end
  end
end
