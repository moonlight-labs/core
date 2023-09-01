# frozen_string_literal: true

class CreateQueSchema < ActiveRecord::Migration[6.0]
  def up
    # Whenever you use Que in a migration, always specify the version you're
    # migrating to. If you're unsure what the current version is, check the
    # changelog.

    if Que.db_version == 0 # Que is not installed here so install the highest version
      Que.migrate!(version: 7)
      return
    end

    raise 'Que version must be updated to v5 before core-jobs can be installed' if Que.db_version < 5

    Que.migrate!(version: 6) if Que.db_version == 5
    Que.migrate!(version: 7) if Que.db_version == 6
  end

  def down
    # Migrate to version 0 to remove Que entirely.
    
    Que.migrate!(version: 0)
  end
end
