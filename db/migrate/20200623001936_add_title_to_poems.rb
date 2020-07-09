class AddTitleToPoems < ActiveRecord::Migration[6.0]
  def change
    add_column :poems, :title, :string
  end
end
