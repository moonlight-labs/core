# frozen_string_literal: true

module Core
  module Jobs
    module GraphQL
      module Job
        class Type < ::Core::Base::GraphQL::Types::BaseObject
          description 'A background job'

          field :actions, [String], null: false, description: 'actions'
          field :id, ID, null: false, description: ::Core::Base::GraphQL::Documentation::Fields.ids
          field :job_class, String, null: false, description: 'class of job'
          field :priority, Integer, null: false, description: 'job priority'
          field :queue, String, null: false, description: 'job queue'
          field :status, String, null: false, description: 'current status of job'
          field :sub_class, String, null: true, description: 'sub class of job'

          # rubocop:disable GraphQL/ExtractType
          field :error_count, Integer, null: true, description: 'error count'
          field :last_error_backtrace, String, null: true, description: 'last error backtrace'
          field :last_error_message, String, null: true, description: 'last error message'
          # rubocop:enable GraphQL/ExtractType

          field :args, ::GraphQL::Types::JSON, null: true, description: 'args'
          field :data, ::GraphQL::Types::JSON, null: true, description: 'data'
          field :job_schema_version, Integer, null: true, description: 'job schema version'
          field :kwargs, ::GraphQL::Types::JSON, null: true, description: 'keyword args'

          field :expired_at, ::GraphQL::Types::ISO8601DateTime, null: true, description: 'expiration timestamp'
          field :finished_at, ::GraphQL::Types::ISO8601DateTime, null: true, description: 'finished timestamp'
          field :run_at, ::GraphQL::Types::ISO8601DateTime, null: true, description: 'start running timestamp'
          field :updated_at, ::GraphQL::Types::ISO8601DateTime, null: true, description: 'last touched'
        end
      end
    end
  end
end
