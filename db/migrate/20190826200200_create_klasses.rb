class CreateKlasses < ActiveRecord::Migration[5.2]
  def change
    create_table :klasses do |t|
      t.string :name
      t.string :img_url
      t.integer :hit_die

      t.timestamps
    end
  end
end
