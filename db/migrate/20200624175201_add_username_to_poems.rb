class AddUsernameToPoems < ActiveRecord::Migration[6.0]
  def change
    add_column :poems, :username, :string
  end
end
