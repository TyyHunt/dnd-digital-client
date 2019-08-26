class CreateWeapons < ActiveRecord::Migration[5.2]
  def change
    create_table :weapons do |t|
      t.string :name
      t.string :damage
      t.string :dmg_type

      t.timestamps
    end
  end
end
