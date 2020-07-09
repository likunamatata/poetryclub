class AddPoemJsonToPoems < ActiveRecord::Migration[6.0]
  def change
    add_column :poems, :poem_json, :json
  end
end
