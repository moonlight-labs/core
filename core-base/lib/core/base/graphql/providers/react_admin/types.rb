# frozen_string_literal: true

module Core
  module Base
    module GraphQL
      module Providers
        module ReactAdmin
          module Types
            class RAListMetadata < ::GraphQL::Schema::Object
              field :count, Int, null: false
            end
          end
        end
      end
    end
  end
end
