class CreateVersions < ActiveRecord::Migration[7.0]
  TEXT_BYTES = 1_073_741_823

  def change
    create_table :versions, id: :uuid do |t|
      t.string    :item_type,   null: false
      t.uuid      :item_id,     null: false
      t.string    :event,       null: false
      t.string    :whodunnit
      t.text      :object, limit: TEXT_BYTES

      # Known issue in MySQL: fractional second precision
      # -------------------------------------------------
      #
      # MySQL timestamp columns do not support fractional seconds unless
      # defined with "fractional seconds precision". MySQL users should manually
      # add fractional seconds precision to this migration, specifically, to
      # the `created_at` column.
      # (https://dev.mysql.com/doc/refman/5.6/en/fractional-seconds.html)
      #
      # MySQL users should also upgrade to at least rails 4.2, which is the first
      # version of ActiveRecord with support for fractional seconds in MySQL.
      # (https://github.com/rails/rails/pull/14359)
      #
      t.datetime :created_at
    end
    add_index :versions, %i[item_type item_id]
  end
end
