module Core
  module Comments
    module GraphQL
      module Filters
        class CommentFilter < Types::BaseInputObject
          description 'comment filter props'

          argument :q, String, required: false
          argument :ids, [ID], required: false
          argument :created_at_lte, String, required: false
          argument :created_at_gte, String, required: false
          argument :resource_id, ID, required: false
          argument :resource_type, String, required: false
          argument :author_id, ID, required: false
          argument :author_type, String, required: false
        end
      end
    end
  end
end
