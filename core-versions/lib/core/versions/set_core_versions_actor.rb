class ActionController::Base
  def set_core_versions_actor
    set_paper_trail_whodunnit
  end
end